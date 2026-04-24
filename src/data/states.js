// Top-level administrative subdivisions for the States Quiz.
// Covers the 50 U.S. states, 32 Mexican states (including Mexico City / CDMX),
// and Canada's 10 provinces + 3 territories — 95 entries total.
//
// Shape mirrors allCountries so the existing game loop and multi-choice
// generator can consume it unchanged.
//   - name          display / answer (matched case-insensitively, accents stripped)
//   - code          ISO 3166-2 subdivision code, e.g. "US-CA", "MX-CMX", "CA-ON"
//   - countryCode   parent country ISO alpha-2: "US" | "MX" | "CA"
//   - capital       state/provincial capital name
//   - capitalCoords [lat, lng] of the capital, used by the map question to
//                   drop a star marker inside the zoomed-in country view.
//   - aliases       optional alternate spellings accepted as correct answers.

export const allStates = [
  // --- United States ---
  { name: 'Alabama',        code: 'US-AL', countryCode: 'US', capital: 'Montgomery',    capitalCoords: [32.3668, -86.3000] },
  { name: 'Alaska',         code: 'US-AK', countryCode: 'US', capital: 'Juneau',        capitalCoords: [58.3019, -134.4197] },
  { name: 'Arizona',        code: 'US-AZ', countryCode: 'US', capital: 'Phoenix',       capitalCoords: [33.4484, -112.0740] },
  { name: 'Arkansas',       code: 'US-AR', countryCode: 'US', capital: 'Little Rock',   capitalCoords: [34.7465, -92.2896] },
  { name: 'California',     code: 'US-CA', countryCode: 'US', capital: 'Sacramento',    capitalCoords: [38.5816, -121.4944] },
  { name: 'Colorado',       code: 'US-CO', countryCode: 'US', capital: 'Denver',        capitalCoords: [39.7392, -104.9903] },
  { name: 'Connecticut',    code: 'US-CT', countryCode: 'US', capital: 'Hartford',      capitalCoords: [41.7658, -72.6734] },
  { name: 'Delaware',       code: 'US-DE', countryCode: 'US', capital: 'Dover',         capitalCoords: [39.1582, -75.5244] },
  { name: 'Florida',        code: 'US-FL', countryCode: 'US', capital: 'Tallahassee',   capitalCoords: [30.4383, -84.2807] },
  { name: 'Georgia',        code: 'US-GA', countryCode: 'US', capital: 'Atlanta',       capitalCoords: [33.7490, -84.3880] },
  { name: 'Hawaii',         code: 'US-HI', countryCode: 'US', capital: 'Honolulu',      capitalCoords: [21.3069, -157.8583] },
  { name: 'Idaho',          code: 'US-ID', countryCode: 'US', capital: 'Boise',         capitalCoords: [43.6150, -116.2023] },
  { name: 'Illinois',       code: 'US-IL', countryCode: 'US', capital: 'Springfield',   capitalCoords: [39.7817, -89.6501] },
  { name: 'Indiana',        code: 'US-IN', countryCode: 'US', capital: 'Indianapolis',  capitalCoords: [39.7684, -86.1581] },
  { name: 'Iowa',           code: 'US-IA', countryCode: 'US', capital: 'Des Moines',    capitalCoords: [41.5868, -93.6250] },
  { name: 'Kansas',         code: 'US-KS', countryCode: 'US', capital: 'Topeka',        capitalCoords: [39.0473, -95.6752] },
  { name: 'Kentucky',       code: 'US-KY', countryCode: 'US', capital: 'Frankfort',     capitalCoords: [38.2009, -84.8733] },
  { name: 'Louisiana',      code: 'US-LA', countryCode: 'US', capital: 'Baton Rouge',   capitalCoords: [30.4515, -91.1871] },
  { name: 'Maine',          code: 'US-ME', countryCode: 'US', capital: 'Augusta',       capitalCoords: [44.3106, -69.7795] },
  { name: 'Maryland',       code: 'US-MD', countryCode: 'US', capital: 'Annapolis',     capitalCoords: [38.9784, -76.4922] },
  { name: 'Massachusetts',  code: 'US-MA', countryCode: 'US', capital: 'Boston',        capitalCoords: [42.3601, -71.0589] },
  { name: 'Michigan',       code: 'US-MI', countryCode: 'US', capital: 'Lansing',       capitalCoords: [42.7325, -84.5555] },
  { name: 'Minnesota',      code: 'US-MN', countryCode: 'US', capital: 'Saint Paul',    capitalCoords: [44.9537, -93.0900] },
  { name: 'Mississippi',    code: 'US-MS', countryCode: 'US', capital: 'Jackson',       capitalCoords: [32.2988, -90.1848] },
  { name: 'Missouri',       code: 'US-MO', countryCode: 'US', capital: 'Jefferson City', capitalCoords: [38.5767, -92.1735] },
  { name: 'Montana',        code: 'US-MT', countryCode: 'US', capital: 'Helena',        capitalCoords: [46.5891, -112.0391] },
  { name: 'Nebraska',       code: 'US-NE', countryCode: 'US', capital: 'Lincoln',       capitalCoords: [40.8136, -96.7026] },
  { name: 'Nevada',         code: 'US-NV', countryCode: 'US', capital: 'Carson City',   capitalCoords: [39.1638, -119.7674] },
  { name: 'New Hampshire',  code: 'US-NH', countryCode: 'US', capital: 'Concord',       capitalCoords: [43.2081, -71.5376] },
  { name: 'New Jersey',     code: 'US-NJ', countryCode: 'US', capital: 'Trenton',       capitalCoords: [40.2206, -74.7597] },
  { name: 'New Mexico',     code: 'US-NM', countryCode: 'US', capital: 'Santa Fe',      capitalCoords: [35.6870, -105.9378] },
  { name: 'New York',       code: 'US-NY', countryCode: 'US', capital: 'Albany',        capitalCoords: [42.6526, -73.7562] },
  { name: 'North Carolina', code: 'US-NC', countryCode: 'US', capital: 'Raleigh',       capitalCoords: [35.7796, -78.6382] },
  { name: 'North Dakota',   code: 'US-ND', countryCode: 'US', capital: 'Bismarck',      capitalCoords: [46.8083, -100.7837] },
  { name: 'Ohio',           code: 'US-OH', countryCode: 'US', capital: 'Columbus',      capitalCoords: [39.9612, -82.9988] },
  { name: 'Oklahoma',       code: 'US-OK', countryCode: 'US', capital: 'Oklahoma City', capitalCoords: [35.4676, -97.5164] },
  { name: 'Oregon',         code: 'US-OR', countryCode: 'US', capital: 'Salem',         capitalCoords: [44.9429, -123.0351] },
  { name: 'Pennsylvania',   code: 'US-PA', countryCode: 'US', capital: 'Harrisburg',    capitalCoords: [40.2732, -76.8867] },
  { name: 'Rhode Island',   code: 'US-RI', countryCode: 'US', capital: 'Providence',    capitalCoords: [41.8240, -71.4128] },
  { name: 'South Carolina', code: 'US-SC', countryCode: 'US', capital: 'Columbia',      capitalCoords: [34.0007, -81.0348] },
  { name: 'South Dakota',   code: 'US-SD', countryCode: 'US', capital: 'Pierre',        capitalCoords: [44.3683, -100.3510] },
  { name: 'Tennessee',      code: 'US-TN', countryCode: 'US', capital: 'Nashville',     capitalCoords: [36.1627, -86.7816] },
  { name: 'Texas',          code: 'US-TX', countryCode: 'US', capital: 'Austin',        capitalCoords: [30.2672, -97.7431] },
  { name: 'Utah',           code: 'US-UT', countryCode: 'US', capital: 'Salt Lake City', capitalCoords: [40.7608, -111.8910] },
  { name: 'Vermont',        code: 'US-VT', countryCode: 'US', capital: 'Montpelier',    capitalCoords: [44.2601, -72.5754] },
  { name: 'Virginia',       code: 'US-VA', countryCode: 'US', capital: 'Richmond',      capitalCoords: [37.5407, -77.4360] },
  { name: 'Washington',     code: 'US-WA', countryCode: 'US', capital: 'Olympia',       capitalCoords: [47.0379, -122.9007] },
  { name: 'West Virginia',  code: 'US-WV', countryCode: 'US', capital: 'Charleston',    capitalCoords: [38.3498, -81.6326] },
  { name: 'Wisconsin',      code: 'US-WI', countryCode: 'US', capital: 'Madison',       capitalCoords: [43.0731, -89.4012] },
  { name: 'Wyoming',        code: 'US-WY', countryCode: 'US', capital: 'Cheyenne',      capitalCoords: [41.1400, -104.8202] },

  // --- Mexico (31 states + Mexico City) ---
  { name: 'Aguascalientes',       code: 'MX-AGU', countryCode: 'MX', capital: 'Aguascalientes',   capitalCoords: [21.8853, -102.2916] },
  { name: 'Baja California',      code: 'MX-BCN', countryCode: 'MX', capital: 'Mexicali',         capitalCoords: [32.6245, -115.4523] },
  { name: 'Baja California Sur',  code: 'MX-BCS', countryCode: 'MX', capital: 'La Paz',           capitalCoords: [24.1426, -110.3128] },
  { name: 'Campeche',             code: 'MX-CAM', countryCode: 'MX', capital: 'Campeche',         capitalCoords: [19.8301, -90.5349] },
  { name: 'Chiapas',              code: 'MX-CHP', countryCode: 'MX', capital: 'Tuxtla Gutiérrez', capitalCoords: [16.7569, -93.1292] },
  { name: 'Chihuahua',            code: 'MX-CHH', countryCode: 'MX', capital: 'Chihuahua',        capitalCoords: [28.6353, -106.0889] },
  { name: 'Coahuila',             code: 'MX-COA', countryCode: 'MX', capital: 'Saltillo',         capitalCoords: [25.4232, -100.9953] },
  { name: 'Colima',               code: 'MX-COL', countryCode: 'MX', capital: 'Colima',           capitalCoords: [19.2433, -103.7248] },
  { name: 'Durango',              code: 'MX-DUR', countryCode: 'MX', capital: 'Durango',          capitalCoords: [24.0277, -104.6532] },
  { name: 'Guanajuato',           code: 'MX-GUA', countryCode: 'MX', capital: 'Guanajuato',       capitalCoords: [21.0190, -101.2574] },
  { name: 'Guerrero',             code: 'MX-GRO', countryCode: 'MX', capital: 'Chilpancingo',     capitalCoords: [17.5506, -99.5006] },
  { name: 'Hidalgo',              code: 'MX-HID', countryCode: 'MX', capital: 'Pachuca',          capitalCoords: [20.1011, -98.7591] },
  { name: 'Jalisco',              code: 'MX-JAL', countryCode: 'MX', capital: 'Guadalajara',      capitalCoords: [20.6597, -103.3496] },
  { name: 'Mexico City',          code: 'MX-CMX', countryCode: 'MX', capital: 'Mexico City',      capitalCoords: [19.4326, -99.1332], aliases: ['CDMX', 'Ciudad de México', 'Distrito Federal'] },
  { name: 'Michoacán',            code: 'MX-MIC', countryCode: 'MX', capital: 'Morelia',          capitalCoords: [19.7008, -101.1844] },
  { name: 'Morelos',              code: 'MX-MOR', countryCode: 'MX', capital: 'Cuernavaca',       capitalCoords: [18.9242, -99.2216] },
  { name: 'Nayarit',              code: 'MX-NAY', countryCode: 'MX', capital: 'Tepic',            capitalCoords: [21.5039, -104.8948] },
  { name: 'Nuevo León',           code: 'MX-NLE', countryCode: 'MX', capital: 'Monterrey',        capitalCoords: [25.6866, -100.3161] },
  { name: 'Oaxaca',               code: 'MX-OAX', countryCode: 'MX', capital: 'Oaxaca',           capitalCoords: [17.0732, -96.7266] },
  { name: 'Puebla',               code: 'MX-PUE', countryCode: 'MX', capital: 'Puebla',           capitalCoords: [19.0414, -98.2063] },
  { name: 'Querétaro',            code: 'MX-QUE', countryCode: 'MX', capital: 'Querétaro',        capitalCoords: [20.5888, -100.3899] },
  { name: 'Quintana Roo',         code: 'MX-ROO', countryCode: 'MX', capital: 'Chetumal',         capitalCoords: [18.5001, -88.2961] },
  { name: 'San Luis Potosí',      code: 'MX-SLP', countryCode: 'MX', capital: 'San Luis Potosí',  capitalCoords: [22.1565, -100.9855] },
  { name: 'Sinaloa',              code: 'MX-SIN', countryCode: 'MX', capital: 'Culiacán',         capitalCoords: [24.8091, -107.3940] },
  { name: 'Sonora',               code: 'MX-SON', countryCode: 'MX', capital: 'Hermosillo',       capitalCoords: [29.0729, -110.9559] },
  { name: 'Tabasco',              code: 'MX-TAB', countryCode: 'MX', capital: 'Villahermosa',     capitalCoords: [17.9892, -92.9475] },
  { name: 'Tamaulipas',           code: 'MX-TAM', countryCode: 'MX', capital: 'Ciudad Victoria', capitalCoords: [23.7417, -99.1459] },
  { name: 'Tlaxcala',             code: 'MX-TLA', countryCode: 'MX', capital: 'Tlaxcala',         capitalCoords: [19.3181, -98.2375] },
  { name: 'Veracruz',             code: 'MX-VER', countryCode: 'MX', capital: 'Xalapa',           capitalCoords: [19.5438, -96.9102] },
  { name: 'Yucatán',              code: 'MX-YUC', countryCode: 'MX', capital: 'Mérida',           capitalCoords: [20.9674, -89.5926] },
  { name: 'Zacatecas',            code: 'MX-ZAC', countryCode: 'MX', capital: 'Zacatecas',        capitalCoords: [22.7709, -102.5832] },
  { name: 'State of Mexico',      code: 'MX-MEX', countryCode: 'MX', capital: 'Toluca',           capitalCoords: [19.2826, -99.6557], aliases: ['México', 'Estado de México'] },

  // --- Canada (10 provinces + 3 territories) ---
  { name: 'Alberta',                    code: 'CA-AB', countryCode: 'CA', capital: 'Edmonton',       capitalCoords: [53.5461, -113.4938] },
  { name: 'British Columbia',           code: 'CA-BC', countryCode: 'CA', capital: 'Victoria',       capitalCoords: [48.4284, -123.3656] },
  { name: 'Manitoba',                   code: 'CA-MB', countryCode: 'CA', capital: 'Winnipeg',       capitalCoords: [49.8951, -97.1384] },
  { name: 'New Brunswick',              code: 'CA-NB', countryCode: 'CA', capital: 'Fredericton',    capitalCoords: [45.9636, -66.6431] },
  { name: 'Newfoundland and Labrador',  code: 'CA-NL', countryCode: 'CA', capital: "St. John's",     capitalCoords: [47.5615, -52.7126], aliases: ['Newfoundland'] },
  { name: 'Nova Scotia',                code: 'CA-NS', countryCode: 'CA', capital: 'Halifax',        capitalCoords: [44.6488, -63.5752] },
  { name: 'Ontario',                    code: 'CA-ON', countryCode: 'CA', capital: 'Toronto',        capitalCoords: [43.6532, -79.3832] },
  { name: 'Prince Edward Island',       code: 'CA-PE', countryCode: 'CA', capital: 'Charlottetown',  capitalCoords: [46.2382, -63.1311], aliases: ['PEI'] },
  { name: 'Quebec',                     code: 'CA-QC', countryCode: 'CA', capital: 'Quebec City',    capitalCoords: [46.8139, -71.2080], aliases: ['Québec'] },
  { name: 'Saskatchewan',               code: 'CA-SK', countryCode: 'CA', capital: 'Regina',         capitalCoords: [50.4452, -104.6189] },
  { name: 'Northwest Territories',      code: 'CA-NT', countryCode: 'CA', capital: 'Yellowknife',    capitalCoords: [62.4540, -114.3718] },
  { name: 'Nunavut',                    code: 'CA-NU', countryCode: 'CA', capital: 'Iqaluit',        capitalCoords: [63.7467, -68.5170] },
  { name: 'Yukon',                      code: 'CA-YT', countryCode: 'CA', capital: 'Whitehorse',     capitalCoords: [60.7212, -135.0568], aliases: ['Yukon Territory'] },
]

// The three supported parent countries for the States Quiz, in the order
// they should appear in the dropdown. Labels are what the UI shows.
export const STATES_COUNTRIES = [
  { code: 'US', label: 'United States' },
  { code: 'MX', label: 'Mexico' },
  { code: 'CA', label: 'Canada' },
]

export const STATES_COUNTRY_CODES = STATES_COUNTRIES.map((c) => c.code)

// Convenience for the settings screen — "United States (50)" etc.
export function countStatesByCountry() {
  const counts = Object.fromEntries(STATES_COUNTRY_CODES.map((c) => [c, 0]))
  for (const s of allStates) {
    if (counts[s.countryCode] !== undefined) counts[s.countryCode] += 1
  }
  return counts
}
