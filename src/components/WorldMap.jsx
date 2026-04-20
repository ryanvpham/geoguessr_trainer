import { useEffect, useRef, useState, useMemo, useCallback } from 'react'
import { geoMercator, geoPath } from 'd3-geo'
import * as topojson from 'topojson-client'
import { alpha2ToNumeric, normalizeNumericId } from '../utils/isoNumericMapping'

// World-atlas 50m (~700KB gzipped). Good coastline detail for every country.
// We deliberately DON'T use 10m: its Maldives feature has an antimeridian
// encoding bug that makes d3-geo project it as a world-spanning rectangle,
// which renders as a big beige box over the entire map.
const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json'

// SVG viewBox size. We render at a fixed internal resolution and scale with CSS.
const WIDTH = 960
const HEIGHT = 520

// Auto-zoom minimums, scaled to country size. Microstates like Monaco,
// Vatican, or Malta get a tight 10° view so the country and capital are
// actually legible; small-but-not-micro countries (Netherlands, Belgium,
// Germany) get a roomier 20° minimum so you still see the neighbors.
const MIN_SPAN_MICRO = 10
const MIN_SPAN_NORMAL = 20
// Countries with a natural bbox side smaller than this are "micro" for
// zoom purposes (catches Monaco, Vatican, Malta, Singapore, Bahrain, etc.).
const MICRO_THRESHOLD_DEG = 2

// How much breathing room around the target country. 2.5× means a country
// with a 10° bounding box gets a 25° viewport — you always see neighbors.
const FRAME_PADDING = 2.5

// Threshold below which a country is considered "tiny" and gets a pin marker.
const TINY_SPAN_DEG = 3

// User-zoom clamp (manual pinch / wheel / buttons).
const MIN_USER_SPAN = 1.5 // closest zoom-in (street-level roughly)
const MAX_USER_SPAN = 360 // full world view

// Mercator blows up near the poles — clamp center latitude.
const MAX_LAT = 78

// Default world view.
const DEFAULT_VIEW = { cx: 10, cy: 25, span: 360 }

// Simple ease-in-out for the zoom animation.
const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)

const clamp = (x, lo, hi) => Math.max(lo, Math.min(hi, x))

// Cache the parsed GeoJSON across component unmounts — it never changes.
let cachedFeatures = null
let fetchPromise = null

function loadGeo() {
  if (cachedFeatures) return Promise.resolve(cachedFeatures)
  if (fetchPromise) return fetchPromise
  fetchPromise = fetch(GEO_URL)
    .then((r) => r.json())
    .then((topo) => {
      const countries = topojson.feature(topo, topo.objects.countries)
      cachedFeatures = countries.features
      return cachedFeatures
    })
  return fetchPromise
}

// SVG path for a 5-point star, drawn around origin. We scale/translate it
// when rendering via a <path transform>. This shape is ~20 units wide, which
// is a comfortable size in our 960x520 viewBox.
const STAR_PATH =
  'M0,-10 L2.35,-3.23 L9.51,-3.09 L3.74,1.23 L5.88,8.09 L0,4 L-5.88,8.09 L-3.74,1.23 L-9.51,-3.09 L-2.35,-3.23 Z'

// Pick the "primary" polygon of a country feature for auto-zoom framing.
// If `capitalCoords` is given ([lat, lng]), prefer the polygon whose bbox
// contains that point (the one with the capital in it). Otherwise pick the
// largest polygon by bbox area. This keeps scattered overseas territories
// (Aruba for NL, French Guiana for FR, Falklands for GB, Alaska for US)
// from blowing up the auto-zoom span.
function primaryBbox(feature, capitalCoords) {
  const g = feature.geometry
  if (!g) return null

  // Normalize to an array of polygons. A "polygon" here is an array of rings;
  // ring[0] is the outer ring (which is enough for bbox purposes).
  const polygons =
    g.type === 'MultiPolygon' ? g.coordinates :
    g.type === 'Polygon' ? [g.coordinates] :
    []

  const bboxes = polygons.map((poly) => {
    const ring = poly[0] || []
    let minLon = Infinity, maxLon = -Infinity
    let minLat = Infinity, maxLat = -Infinity
    for (const pt of ring) {
      const [lon, lat] = pt
      if (lon < minLon) minLon = lon
      if (lon > maxLon) maxLon = lon
      if (lat < minLat) minLat = lat
      if (lat > maxLat) maxLat = lat
    }
    const lonSpan = maxLon - minLon
    const latSpan = maxLat - minLat
    return {
      minLon, maxLon, minLat, maxLat,
      lonSpan, latSpan,
      area: lonSpan * latSpan,
      cx: (minLon + maxLon) / 2,
      cy: (minLat + maxLat) / 2,
    }
  })

  if (bboxes.length === 0) return null

  // Capital-containing polygon wins if we have a capital.
  if (capitalCoords && Array.isArray(capitalCoords)) {
    const [capLat, capLng] = capitalCoords
    const containing = bboxes.find(
      (b) =>
        capLng >= b.minLon && capLng <= b.maxLon &&
        capLat >= b.minLat && capLat <= b.maxLat
    )
    if (containing) return containing
  }

  // Otherwise: largest polygon by bbox area.
  return bboxes.reduce((best, b) => (b.area > best.area ? b : best), bboxes[0])
}

function WorldMap({ highlightedCountryCode, capitalCoords }) {
  const [features, setFeatures] = useState(cachedFeatures)
  const [view, setView] = useState(DEFAULT_VIEW)
  const animationRef = useRef(null)
  const svgRef = useRef(null)

  // Drag state (pointer coords in SVG viewBox space + snapshot of view)
  const dragRef = useRef(null)
  // Multi-pointer state for pinch
  const pointersRef = useRef(new Map())
  const pinchRef = useRef(null)

  // Load the TopoJSON once.
  useEffect(() => {
    let cancelled = false
    loadGeo().then((f) => {
      if (!cancelled) setFeatures(f)
    })
    return () => {
      cancelled = true
    }
  }, [])

  // Natural Earth uses id "-99" for several disputed territories (Kosovo,
  // Somaliland, Northern Cyprus, etc.) — so matching by numeric id alone
  // ambiguates them. Fall back to matching by feature name for these cases.
  const SPECIAL_NAME_MATCH = {
    XK: ['Kosovo'],
  }

  const targetFeature = useMemo(() => {
    if (!features || !highlightedCountryCode) return null

    const specialNames = SPECIAL_NAME_MATCH[highlightedCountryCode]
    if (specialNames) {
      const byName = features.find((f) => {
        const n = f.properties && f.properties.name
        return n && specialNames.includes(n)
      })
      if (byName) return byName
    }

    const numId = alpha2ToNumeric[highlightedCountryCode]
    if (!numId) return null
    return (
      features.find(
        (f) => normalizeNumericId(f.id) === normalizeNumericId(numId)
      ) || null
    )
  }, [features, highlightedCountryCode])

  const cancelAnimation = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
      animationRef.current = null
    }
  }, [])

  const animateTo = useCallback(
    (from, to, duration) => {
      cancelAnimation()
      const startTime = performance.now()
      const step = (now) => {
        const t = Math.min(1, (now - startTime) / duration)
        const k = easeInOut(t)
        setView({
          cx: from.cx + (to.cx - from.cx) * k,
          cy: from.cy + (to.cy - from.cy) * k,
          span: from.span + (to.span - from.span) * k,
        })
        if (t < 1) {
          animationRef.current = requestAnimationFrame(step)
        } else {
          animationRef.current = null
        }
      }
      animationRef.current = requestAnimationFrame(step)
    },
    [cancelAnimation]
  )

  // Animate the view to the target country.
  useEffect(() => {
    cancelAnimation()

    if (!targetFeature) {
      if (!highlightedCountryCode) {
        animateTo({ ...view }, DEFAULT_VIEW, 600)
      } else if (features) {
        // Only warn once the TopoJSON has actually loaded. Before that,
        // `targetFeature` is null simply because there's no data yet.
        console.warn(
          `WorldMap: country "${highlightedCountryCode}" not found in TopoJSON — holding view.`
        )
      }
      return
    }

    try {
      // Pick a "primary" polygon to frame instead of using the whole multi-polygon
      // bounding box. For countries with scattered overseas territories (NL, FR,
      // GB, NO, US, DK, …), the full bbox spans continents and auto-zoom frames
      // the Atlantic. For the capital quiz, the primary polygon is the one that
      // contains the capital; for the country quiz, it's the largest polygon.
      const primary = primaryBbox(targetFeature, capitalCoords)

      const cLon = capitalCoords ? capitalCoords[1] : primary.cx
      const cLat = capitalCoords ? capitalCoords[0] : primary.cy
      const naturalMax = Math.max(primary.lonSpan, primary.latSpan)
      const minSpan =
        naturalMax < MICRO_THRESHOLD_DEG ? MIN_SPAN_MICRO : MIN_SPAN_NORMAL
      const span = clamp(naturalMax * FRAME_PADDING, minSpan, 160)

      animateTo(
        { ...view },
        {
          cx: cLon,
          cy: clamp(cLat, -MAX_LAT, MAX_LAT),
          span,
        },
        800
      )
    } catch (e) {
      console.error('WorldMap: failed to compute bounds for', targetFeature, e)
    }
    // Intentionally don't include `view` — we only want to re-run when the target changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetFeature, capitalCoords])

  // Build the Mercator projection for the current view.
  const buildProjection = useCallback((v) => {
    const proj = geoMercator()
    const spanRad = (v.span * Math.PI) / 180
    const baseScale = (Math.min(WIDTH, HEIGHT) * 0.9) / spanRad
    proj.scale(baseScale)
    proj.translate([WIDTH / 2, HEIGHT / 2])
    proj.center([v.cx, clamp(v.cy, -MAX_LAT, MAX_LAT)])
    return proj
  }, [])

  const projection = useMemo(() => buildProjection(view), [view, buildProjection])
  const pathGen = useMemo(() => geoPath(projection), [projection])

  const targetOverlay = useMemo(() => {
    if (!targetFeature) return null
    try {
      // Use the primary polygon's bbox so the pin sits on the main country,
      // not on the centroid of a scattered multi-polygon (which can land in
      // the ocean between mainland NL and Aruba, for example).
      const primary = primaryBbox(targetFeature, capitalCoords)
      if (!primary) return null
      const isTiny = Math.max(primary.lonSpan, primary.latSpan) < TINY_SPAN_DEG
      const screen = projection([primary.cx, primary.cy])
      if (!screen || !isFinite(screen[0]) || !isFinite(screen[1])) return null
      return { x: screen[0], y: screen[1], isTiny }
    } catch {
      return null
    }
  }, [targetFeature, capitalCoords, projection])

  // Project the capital's lat/lng into screen space whenever the view or
  // capital changes. We suppress the marker when the pin marker (tiny-country
  // indicator) would collide with it — for microstates the centroid and the
  // capital are basically the same point, and the pin does the job.
  const capitalOverlay = useMemo(() => {
    if (!capitalCoords || !Array.isArray(capitalCoords)) return null
    // capitalCoordinates stores [lat, lng], but d3 wants [lng, lat].
    const [lat, lng] = capitalCoords
    const screen = projection([lng, lat])
    if (!screen || !isFinite(screen[0]) || !isFinite(screen[1])) return null
    return { x: screen[0], y: screen[1] }
  }, [capitalCoords, projection])

  // --- Pointer <-> SVG viewBox coords -------------------------------------

  const clientToSvg = useCallback((clientX, clientY) => {
    const svg = svgRef.current
    if (!svg) return [0, 0]
    const rect = svg.getBoundingClientRect()
    return [
      ((clientX - rect.left) / rect.width) * WIDTH,
      ((clientY - rect.top) / rect.height) * HEIGHT,
    ]
  }, [])

  // --- Zoom around an anchor point ----------------------------------------

  // Zoom to a new span while keeping the geographic point under `[svgX, svgY]`
  // pinned in place — i.e. the cursor/center stays on the same spot on Earth.
  const zoomAroundPoint = useCallback(
    (newSpan, svgX, svgY) => {
      setView((prev) => {
        const targetSpan = clamp(newSpan, MIN_USER_SPAN, MAX_USER_SPAN)
        if (targetSpan === prev.span) return prev

        // What lon/lat is under the pointer with the CURRENT projection?
        const curProj = buildProjection(prev)
        const anchorLonLat = curProj.invert([svgX, svgY])
        if (!anchorLonLat || !isFinite(anchorLonLat[0])) return prev

        // Build a hypothetical projection with new span but same center. Find
        // where the anchor lon/lat would land; we need to shift the center so
        // it lands back on (svgX, svgY).
        const trialProj = buildProjection({ ...prev, span: targetSpan })
        const wouldLandAt = trialProj(anchorLonLat)
        if (!wouldLandAt || !isFinite(wouldLandAt[0])) return prev

        const dx = wouldLandAt[0] - svgX
        const dy = wouldLandAt[1] - svgY

        // Shift center by inverting (W/2+dx, H/2+dy) with the trial projection.
        const shiftedCenter = trialProj.invert([WIDTH / 2 + dx, HEIGHT / 2 + dy])
        if (!shiftedCenter || !isFinite(shiftedCenter[0])) return prev

        return {
          cx: shiftedCenter[0],
          cy: clamp(shiftedCenter[1], -MAX_LAT, MAX_LAT),
          span: targetSpan,
        }
      })
    },
    [buildProjection]
  )

  // --- Wheel zoom ---------------------------------------------------------

  const onWheel = useCallback(
    (e) => {
      e.preventDefault()
      cancelAnimation()
      const [sx, sy] = clientToSvg(e.clientX, e.clientY)
      // Normalize deltaY across input types: trackpads report pixels (small
      // values per event), mouse wheels report lines or pages (large values
      // per click). Then cap magnitude so a single mouse-wheel click doesn't
      // yank the zoom halfway to the floor/ceiling.
      let raw = e.deltaY
      if (e.deltaMode === 1) raw *= 40 // lines → approx px
      if (e.deltaMode === 2) raw *= 800 // pages → approx px
      raw = Math.max(-50, Math.min(50, raw))
      const factor = Math.exp(raw * 0.01) // tuned for trackpad responsiveness
      setView((prev) => {
        const newSpan = clamp(prev.span * factor, MIN_USER_SPAN, MAX_USER_SPAN)
        if (newSpan === prev.span) return prev
        // Inline zoomAroundPoint logic so we work from `prev` reliably.
        const curProj = buildProjection(prev)
        const anchorLonLat = curProj.invert([sx, sy])
        if (!anchorLonLat || !isFinite(anchorLonLat[0])) return prev
        const trialProj = buildProjection({ ...prev, span: newSpan })
        const wouldLandAt = trialProj(anchorLonLat)
        if (!wouldLandAt || !isFinite(wouldLandAt[0])) return prev
        const dx = wouldLandAt[0] - sx
        const dy = wouldLandAt[1] - sy
        const shiftedCenter = trialProj.invert([WIDTH / 2 + dx, HEIGHT / 2 + dy])
        if (!shiftedCenter || !isFinite(shiftedCenter[0])) return prev
        return {
          cx: shiftedCenter[0],
          cy: clamp(shiftedCenter[1], -MAX_LAT, MAX_LAT),
          span: newSpan,
        }
      })
    },
    [buildProjection, cancelAnimation, clientToSvg]
  )

  // Attach wheel listener non-passively so preventDefault works.
  // We depend on `features` because the SVG doesn't mount until data loads —
  // without this dep, the effect would run once before the <svg> exists and
  // never re-attach after mount. (That was the bug killing trackpad zoom.)
  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    const handler = (e) => onWheel(e)
    svg.addEventListener('wheel', handler, { passive: false })
    return () => svg.removeEventListener('wheel', handler)
  }, [onWheel, features])

  // --- Pointer drag to pan + pinch to zoom --------------------------------

  const onPointerDown = useCallback(
    (e) => {
      cancelAnimation()
      const svg = svgRef.current
      if (!svg) return
      svg.setPointerCapture?.(e.pointerId)
      const [sx, sy] = clientToSvg(e.clientX, e.clientY)
      pointersRef.current.set(e.pointerId, { sx, sy, clientX: e.clientX, clientY: e.clientY })

      if (pointersRef.current.size === 1) {
        // Single-pointer drag — snapshot the view at start.
        dragRef.current = {
          startSvg: [sx, sy],
          startView: { ...view },
        }
      } else if (pointersRef.current.size === 2) {
        // Second pointer down → initialize pinch.
        const [p1, p2] = Array.from(pointersRef.current.values())
        const dx = p1.sx - p2.sx
        const dy = p1.sy - p2.sy
        const startDist = Math.hypot(dx, dy) || 1
        const midSvg = [(p1.sx + p2.sx) / 2, (p1.sy + p2.sy) / 2]
        pinchRef.current = {
          startDist,
          startSpan: view.span,
          midSvg,
          startView: { ...view },
        }
        dragRef.current = null // pinch takes over
      }
    },
    [cancelAnimation, clientToSvg, view]
  )

  const onPointerMove = useCallback(
    (e) => {
      const tracked = pointersRef.current.get(e.pointerId)
      if (!tracked) return
      const [sx, sy] = clientToSvg(e.clientX, e.clientY)
      tracked.sx = sx
      tracked.sy = sy

      // Pinch zoom (two pointers)
      if (pointersRef.current.size >= 2 && pinchRef.current) {
        const [p1, p2] = Array.from(pointersRef.current.values())
        const dist = Math.hypot(p1.sx - p2.sx, p1.sy - p2.sy) || 1
        const ratio = pinchRef.current.startDist / dist // >1 ⇒ fingers closer ⇒ zoom out
        const newSpan = clamp(
          pinchRef.current.startSpan * ratio,
          MIN_USER_SPAN,
          MAX_USER_SPAN
        )
        const [mx, my] = pinchRef.current.midSvg
        // Zoom around midpoint of the two fingers.
        setView((prev) => {
          const startProj = buildProjection(pinchRef.current.startView)
          const anchorLonLat = startProj.invert([mx, my])
          if (!anchorLonLat || !isFinite(anchorLonLat[0])) return prev
          const trialProj = buildProjection({
            ...pinchRef.current.startView,
            span: newSpan,
          })
          const wouldLandAt = trialProj(anchorLonLat)
          if (!wouldLandAt || !isFinite(wouldLandAt[0])) return prev
          const dx = wouldLandAt[0] - mx
          const dy = wouldLandAt[1] - my
          const shifted = trialProj.invert([WIDTH / 2 + dx, HEIGHT / 2 + dy])
          if (!shifted || !isFinite(shifted[0])) return prev
          return {
            cx: shifted[0],
            cy: clamp(shifted[1], -MAX_LAT, MAX_LAT),
            span: newSpan,
          }
        })
        return
      }

      // Single-pointer drag (pan)
      if (dragRef.current && pointersRef.current.size === 1) {
        const [startSx, startSy] = dragRef.current.startSvg
        const dx = sx - startSx
        const dy = sy - startSy
        const startProj = buildProjection(dragRef.current.startView)
        // Where on Earth was "center of screen" at drag start? The point of the
        // map that started under the cursor should still be under the cursor.
        const anchorLonLat = startProj.invert([startSx, startSy])
        if (!anchorLonLat || !isFinite(anchorLonLat[0])) return
        // We want: newProj(anchorLonLat) = [startSx + dx, startSy + dy]
        // newProj has same scale as startProj, only center changes.
        // Equivalently: shift center so that center-of-screen maps to
        // (startProj.invert([W/2 - dx, H/2 - dy])).
        const newCenter = startProj.invert([WIDTH / 2 - dx, HEIGHT / 2 - dy])
        if (!newCenter || !isFinite(newCenter[0])) return
        setView({
          cx: newCenter[0],
          cy: clamp(newCenter[1], -MAX_LAT, MAX_LAT),
          span: dragRef.current.startView.span,
        })
      }
    },
    [buildProjection, clientToSvg]
  )

  const onPointerUp = useCallback((e) => {
    pointersRef.current.delete(e.pointerId)
    if (pointersRef.current.size < 2) {
      pinchRef.current = null
    }
    if (pointersRef.current.size === 0) {
      dragRef.current = null
    }
  }, [])

  // --- Zoom buttons -------------------------------------------------------

  const zoomByFactor = useCallback(
    (factor) => {
      cancelAnimation()
      zoomAroundPoint(view.span * factor, WIDTH / 2, HEIGHT / 2)
    },
    [cancelAnimation, view.span, zoomAroundPoint]
  )

  const resetView = useCallback(() => {
    cancelAnimation()
    // If a target is focused, zoom back to it; else go to the world view.
    if (targetFeature) {
      try {
        const primary = primaryBbox(targetFeature, capitalCoords)
        if (primary) {
          const cLon = capitalCoords ? capitalCoords[1] : primary.cx
          const cLat = capitalCoords ? capitalCoords[0] : primary.cy
          const naturalMax = Math.max(primary.lonSpan, primary.latSpan)
          const minSpan =
            naturalMax < MICRO_THRESHOLD_DEG ? MIN_SPAN_MICRO : MIN_SPAN_NORMAL
          animateTo(
            { ...view },
            {
              cx: cLon,
              cy: clamp(cLat, -MAX_LAT, MAX_LAT),
              span: clamp(naturalMax * FRAME_PADDING, minSpan, 160),
            },
            500
          )
          return
        }
      } catch {
        /* fall through */
      }
    }
    animateTo({ ...view }, DEFAULT_VIEW, 500)
  }, [animateTo, cancelAnimation, targetFeature, capitalCoords, view])

  if (!features) {
    return (
      <div className="map-container">
        <div className="map-loading">Loading map…</div>
      </div>
    )
  }

  return (
    <div className="map-container">
      <svg
        ref={svgRef}
        className="world-map-svg"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="World map with highlighted country"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onPointerLeave={onPointerUp}
        style={{
          cursor: dragRef.current ? 'grabbing' : 'grab',
          touchAction: 'none', // prevent browser pan/zoom on touchscreens
        }}
      >
        <defs>
          <radialGradient id="ocean-gradient" cx="50%" cy="50%" r="75%">
            <stop offset="0%" stopColor="#bfd9ee" />
            <stop offset="100%" stopColor="#8fb9dc" />
          </radialGradient>
        </defs>

        <rect width={WIDTH} height={HEIGHT} fill="url(#ocean-gradient)" />

        <g className="countries-layer">
          {features.map((feat, i) => {
            const isHighlighted =
              targetFeature &&
              normalizeNumericId(feat.id) === normalizeNumericId(targetFeature.id)
            const d = pathGen(feat)
            if (!d) return null
            // `feat.id` is not unique in the 10m dataset: Australia and
            // Ashmore & Cartier Islands both have id "036", and 16 small
            // territories have no id at all. Use the array index to
            // guarantee a unique React key.
            return (
              <path
                key={i}
                d={d}
                fill={isHighlighted ? '#f59e0b' : '#f5efdf'}
                stroke={isHighlighted ? '#b45309' : '#8f8878'}
                strokeWidth={isHighlighted ? 1.4 : 0.6}
                vectorEffect="non-scaling-stroke"
                style={{ transition: 'fill 0.25s ease, stroke 0.25s ease' }}
              />
            )
          })}
        </g>

        {/* Show the country-centroid pin only when we aren't also drawing a
            capital star — otherwise the two markers compete for attention. */}
        {targetOverlay && !capitalOverlay && (
          <g className="target-marker" pointerEvents="none">
            <circle
              cx={targetOverlay.x}
              cy={targetOverlay.y}
              r={targetOverlay.isTiny ? 14 : 10}
              fill="none"
              stroke="#f59e0b"
              strokeWidth={2}
              opacity={0.55}
            >
              <animate
                attributeName="r"
                from={targetOverlay.isTiny ? 8 : 6}
                to={targetOverlay.isTiny ? 22 : 18}
                dur="1.4s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from="0.75"
                to="0"
                dur="1.4s"
                repeatCount="indefinite"
              />
            </circle>
            <circle
              cx={targetOverlay.x}
              cy={targetOverlay.y}
              r={targetOverlay.isTiny ? 5 : 3.5}
              fill="#f59e0b"
              stroke="#ffffff"
              strokeWidth={1.5}
            />
          </g>
        )}

        {capitalOverlay && (
          <g
            className="capital-marker"
            transform={`translate(${capitalOverlay.x} ${capitalOverlay.y})`}
            pointerEvents="none"
          >
            {/* White halo so the star stays visible on the amber-highlighted country */}
            <circle r={12} fill="#ffffff" opacity={0.85} />
            {/* Gold star with dark outline */}
            <path
              d={STAR_PATH}
              fill="#fbbf24"
              stroke="#422006"
              strokeWidth={1.2}
              strokeLinejoin="round"
            />
          </g>
        )}
      </svg>

      <div className="map-controls" aria-label="Map zoom controls">
        <button
          type="button"
          className="map-ctrl-btn"
          onClick={() => zoomByFactor(0.6)}
          aria-label="Zoom in"
          title="Zoom in"
        >
          +
        </button>
        <button
          type="button"
          className="map-ctrl-btn"
          onClick={() => zoomByFactor(1 / 0.6)}
          aria-label="Zoom out"
          title="Zoom out"
        >
          −
        </button>
        <button
          type="button"
          className="map-ctrl-btn map-ctrl-reset"
          onClick={resetView}
          aria-label="Reset view"
          title="Reset view"
        >
          ⟳
        </button>
      </div>
    </div>
  )
}

export default WorldMap
