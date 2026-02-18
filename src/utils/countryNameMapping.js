import { allCountries } from '../data/countries'

// Create a mapping from ISO code to country name
// This helps match TopoJSON country names (which only have 'name' property) to our ISO codes
export const countryCodeToName = {}
allCountries.forEach(country => {
  countryCodeToName[country.code] = country.name
})

// Also create reverse mapping for lookup
export const countryNameToCode = {}
allCountries.forEach(country => {
  countryNameToCode[country.name] = country.code
  // Also add aliases
  if (country.aliases) {
    country.aliases.forEach(alias => {
      countryNameToCode[alias] = country.code
    })
  }
})

// Normalize country names for matching (handles abbreviations, punctuation, etc.)
export function normalizeCountryName(name) {
  if (!name) return ''
  return name
    .toLowerCase()
    .replace(/^st\.?\s+/i, 'saint ')      // St. or St -> Saint
    .replace(/^st\s+/i, 'saint ')         // St -> Saint
    .replace(/\bis\.?\b/gi, 'island')     // Is. or Is -> Island
    .replace(/\bislands\.?\b/gi, 'islands') // Islands. -> Islands
    .replace(/\./g, '')                    // Remove periods
    .replace(/'/g, '')                     // Remove apostrophes
    .replace(/-/g, ' ')                    // Replace hyphens with spaces
    .replace(/\s+/g, ' ')                  // Normalize whitespace
    .trim()
}

// Name variations that might appear in TopoJSON
const nameVariations = {
  'United States': 'United States',
  'United States of America': 'United States',
  'USA': 'United States',
  'US': 'United States',
  'United Kingdom': 'United Kingdom',
  'UK': 'United Kingdom',
  'Great Britain': 'United Kingdom',
  'Britain': 'United Kingdom',
  'Russia': 'Russia',
  'Russian Federation': 'Russia',
  'South Korea': 'South Korea',
  'Korea': 'South Korea',
  'North Korea': 'North Korea',
  'DPRK': 'North Korea',
  'Czech Republic': 'Czech Republic',
  'Czechia': 'Czech Republic',
  'Macedonia': 'North Macedonia',
  'Ivory Coast': 'Ivory Coast',
  "Côte d'Ivoire": 'Ivory Coast',
  "Cote d'Ivoire": 'Ivory Coast',
  'Myanmar': 'Myanmar',
  'Burma': 'Myanmar',
  'East Timor': 'Timor-Leste',
  'Palestine': 'Palestine',
  'West Bank': 'Palestine',
  'W. Sahara': 'Western Sahara',
  'Western Sahara': 'Western Sahara',
  'St. Lucia': 'Saint Lucia',
  'St Lucia': 'Saint Lucia',
  'St. Vincent': 'Saint Vincent and the Grenadines',
  'St Vincent': 'Saint Vincent and the Grenadines',
  'St. Kitts': 'Saint Kitts and Nevis',
  'St Kitts': 'Saint Kitts and Nevis',
  'St. George\'s': 'Saint George\'s',
}

// Apply name variations
Object.entries(nameVariations).forEach(([variation, standardName]) => {
  if (countryNameToCode[standardName]) {
    countryNameToCode[variation] = countryNameToCode[standardName]
  }
})
