import { allCountries } from '../data/countries'
import { geoguessrCountries } from '../data/geoguessrCountries'

// Get filtered countries based on settings
export function getAvailableCountries(geoguessrFilter) {
  let filtered = allCountries
  
  if (geoguessrFilter) {
    // Map GeoGuessr country names to our country objects
    // Handle special cases like "Czechia" -> "Czech Republic", "Lichtenstein" -> "Liechtenstein"
    const nameMap = {
      'Czechia': 'Czech Republic',
      'Lichtenstein': 'Liechtenstein'
    }
    
    filtered = allCountries.filter(country => {
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

