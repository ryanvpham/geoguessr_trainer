import { allCountries } from '../data/countries'
import { geoguessrCountries } from '../data/geoguessrCountries'
import { countryToRegion, REGION_IDS } from '../data/regionMapping'

// Get filtered countries based on settings.
// - geoguessrFilter: when true, limits to countries that appear in GeoGuessr.
// - selectedRegions: array of region ids (see regionMapping.js). When undefined
//   or empty, treated as "all regions selected" so behavior is unchanged for
//   callers that don't pass this.
export function getAvailableCountries(geoguessrFilter, selectedRegions) {
  let filtered = allCountries

  if (geoguessrFilter) {
    // Map GeoGuessr country names to our country objects
    // Handle special cases like "Czechia" -> "Czech Republic", "Lichtenstein" -> "Liechtenstein"
    const nameMap = {
      'Czechia': 'Czech Republic',
      'Lichtenstein': 'Liechtenstein'
    }

    filtered = filtered.filter(country => {
      const countryName = country.name
      const aliases = country.aliases || []

      return geoguessrCountries.some(ggName => {
        const mappedName = nameMap[ggName] || ggName
        return countryName === mappedName ||
               countryName === ggName ||
               aliases.some(alias => alias === ggName || alias === mappedName)
      })
    })
  }

  // Region filter — intersected with whatever we have after the GeoGuessr pass.
  // An empty array or missing selectedRegions means "no region restriction".
  // If the user unchecks every region, fall back to all regions rather than
  // returning an empty pool (which would break the quiz).
  if (Array.isArray(selectedRegions) && selectedRegions.length > 0) {
    const activeRegions = selectedRegions.length === REGION_IDS.length
      ? null // all selected — skip the filter for speed/clarity
      : new Set(selectedRegions)

    if (activeRegions) {
      filtered = filtered.filter(country =>
        activeRegions.has(countryToRegion[country.code])
      )
    }
  }

  return filtered
}

// Generate multi-choice options (4 options: 1 correct + 3 random)
export function generateMultiChoiceOptions(correctAnswer, countries, isCapital = false) {
  const options = [correctAnswer]
  
  // Get 3 random incorrect options
  const availableOptions = isCapital 
    ? countries.map(c => c.capital).filter(cap => cap !== correctAnswer)
    : countries.map(c => c.name).filter(name => name !== correctAnswer)
  
  // Shuffle and take 3
  const shuffled = [...availableOptions].sort(() => Math.random() - 0.5)
  options.push(...shuffled.slice(0, 3))
  
  // Shuffle all options
  const finalOptions = options.sort(() => Math.random() - 0.5)
  
  return finalOptions
}

