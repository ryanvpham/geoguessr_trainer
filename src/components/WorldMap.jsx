import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { useState, useEffect } from 'react'
import { geoCentroid, geoPath } from 'd3-geo'
import { countryCodeToName, normalizeCountryName } from '../utils/countryNameMapping'

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

function WorldMap({ highlightedCountryCode }) {
  const [geographies, setGeographies] = useState(null)
  const [projectionConfig, setProjectionConfig] = useState({
    scale: 147,
    center: [0, 20],
  })

  // Get country name from ISO code
  const highlightedCountryName = countryCodeToName[highlightedCountryCode]

  // Function to find country in geographies
  const findCountry = (geoList, countryName) => {
    if (!countryName || !geoList || geoList.length === 0) return null
    
    const normalizedTarget = normalizeCountryName(countryName)
    
    // Strategy 1: Direct and case-insensitive match
    let found = geoList.find((geo) => {
      const props = geo.properties || {}
      const geoName = props.name || props.NAME || props.NAME_EN || props.NAME_LONG
      if (!geoName) return false
      return geoName === countryName || 
             geoName.toLowerCase() === countryName.toLowerCase()
    })
    
    // Strategy 2: Normalized match (handles St. vs Saint, Is. vs Island, etc.)
    if (!found) {
      found = geoList.find((geo) => {
        const props = geo.properties || {}
        const geoName = props.name || props.NAME || props.NAME_EN || props.NAME_LONG
        if (!geoName) return false
        const normalizedGeo = normalizeCountryName(geoName)
        return normalizedGeo === normalizedTarget
      })
    }
    
    // Strategy 3: Substring matching
    if (!found) {
      const lowerTarget = countryName.toLowerCase().trim()
      found = geoList.find((geo) => {
        const props = geo.properties || {}
        const geoName = props.name || props.NAME || props.NAME_EN || props.NAME_LONG
        if (!geoName) return false
        const lowerGeo = geoName.toLowerCase().trim()
        return lowerGeo.includes(lowerTarget) || lowerTarget.includes(lowerGeo)
      })
    }
    
    // Strategy 4: Word-by-word matching
    if (!found) {
      const targetWords = normalizedTarget.split(/\s+/).filter(w => w.length > 2)
      if (targetWords.length > 0) {
        found = geoList.find((geo) => {
          const props = geo.properties || {}
          const geoName = props.name || props.NAME || props.NAME_EN || props.NAME_LONG
          if (!geoName) return false
          const normalizedGeo = normalizeCountryName(geoName)
          const geoWords = normalizedGeo.split(/\s+/).filter(w => w.length > 2)
          return targetWords.every(word => geoWords.some(gw => gw.includes(word) || word.includes(gw)))
        })
      }
    }
    
    return found
  }

  // Calculate projection when geographies or country changes
  useEffect(() => {
    if (!highlightedCountryName || !geographies || geographies.length === 0) {
      setProjectionConfig({ scale: 147, center: [0, 20] })
      return
    }
    
    const highlightedCountry = findCountry(geographies, highlightedCountryName)
    
    if (!highlightedCountry) {
      console.log('Country not found:', highlightedCountryName, '(code:', highlightedCountryCode + ')')
      const sampleNames = geographies.slice(0, 30).map(g => g.properties?.name).filter(Boolean)
      console.log('Sample country names:', sampleNames)
      setProjectionConfig({ scale: 147, center: [0, 20] })
      return
    }
    
    try {
      const centroid = geoCentroid(highlightedCountry)
      const path = geoPath()
      const bounds = path.bounds(highlightedCountry)
      const width = bounds[1][0] - bounds[0][0]
      const height = bounds[1][1] - bounds[0][1]
      const baseScale = 300
      const countrySize = Math.max(width, height)
      let scale = baseScale / countrySize * 50
      scale = Math.max(200, Math.min(scale, 1000))
      
      console.log('Found country!', highlightedCountryName, 'Properties:', highlightedCountry.properties)
      setProjectionConfig({ scale, center: centroid })
    } catch (error) {
      console.error('Error calculating projection:', error)
      setProjectionConfig({ scale: 147, center: [0, 20] })
    }
  }, [highlightedCountryCode, highlightedCountryName, geographies])

  const getCountryStyle = (geo, countryName) => {
    const props = geo.properties || {}
    const geoName = props.name || props.NAME || props.NAME_EN || props.NAME_LONG
    
    if (!geoName || !countryName) {
      return {
        default: { fill: '#E0E0E0', stroke: '#FFFFFF', strokeWidth: 0.5, outline: 'none' },
        hover: { fill: '#D0D0D0', stroke: '#FFFFFF', strokeWidth: 0.5, outline: 'none' },
        pressed: { fill: '#C0C0C0', stroke: '#FFFFFF', strokeWidth: 0.5, outline: 'none' },
      }
    }
    
    // Normalize both names for comparison
    const normalizedGeo = normalizeCountryName(geoName)
    const normalizedTarget = normalizeCountryName(countryName)
    
    // Check if this is the highlighted country using same logic as findCountry
    const isHighlighted = 
      geoName === countryName ||
      geoName.toLowerCase() === countryName.toLowerCase() ||
      normalizedGeo === normalizedTarget ||
      normalizedGeo.includes(normalizedTarget) ||
      normalizedTarget.includes(normalizedGeo)
    
    return {
      default: {
        fill: isHighlighted ? '#667eea' : '#E0E0E0',
        stroke: '#FFFFFF',
        strokeWidth: isHighlighted ? 2 : 0.5,
        outline: 'none',
      },
      hover: {
        fill: isHighlighted ? '#5568d3' : '#D0D0D0',
        stroke: '#FFFFFF',
        strokeWidth: isHighlighted ? 2 : 0.5,
        outline: 'none',
      },
      pressed: {
        fill: isHighlighted ? '#4457b8' : '#C0C0C0',
        stroke: '#FFFFFF',
        strokeWidth: isHighlighted ? 2 : 0.5,
        outline: 'none',
      },
    }
  }

  return (
    <div className="map-container">
      <ComposableMap
        key={`map-${highlightedCountryCode}`}
        projectionConfig={projectionConfig}
        style={{ width: '100%', height: '100%' }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies: loadedGeographies }) => {
            // Store geographies in state for projection calculation
            if (loadedGeographies && loadedGeographies.length > 0) {
              if (!geographies || geographies.length !== loadedGeographies.length) {
                // Use setTimeout to avoid state update during render
                setTimeout(() => {
                  setGeographies(loadedGeographies)
                }, 0)
              }
            }
            
            if (!loadedGeographies || loadedGeographies.length === 0) {
              return null
            }
            
            return loadedGeographies.map((geo) => {
              const styles = getCountryStyle(geo, highlightedCountryName)
              
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={styles}
                />
              )
            })
          }}
        </Geographies>
      </ComposableMap>
    </div>
  )
}

export default WorldMap
