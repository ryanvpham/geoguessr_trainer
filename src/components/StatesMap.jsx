import { useEffect, useMemo, useState } from 'react'
import WorldMap from './WorldMap'
import { normalizeString } from '../utils/answerValidation'

// Per-country Admin-1 GeoJSON. Each file is a FeatureCollection whose
// `properties.name` is the state/province name, e.g. "California".
//   - US: 50 states + DC + Puerto Rico (PublicaMundi; Hawaii/Alaska included,
//         unlike the click_that_hood US file which drops non-contiguous states)
//   - MX: 32 states (click_that_hood)
//   - CA: 13 provinces & territories (click_that_hood)
//   - BR: 26 states + Federal District (click_that_hood)
//   - AU: 8 states/territories + 1 ignored "Other Territories" (click_that_hood)
//   - AR: 23 provinces + Buenos Aires City — extracted from Natural Earth 10m
//         admin-1 and self-hosted (click_that_hood doesn't ship Argentina).
//         BASE_URL keeps the path correct under both repo-path and custom-domain
//         deploys.
const GEO_URLS = {
  US: 'https://cdn.jsdelivr.net/gh/PublicaMundi/MappingAPI@master/data/geojson/us-states.json',
  MX: 'https://cdn.jsdelivr.net/gh/codeforgermany/click_that_hood@main/public/data/mexico.geojson',
  CA: 'https://cdn.jsdelivr.net/gh/codeforgermany/click_that_hood@main/public/data/canada.geojson',
  BR: 'https://cdn.jsdelivr.net/gh/codeforgermany/click_that_hood@main/public/data/brazil-states.geojson',
  AU: 'https://cdn.jsdelivr.net/gh/codeforgermany/click_that_hood@main/public/data/australia.geojson',
  AR: `${import.meta.env.BASE_URL}data/argentina-provinces.geojson`,
}

// Module-level cache — GeoJSON shouldn't refetch between quiz rounds.
const featureCache = {}
const pendingLoads = {}

// Drop individual polygons that d3-geo's Mercator can't render cleanly.
// Two cases observed in PublicaMundi's US GeoJSON:
//   1. Alaska has an Aleutian polygon encoded as lng < -180° (e.g. -188.9),
//      which Mercator projects to extreme x coords spanning the whole map.
//   2. Virginia has a degenerate 4-point polygon with all points at the same
//      latitude (a zero-area line) — Mercator's tangent math produces
//      near-infinite extents for that path.
// Both cases otherwise overpaint every neighboring state in cream.
function sanitizeFeatures(features) {
  if (!features) return features
  return features.map((f) => {
    const g = f.geometry
    if (!g || g.type !== 'MultiPolygon') return f
    const cleaned = g.coordinates.filter((poly) => {
      const ring = poly[0] || []
      if (ring.length < 4) return false
      let minLon = Infinity, maxLon = -Infinity
      let minLat = Infinity, maxLat = -Infinity
      for (const [lon, lat] of ring) {
        if (lon < -180 || lon > 180 || lat < -90 || lat > 90) return false
        if (lon < minLon) minLon = lon
        if (lon > maxLon) maxLon = lon
        if (lat < minLat) minLat = lat
        if (lat > maxLat) maxLat = lat
      }
      // Zero extent in either axis means the polygon is a line or point.
      if (maxLon - minLon === 0 || maxLat - minLat === 0) return false
      return true
    })
    if (cleaned.length === g.coordinates.length) return f
    return { ...f, geometry: { ...g, coordinates: cleaned } }
  })
}

function loadStates(countryCode) {
  if (featureCache[countryCode]) return Promise.resolve(featureCache[countryCode])
  if (pendingLoads[countryCode]) return pendingLoads[countryCode]
  const url = GEO_URLS[countryCode]
  if (!url) return Promise.resolve(null)
  pendingLoads[countryCode] = fetch(url)
    .then((r) => r.json())
    .then((geo) => {
      const clean = sanitizeFeatures(geo.features)
      featureCache[countryCode] = clean
      return clean
    })
    .catch((err) => {
      console.error(`StatesMap: failed to load ${countryCode} features`, err)
      return null
    })
  return pendingLoads[countryCode]
}

// Match by feature.properties.name against the state's canonical name and
// any aliases, normalized for accents/case so "Quebec" matches "Québec".
function findStateFeature(features, state) {
  if (!features) return null
  const candidates = [state.name, ...(state.aliases || [])].map(normalizeString)
  return (
    features.find((f) => {
      const name = f.properties && f.properties.name
      if (!name) return false
      return candidates.includes(normalizeString(name))
    }) || null
  )
}

// Thin wrapper around WorldMap that supplies its own feature set (the
// selected country's subdivisions) and resolves the target by state name.
function StatesMap({ state }) {
  const [features, setFeatures] = useState(featureCache[state.countryCode] || null)

  useEffect(() => {
    let cancelled = false
    // Flip to any cached set immediately so WorldMap doesn't flash "loading".
    setFeatures(featureCache[state.countryCode] || null)
    loadStates(state.countryCode).then((f) => {
      if (!cancelled) setFeatures(f)
    })
    return () => {
      cancelled = true
    }
  }, [state.countryCode])

  const targetFeature = useMemo(
    () => findStateFeature(features, state),
    [features, state]
  )

  // Pass features + resolved target through — WorldMap handles projection,
  // drag, pinch, wheel, and auto-zoom. Intentionally omit `capitalCoords`
  // so the state is shown highlighted by itself (matching the Country Quiz
  // map, which never draws a capital marker).
  return (
    <WorldMap
      features={features || undefined}
      targetFeature={targetFeature}
    />
  )
}

export default StatesMap
