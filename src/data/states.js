// Top-level administrative subdivisions for the States Quiz.
// Covers:
//   - 50 U.S. states
//   - 32 Mexican states (incl. Mexico City / CDMX)
//   - Canada's 10 provinces + 3 territories
//   - Argentina's 23 provinces + Buenos Aires City (CABA)
//   - Brazil's 26 states + Federal District
//   - Australia's 6 states + 2 territories
//   - Philippines: the 17 administrative regions (not the 81 provinces) —
//     regions are the natural quiz unit, similar to Brazil/Argentina sizes
//     and how Filipinos identify location. Codes use the unofficial
//     "PH-RNN" pattern since regions don't have ISO 3166-2 codes.
//   - India's 28 states + 8 union territories (geoBoundaries ADM1, current
//     boundaries — incl. Arunachal Pradesh, Ladakh, and the merged DNH&DD UT)
//   - Malaysia's 13 states + KL & Putrajaya federal territories (no Labuan)
//   - Indonesia's 34 provinces (pre-2022 Papua split)
//   - Nigeria's 36 states + Federal Capital Territory
//   - South Africa's 9 provinces
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
  { name: 'Coahuila',             code: 'MX-COA', countryCode: 'MX', capital: 'Saltillo',         capitalCoords: [25.4232, -100.9953], aliases: ['Coahuila de Zaragoza'] },
  { name: 'Colima',               code: 'MX-COL', countryCode: 'MX', capital: 'Colima',           capitalCoords: [19.2433, -103.7248] },
  { name: 'Durango',              code: 'MX-DUR', countryCode: 'MX', capital: 'Durango',          capitalCoords: [24.0277, -104.6532] },
  { name: 'Guanajuato',           code: 'MX-GUA', countryCode: 'MX', capital: 'Guanajuato',       capitalCoords: [21.0190, -101.2574] },
  { name: 'Guerrero',             code: 'MX-GRO', countryCode: 'MX', capital: 'Chilpancingo',     capitalCoords: [17.5506, -99.5006] },
  { name: 'Hidalgo',              code: 'MX-HID', countryCode: 'MX', capital: 'Pachuca',          capitalCoords: [20.1011, -98.7591] },
  { name: 'Jalisco',              code: 'MX-JAL', countryCode: 'MX', capital: 'Guadalajara',      capitalCoords: [20.6597, -103.3496] },
  { name: 'Mexico City',          code: 'MX-CMX', countryCode: 'MX', capital: 'Mexico City',      capitalCoords: [19.4326, -99.1332], aliases: ['CDMX', 'Ciudad de México', 'Distrito Federal'] },
  { name: 'Michoacán',            code: 'MX-MIC', countryCode: 'MX', capital: 'Morelia',          capitalCoords: [19.7008, -101.1844], aliases: ['Michoacán de Ocampo', 'Michoacan', 'Michoacan de Ocampo'] },
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
  { name: 'Veracruz',             code: 'MX-VER', countryCode: 'MX', capital: 'Xalapa',           capitalCoords: [19.5438, -96.9102], aliases: ['Veracruz de Ignacio de la Llave'] },
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

  // --- Argentina (23 provinces + Buenos Aires City) ---
  // GeoJSON property.name uses Spanish forms with accents — matched
  // case/accent-insensitively, so canonical names mirror the GeoJSON.
  { name: 'Buenos Aires',                 code: 'AR-B', countryCode: 'AR', capital: 'La Plata',                       capitalCoords: [-34.9215, -57.9545] },
  { name: 'Buenos Aires City',            code: 'AR-C', countryCode: 'AR', capital: 'Buenos Aires',                   capitalCoords: [-34.6037, -58.3816], aliases: ['Ciudad de Buenos Aires', 'Ciudad Autónoma de Buenos Aires', 'CABA', 'City of Buenos Aires'] },
  { name: 'Catamarca',                    code: 'AR-K', countryCode: 'AR', capital: 'San Fernando del Valle de Catamarca', capitalCoords: [-28.4696, -65.7795] },
  { name: 'Chaco',                        code: 'AR-H', countryCode: 'AR', capital: 'Resistencia',                    capitalCoords: [-27.4514, -58.9869] },
  { name: 'Chubut',                       code: 'AR-U', countryCode: 'AR', capital: 'Rawson',                         capitalCoords: [-43.3002, -65.1023] },
  { name: 'Córdoba',                      code: 'AR-X', countryCode: 'AR', capital: 'Córdoba',                        capitalCoords: [-31.4201, -64.1888], aliases: ['Cordoba'] },
  { name: 'Corrientes',                   code: 'AR-W', countryCode: 'AR', capital: 'Corrientes',                     capitalCoords: [-27.4806, -58.8341] },
  { name: 'Entre Ríos',                   code: 'AR-E', countryCode: 'AR', capital: 'Paraná',                         capitalCoords: [-31.7333, -60.5333], aliases: ['Entre Rios'] },
  { name: 'Formosa',                      code: 'AR-P', countryCode: 'AR', capital: 'Formosa',                        capitalCoords: [-26.1849, -58.1731] },
  { name: 'Jujuy',                        code: 'AR-Y', countryCode: 'AR', capital: 'San Salvador de Jujuy',          capitalCoords: [-24.1858, -65.2995] },
  { name: 'La Pampa',                     code: 'AR-L', countryCode: 'AR', capital: 'Santa Rosa',                     capitalCoords: [-36.6201, -64.2906] },
  { name: 'La Rioja',                     code: 'AR-F', countryCode: 'AR', capital: 'La Rioja',                       capitalCoords: [-29.4131, -66.8558] },
  { name: 'Mendoza',                      code: 'AR-M', countryCode: 'AR', capital: 'Mendoza',                        capitalCoords: [-32.8908, -68.8272] },
  { name: 'Misiones',                     code: 'AR-N', countryCode: 'AR', capital: 'Posadas',                        capitalCoords: [-27.3621, -55.9008] },
  { name: 'Neuquén',                      code: 'AR-Q', countryCode: 'AR', capital: 'Neuquén',                        capitalCoords: [-38.9516, -68.0591], aliases: ['Neuquen'] },
  { name: 'Río Negro',                    code: 'AR-R', countryCode: 'AR', capital: 'Viedma',                         capitalCoords: [-40.8135, -62.9967], aliases: ['Rio Negro'] },
  { name: 'Salta',                        code: 'AR-A', countryCode: 'AR', capital: 'Salta',                          capitalCoords: [-24.7821, -65.4232] },
  { name: 'San Juan',                     code: 'AR-J', countryCode: 'AR', capital: 'San Juan',                       capitalCoords: [-31.5375, -68.5364] },
  { name: 'San Luis',                     code: 'AR-D', countryCode: 'AR', capital: 'San Luis',                       capitalCoords: [-33.2950, -66.3356] },
  { name: 'Santa Cruz',                   code: 'AR-Z', countryCode: 'AR', capital: 'Río Gallegos',                   capitalCoords: [-51.6226, -69.2181] },
  { name: 'Santa Fe',                     code: 'AR-S', countryCode: 'AR', capital: 'Santa Fe',                       capitalCoords: [-31.6333, -60.7000] },
  { name: 'Santiago del Estero',          code: 'AR-G', countryCode: 'AR', capital: 'Santiago del Estero',            capitalCoords: [-27.7833, -64.2667] },
  { name: 'Tierra del Fuego',             code: 'AR-V', countryCode: 'AR', capital: 'Ushuaia',                        capitalCoords: [-54.8019, -68.3030] },
  { name: 'Tucumán',                      code: 'AR-T', countryCode: 'AR', capital: 'San Miguel de Tucumán',          capitalCoords: [-26.8083, -65.2176], aliases: ['Tucuman'] },

  // --- Brazil (26 states + Federal District) ---
  { name: 'Acre',                  code: 'BR-AC', countryCode: 'BR', capital: 'Rio Branco',     capitalCoords: [-9.9747, -67.8243] },
  { name: 'Alagoas',               code: 'BR-AL', countryCode: 'BR', capital: 'Maceió',         capitalCoords: [-9.6498, -35.7089] },
  { name: 'Amapá',                 code: 'BR-AP', countryCode: 'BR', capital: 'Macapá',         capitalCoords: [0.0349, -51.0664],   aliases: ['Amapa'] },
  { name: 'Amazonas',              code: 'BR-AM', countryCode: 'BR', capital: 'Manaus',         capitalCoords: [-3.1190, -60.0217] },
  { name: 'Bahia',                 code: 'BR-BA', countryCode: 'BR', capital: 'Salvador',       capitalCoords: [-12.9714, -38.5014] },
  { name: 'Ceará',                 code: 'BR-CE', countryCode: 'BR', capital: 'Fortaleza',      capitalCoords: [-3.7172, -38.5433],  aliases: ['Ceara'] },
  { name: 'Distrito Federal',      code: 'BR-DF', countryCode: 'BR', capital: 'Brasília',       capitalCoords: [-15.7975, -47.8919], aliases: ['Federal District'] },
  { name: 'Espírito Santo',        code: 'BR-ES', countryCode: 'BR', capital: 'Vitória',        capitalCoords: [-20.3155, -40.3128], aliases: ['Espirito Santo'] },
  { name: 'Goiás',                 code: 'BR-GO', countryCode: 'BR', capital: 'Goiânia',        capitalCoords: [-16.6864, -49.2643], aliases: ['Goias'] },
  { name: 'Maranhão',              code: 'BR-MA', countryCode: 'BR', capital: 'São Luís',       capitalCoords: [-2.5298, -44.2826],  aliases: ['Maranhao'] },
  { name: 'Mato Grosso',           code: 'BR-MT', countryCode: 'BR', capital: 'Cuiabá',         capitalCoords: [-15.5989, -56.0949] },
  { name: 'Mato Grosso do Sul',    code: 'BR-MS', countryCode: 'BR', capital: 'Campo Grande',   capitalCoords: [-20.4697, -54.6201] },
  { name: 'Minas Gerais',          code: 'BR-MG', countryCode: 'BR', capital: 'Belo Horizonte', capitalCoords: [-19.9167, -43.9345] },
  { name: 'Pará',                  code: 'BR-PA', countryCode: 'BR', capital: 'Belém',          capitalCoords: [-1.4554, -48.4898],  aliases: ['Para'] },
  { name: 'Paraíba',               code: 'BR-PB', countryCode: 'BR', capital: 'João Pessoa',    capitalCoords: [-7.1195, -34.8450],  aliases: ['Paraiba'] },
  { name: 'Paraná',                code: 'BR-PR', countryCode: 'BR', capital: 'Curitiba',       capitalCoords: [-25.4284, -49.2733], aliases: ['Parana'] },
  { name: 'Pernambuco',            code: 'BR-PE', countryCode: 'BR', capital: 'Recife',         capitalCoords: [-8.0476, -34.8770] },
  { name: 'Piauí',                 code: 'BR-PI', countryCode: 'BR', capital: 'Teresina',       capitalCoords: [-5.0892, -42.8016],  aliases: ['Piaui'] },
  { name: 'Rio de Janeiro',        code: 'BR-RJ', countryCode: 'BR', capital: 'Rio de Janeiro', capitalCoords: [-22.9068, -43.1729] },
  { name: 'Rio Grande do Norte',   code: 'BR-RN', countryCode: 'BR', capital: 'Natal',          capitalCoords: [-5.7945, -35.2110] },
  { name: 'Rio Grande do Sul',     code: 'BR-RS', countryCode: 'BR', capital: 'Porto Alegre',   capitalCoords: [-30.0346, -51.2177] },
  { name: 'Rondônia',              code: 'BR-RO', countryCode: 'BR', capital: 'Porto Velho',    capitalCoords: [-8.7619, -63.9039],  aliases: ['Rondonia'] },
  { name: 'Roraima',               code: 'BR-RR', countryCode: 'BR', capital: 'Boa Vista',      capitalCoords: [2.8235, -60.6758] },
  { name: 'Santa Catarina',        code: 'BR-SC', countryCode: 'BR', capital: 'Florianópolis',  capitalCoords: [-27.5954, -48.5480] },
  { name: 'São Paulo',             code: 'BR-SP', countryCode: 'BR', capital: 'São Paulo',      capitalCoords: [-23.5505, -46.6333], aliases: ['Sao Paulo'] },
  { name: 'Sergipe',               code: 'BR-SE', countryCode: 'BR', capital: 'Aracaju',        capitalCoords: [-10.9472, -37.0731] },
  { name: 'Tocantins',             code: 'BR-TO', countryCode: 'BR', capital: 'Palmas',         capitalCoords: [-10.1846, -48.3336] },

  // --- Australia (6 states + 2 territories) ---
  // The source GeoJSON also includes an "Other Territories" feature
  // (Christmas Island, Norfolk Island, etc.) — intentionally not quizzed.
  { name: 'New South Wales',              code: 'AU-NSW', countryCode: 'AU', capital: 'Sydney',     capitalCoords: [-33.8688, 151.2093], aliases: ['NSW'] },
  { name: 'Victoria',                     code: 'AU-VIC', countryCode: 'AU', capital: 'Melbourne',  capitalCoords: [-37.8136, 144.9631] },
  { name: 'Queensland',                   code: 'AU-QLD', countryCode: 'AU', capital: 'Brisbane',   capitalCoords: [-27.4698, 153.0251], aliases: ['QLD'] },
  { name: 'Western Australia',            code: 'AU-WA',  countryCode: 'AU', capital: 'Perth',      capitalCoords: [-31.9505, 115.8605], aliases: ['WA'] },
  { name: 'South Australia',              code: 'AU-SA',  countryCode: 'AU', capital: 'Adelaide',   capitalCoords: [-34.9285, 138.6007], aliases: ['SA'] },
  { name: 'Tasmania',                     code: 'AU-TAS', countryCode: 'AU', capital: 'Hobart',     capitalCoords: [-42.8821, 147.3272], aliases: ['TAS'] },
  { name: 'Australian Capital Territory', code: 'AU-ACT', countryCode: 'AU', capital: 'Canberra',   capitalCoords: [-35.2809, 149.1300], aliases: ['ACT'] },
  { name: 'Northern Territory',           code: 'AU-NT',  countryCode: 'AU', capital: 'Darwin',     capitalCoords: [-12.4634, 130.8456], aliases: ['NT'] },

  // --- Philippines (17 administrative regions) ---
  // "Regional center" rather than "capital" since regions aren't constitutionally
  // capital-having entities, but the matcher key is still `capital` for parity.
  // Region codes are unofficial PH-Rnn (no ISO 3166-2 standard for regions).
  { name: 'Ilocos Region',                    code: 'PH-R01', countryCode: 'PH', capital: 'San Fernando',  capitalCoords: [16.6160, 120.3196], aliases: ['Region I', 'Ilocos'] },
  { name: 'Cagayan Valley',                   code: 'PH-R02', countryCode: 'PH', capital: 'Tuguegarao',    capitalCoords: [17.6132, 121.7270], aliases: ['Region II'] },
  { name: 'Central Luzon',                    code: 'PH-R03', countryCode: 'PH', capital: 'San Fernando',  capitalCoords: [15.0306, 120.6840], aliases: ['Region III'] },
  { name: 'Calabarzon',                       code: 'PH-R4A', countryCode: 'PH', capital: 'Calamba',       capitalCoords: [14.2117, 121.1653], aliases: ['CALABARZON', 'Region IV-A', 'Region IVA'] },
  { name: 'Mimaropa',                         code: 'PH-R4B', countryCode: 'PH', capital: 'Calapan',       capitalCoords: [13.4118, 121.1803], aliases: ['MIMAROPA', 'Region IV-B', 'Region IVB', 'Southwestern Tagalog Region'] },
  { name: 'Bicol',                            code: 'PH-R05', countryCode: 'PH', capital: 'Legazpi',       capitalCoords: [13.1391, 123.7438], aliases: ['Region V', 'Bicol Region'] },
  { name: 'Western Visayas',                  code: 'PH-R06', countryCode: 'PH', capital: 'Iloilo City',   capitalCoords: [10.7202, 122.5621], aliases: ['Region VI'] },
  { name: 'Central Visayas',                  code: 'PH-R07', countryCode: 'PH', capital: 'Cebu City',     capitalCoords: [10.3157, 123.8854], aliases: ['Region VII'] },
  { name: 'Eastern Visayas',                  code: 'PH-R08', countryCode: 'PH', capital: 'Tacloban',      capitalCoords: [11.2421, 125.0046], aliases: ['Region VIII'] },
  { name: 'Zamboanga Peninsula',              code: 'PH-R09', countryCode: 'PH', capital: 'Pagadian',      capitalCoords: [7.8257, 123.4366],  aliases: ['Region IX'] },
  { name: 'Northern Mindanao',                code: 'PH-R10', countryCode: 'PH', capital: 'Cagayan de Oro', capitalCoords: [8.4542, 124.6319], aliases: ['Region X'] },
  { name: 'Davao Region',                     code: 'PH-R11', countryCode: 'PH', capital: 'Davao City',    capitalCoords: [7.1907, 125.4553],  aliases: ['Region XI', 'Davao'] },
  { name: 'Soccsksargen',                     code: 'PH-R12', countryCode: 'PH', capital: 'Koronadal',     capitalCoords: [6.5031, 124.8472],  aliases: ['SOCCSKSARGEN', 'Region XII'] },
  { name: 'Caraga',                           code: 'PH-R13', countryCode: 'PH', capital: 'Butuan',        capitalCoords: [8.9492, 125.5436],  aliases: ['Region XIII', 'Caraga Region'] },
  { name: 'Bangsamoro',                       code: 'PH-BAR', countryCode: 'PH', capital: 'Cotabato City', capitalCoords: [7.2236, 124.2452],  aliases: ['BARMM', 'ARMM', 'Bangsamoro Autonomous Region in Muslim Mindanao', 'Autonomous Region in Muslim Mindanao'] },
  { name: 'Cordillera Administrative Region', code: 'PH-CAR', countryCode: 'PH', capital: 'Baguio',        capitalCoords: [16.4023, 120.5960], aliases: ['CAR', 'Cordillera Region', 'Cordillera'] },
  { name: 'Metro Manila',                     code: 'PH-NCR', countryCode: 'PH', capital: 'Manila',        capitalCoords: [14.5995, 120.9842], aliases: ['NCR', 'National Capital Region'] },

  // --- India (28 states + 8 union territories) ---
  // Self-hosted from geoBoundaries ADM1 (current boundaries): includes
  // Arunachal Pradesh (absent from click_that_hood), Ladakh split from Jammu &
  // Kashmir (2019), and the merged Dadra & Nagar Haveli and Daman & Diu UT
  // (2020). geoBoundaries labels carry diacritics (e.g. "Bihār", "Gujarāt")
  // which normalizeString strips, so the plain canonical names below match.
  { name: 'Andaman and Nicobar Islands',              code: 'IN-AN', countryCode: 'IN', capital: 'Port Blair',         capitalCoords: [11.6234, 92.7265] },
  { name: 'Andhra Pradesh',                           code: 'IN-AP', countryCode: 'IN', capital: 'Amaravati',          capitalCoords: [16.515, 80.518] },
  { name: 'Arunachal Pradesh',                        code: 'IN-AR', countryCode: 'IN', capital: 'Itanagar',           capitalCoords: [27.0844, 93.6053] },
  { name: 'Assam',                                    code: 'IN-AS', countryCode: 'IN', capital: 'Dispur',             capitalCoords: [26.1433, 91.7898] },
  { name: 'Bihar',                                    code: 'IN-BR', countryCode: 'IN', capital: 'Patna',              capitalCoords: [25.5941, 85.1376] },
  { name: 'Chandigarh',                               code: 'IN-CH', countryCode: 'IN', capital: 'Chandigarh',         capitalCoords: [30.7333, 76.7794] },
  { name: 'Chhattisgarh',                             code: 'IN-CT', countryCode: 'IN', capital: 'Raipur',             capitalCoords: [21.2514, 81.6296] },
  { name: 'Dadra and Nagar Haveli and Daman and Diu', code: 'IN-DH', countryCode: 'IN', capital: 'Daman',              capitalCoords: [20.3974, 72.8328], aliases: ['Dadra and Nagar Haveli', 'Daman and Diu'] },
  { name: 'Delhi',                                    code: 'IN-DL', countryCode: 'IN', capital: 'New Delhi',          capitalCoords: [28.6139, 77.209], aliases: ['NCT of Delhi', 'National Capital Territory of Delhi'] },
  { name: 'Goa',                                      code: 'IN-GA', countryCode: 'IN', capital: 'Panaji',             capitalCoords: [15.4909, 73.8278] },
  { name: 'Gujarat',                                  code: 'IN-GJ', countryCode: 'IN', capital: 'Gandhinagar',        capitalCoords: [23.2156, 72.6369] },
  { name: 'Haryana',                                  code: 'IN-HR', countryCode: 'IN', capital: 'Chandigarh',         capitalCoords: [30.7333, 76.7794] },
  { name: 'Himachal Pradesh',                         code: 'IN-HP', countryCode: 'IN', capital: 'Shimla',             capitalCoords: [31.1048, 77.1734] },
  { name: 'Jammu and Kashmir',                        code: 'IN-JK', countryCode: 'IN', capital: 'Srinagar',           capitalCoords: [34.0837, 74.7973], aliases: ['J&K'] },
  { name: 'Jharkhand',                                code: 'IN-JH', countryCode: 'IN', capital: 'Ranchi',             capitalCoords: [23.3441, 85.3096] },
  { name: 'Karnataka',                                code: 'IN-KA', countryCode: 'IN', capital: 'Bengaluru',          capitalCoords: [12.9716, 77.5946], aliases: ['Bangalore'] },
  { name: 'Kerala',                                   code: 'IN-KL', countryCode: 'IN', capital: 'Thiruvananthapuram', capitalCoords: [8.5241, 76.9366], aliases: ['Trivandrum'] },
  { name: 'Ladakh',                                   code: 'IN-LA', countryCode: 'IN', capital: 'Leh',                capitalCoords: [34.1526, 77.577] },
  { name: 'Lakshadweep',                              code: 'IN-LD', countryCode: 'IN', capital: 'Kavaratti',          capitalCoords: [10.5669, 72.642] },
  { name: 'Madhya Pradesh',                           code: 'IN-MP', countryCode: 'IN', capital: 'Bhopal',             capitalCoords: [23.2599, 77.4126] },
  { name: 'Maharashtra',                              code: 'IN-MH', countryCode: 'IN', capital: 'Mumbai',             capitalCoords: [19.076, 72.8777], aliases: ['Bombay'] },
  { name: 'Manipur',                                  code: 'IN-MN', countryCode: 'IN', capital: 'Imphal',             capitalCoords: [24.817, 93.9368] },
  { name: 'Meghalaya',                                code: 'IN-ML', countryCode: 'IN', capital: 'Shillong',           capitalCoords: [25.5788, 91.8933] },
  { name: 'Mizoram',                                  code: 'IN-MZ', countryCode: 'IN', capital: 'Aizawl',             capitalCoords: [23.7271, 92.7176] },
  { name: 'Nagaland',                                 code: 'IN-NL', countryCode: 'IN', capital: 'Kohima',             capitalCoords: [25.6751, 94.1086] },
  { name: 'Odisha',                                   code: 'IN-OR', countryCode: 'IN', capital: 'Bhubaneswar',        capitalCoords: [20.2961, 85.8245], aliases: ['Orissa'] },
  { name: 'Puducherry',                               code: 'IN-PY', countryCode: 'IN', capital: 'Puducherry',         capitalCoords: [11.9416, 79.8083], aliases: ['Pondicherry'] },
  { name: 'Punjab',                                   code: 'IN-PB', countryCode: 'IN', capital: 'Chandigarh',         capitalCoords: [30.7333, 76.7794] },
  { name: 'Rajasthan',                                code: 'IN-RJ', countryCode: 'IN', capital: 'Jaipur',             capitalCoords: [26.9124, 75.7873] },
  { name: 'Sikkim',                                   code: 'IN-SK', countryCode: 'IN', capital: 'Gangtok',            capitalCoords: [27.3389, 88.6065] },
  { name: 'Tamil Nadu',                               code: 'IN-TN', countryCode: 'IN', capital: 'Chennai',            capitalCoords: [13.0827, 80.2707], aliases: ['Madras'] },
  { name: 'Telangana',                                code: 'IN-TG', countryCode: 'IN', capital: 'Hyderabad',          capitalCoords: [17.385, 78.4867] },
  { name: 'Tripura',                                  code: 'IN-TR', countryCode: 'IN', capital: 'Agartala',           capitalCoords: [23.8315, 91.2868] },
  { name: 'Uttar Pradesh',                            code: 'IN-UP', countryCode: 'IN', capital: 'Lucknow',            capitalCoords: [26.8467, 80.9462] },
  { name: 'Uttarakhand',                              code: 'IN-UT', countryCode: 'IN', capital: 'Dehradun',           capitalCoords: [30.3165, 78.0322], aliases: ['Uttaranchal'] },
  { name: 'West Bengal',                              code: 'IN-WB', countryCode: 'IN', capital: 'Kolkata',            capitalCoords: [22.5726, 88.3639], aliases: ['Calcutta'] },

  // --- Malaysia (13 states + Kuala Lumpur & Putrajaya federal territories) ---
  // click_that_hood's Malaysia file omits the third federal territory, Labuan,
  // so it isn't quizzable here (mirrors how Australia's "Other Territories" is
  // left out). KL and Putrajaya carry the long "Federal Territory of …" GeoJSON
  // names as aliases.
  { name: 'Johor',           code: 'MY-01', countryCode: 'MY', capital: 'Johor Bahru',      capitalCoords: [1.4927, 103.7414] },
  { name: 'Kedah',           code: 'MY-02', countryCode: 'MY', capital: 'Alor Setar',       capitalCoords: [6.1184, 100.3685] },
  { name: 'Kelantan',        code: 'MY-03', countryCode: 'MY', capital: 'Kota Bharu',       capitalCoords: [6.1254, 102.2381] },
  { name: 'Melaka',          code: 'MY-04', countryCode: 'MY', capital: 'Malacca City',     capitalCoords: [2.1896, 102.2501], aliases: ['Malacca'] },
  { name: 'Negeri Sembilan', code: 'MY-05', countryCode: 'MY', capital: 'Seremban',         capitalCoords: [2.7297, 101.9381] },
  { name: 'Pahang',          code: 'MY-06', countryCode: 'MY', capital: 'Kuantan',          capitalCoords: [3.8077, 103.326] },
  { name: 'Penang',          code: 'MY-07', countryCode: 'MY', capital: 'George Town',      capitalCoords: [5.4141, 100.3288], aliases: ['Pulau Pinang'] },
  { name: 'Perak',           code: 'MY-08', countryCode: 'MY', capital: 'Ipoh',             capitalCoords: [4.5975, 101.0901] },
  { name: 'Perlis',          code: 'MY-09', countryCode: 'MY', capital: 'Kangar',           capitalCoords: [6.4414, 100.1986] },
  { name: 'Selangor',        code: 'MY-10', countryCode: 'MY', capital: 'Shah Alam',        capitalCoords: [3.0733, 101.5185] },
  { name: 'Terengganu',      code: 'MY-11', countryCode: 'MY', capital: 'Kuala Terengganu', capitalCoords: [5.3302, 103.1408] },
  { name: 'Sabah',           code: 'MY-12', countryCode: 'MY', capital: 'Kota Kinabalu',    capitalCoords: [5.9804, 116.0735] },
  { name: 'Sarawak',         code: 'MY-13', countryCode: 'MY', capital: 'Kuching',          capitalCoords: [1.5533, 110.3592] },
  { name: 'Kuala Lumpur',    code: 'MY-14', countryCode: 'MY', capital: 'Kuala Lumpur',     capitalCoords: [3.139, 101.6869], aliases: ['Federal Territory of Kuala Lumpur'] },
  { name: 'Putrajaya',       code: 'MY-16', countryCode: 'MY', capital: 'Putrajaya',        capitalCoords: [2.9264, 101.6964], aliases: ['Federal Territory of Putrajaya'] },

  // --- Indonesia (34 provinces) ---
  // Self-hosted GeoJSON (geoBoundaries ADM1, see StatesMap GEO_URLS). Uses the
  // English province names; Indonesian forms (e.g. "Jawa Tengah") are aliases.
  // This 34-province set predates the 2022 split of Papua into new provinces.
  { name: 'Aceh',                    code: 'ID-AC', countryCode: 'ID', capital: 'Banda Aceh',     capitalCoords: [5.5483, 95.3238] },
  { name: 'Bali',                    code: 'ID-BA', countryCode: 'ID', capital: 'Denpasar',       capitalCoords: [-8.6705, 115.2126] },
  { name: 'Bangka-Belitung Islands', code: 'ID-BB', countryCode: 'ID', capital: 'Pangkal Pinang', capitalCoords: [-2.1316, 106.1169], aliases: ['Kepulauan Bangka Belitung'] },
  { name: 'Banten',                  code: 'ID-BT', countryCode: 'ID', capital: 'Serang',         capitalCoords: [-6.1149, 106.1502] },
  { name: 'Bengkulu',                code: 'ID-BE', countryCode: 'ID', capital: 'Bengkulu',       capitalCoords: [-3.8004, 102.2655] },
  { name: 'Central Java',            code: 'ID-JT', countryCode: 'ID', capital: 'Semarang',       capitalCoords: [-6.9667, 110.4167], aliases: ['Jawa Tengah'] },
  { name: 'Central Kalimantan',      code: 'ID-KT', countryCode: 'ID', capital: 'Palangka Raya',  capitalCoords: [-2.2096, 113.9108], aliases: ['Kalimantan Tengah'] },
  { name: 'Central Sulawesi',        code: 'ID-ST', countryCode: 'ID', capital: 'Palu',           capitalCoords: [-0.8917, 119.8707], aliases: ['Sulawesi Tengah'] },
  { name: 'East Java',               code: 'ID-JI', countryCode: 'ID', capital: 'Surabaya',       capitalCoords: [-7.2575, 112.7521], aliases: ['Jawa Timur'] },
  { name: 'East Kalimantan',         code: 'ID-KI', countryCode: 'ID', capital: 'Samarinda',      capitalCoords: [-0.5022, 117.1536], aliases: ['Kalimantan Timur'] },
  { name: 'East Nusa Tenggara',      code: 'ID-NT', countryCode: 'ID', capital: 'Kupang',         capitalCoords: [-10.1772, 123.607], aliases: ['Nusa Tenggara Timur'] },
  { name: 'Gorontalo',               code: 'ID-GO', countryCode: 'ID', capital: 'Gorontalo',      capitalCoords: [0.5435, 123.0568] },
  { name: 'Jakarta',                 code: 'ID-JK', countryCode: 'ID', capital: 'Jakarta',        capitalCoords: [-6.2088, 106.8456], aliases: ['Jakarta Special Capital Region', 'DKI Jakarta'] },
  { name: 'Jambi',                   code: 'ID-JA', countryCode: 'ID', capital: 'Jambi',          capitalCoords: [-1.6101, 103.6131] },
  { name: 'Lampung',                 code: 'ID-LA', countryCode: 'ID', capital: 'Bandar Lampung', capitalCoords: [-5.3971, 105.2668] },
  { name: 'Maluku',                  code: 'ID-MA', countryCode: 'ID', capital: 'Ambon',          capitalCoords: [-3.6954, 128.1814] },
  { name: 'North Kalimantan',        code: 'ID-KU', countryCode: 'ID', capital: 'Tanjung Selor',  capitalCoords: [2.8375, 117.3616], aliases: ['Kalimantan Utara'] },
  { name: 'North Maluku',            code: 'ID-MU', countryCode: 'ID', capital: 'Sofifi',         capitalCoords: [0.7333, 127.5667], aliases: ['Maluku Utara'] },
  { name: 'North Sulawesi',          code: 'ID-SA', countryCode: 'ID', capital: 'Manado',         capitalCoords: [1.4748, 124.8421], aliases: ['Sulawesi Utara'] },
  { name: 'North Sumatra',           code: 'ID-SU', countryCode: 'ID', capital: 'Medan',          capitalCoords: [3.5952, 98.6722], aliases: ['Sumatera Utara'] },
  { name: 'Papua',                   code: 'ID-PA', countryCode: 'ID', capital: 'Jayapura',       capitalCoords: [-2.5337, 140.7181] },
  { name: 'Riau',                    code: 'ID-RI', countryCode: 'ID', capital: 'Pekanbaru',      capitalCoords: [0.5071, 101.4478] },
  { name: 'Riau Islands',            code: 'ID-KR', countryCode: 'ID', capital: 'Tanjung Pinang', capitalCoords: [0.9186, 104.4555], aliases: ['Kepulauan Riau'] },
  { name: 'South Kalimantan',        code: 'ID-KS', countryCode: 'ID', capital: 'Banjarmasin',    capitalCoords: [-3.3194, 114.5908], aliases: ['Kalimantan Selatan'] },
  { name: 'South Sulawesi',          code: 'ID-SN', countryCode: 'ID', capital: 'Makassar',       capitalCoords: [-5.1477, 119.4327], aliases: ['Sulawesi Selatan'] },
  { name: 'South Sumatra',           code: 'ID-SS', countryCode: 'ID', capital: 'Palembang',      capitalCoords: [-2.9761, 104.7754], aliases: ['Sumatera Selatan'] },
  { name: 'Southeast Sulawesi',      code: 'ID-SG', countryCode: 'ID', capital: 'Kendari',        capitalCoords: [-3.9985, 122.5127], aliases: ['Sulawesi Tenggara'] },
  { name: 'Yogyakarta',              code: 'ID-YO', countryCode: 'ID', capital: 'Yogyakarta',     capitalCoords: [-7.7956, 110.3695], aliases: ['Special Region of Yogyakarta', 'DI Yogyakarta'] },
  { name: 'West Java',               code: 'ID-JB', countryCode: 'ID', capital: 'Bandung',        capitalCoords: [-6.9175, 107.6191], aliases: ['Jawa Barat'] },
  { name: 'West Kalimantan',         code: 'ID-KB', countryCode: 'ID', capital: 'Pontianak',      capitalCoords: [-0.0263, 109.3425], aliases: ['Kalimantan Barat'] },
  { name: 'West Nusa Tenggara',      code: 'ID-NB', countryCode: 'ID', capital: 'Mataram',        capitalCoords: [-8.5833, 116.1167], aliases: ['Nusa Tenggara Barat'] },
  { name: 'West Papua',              code: 'ID-PB', countryCode: 'ID', capital: 'Manokwari',      capitalCoords: [-0.8615, 134.062] },
  { name: 'West Sulawesi',           code: 'ID-SR', countryCode: 'ID', capital: 'Mamuju',         capitalCoords: [-2.6748, 118.8885], aliases: ['Sulawesi Barat'] },
  { name: 'West Sumatra',            code: 'ID-SB', countryCode: 'ID', capital: 'Padang',         capitalCoords: [-0.9471, 100.4172], aliases: ['Sumatera Barat'] },

  // --- Nigeria (36 states + Federal Capital Territory) ---
  // Self-hosted GeoJSON (geoBoundaries ADM1). The GeoJSON labels the FCT
  // "Abuja Federal Capital Territory"; canonical here is "Federal Capital
  // Territory" with "Abuja" / "FCT" aliases.
  { name: 'Abia',                      code: 'NG-AB', countryCode: 'NG', capital: 'Umuahia',       capitalCoords: [5.5249, 7.4942] },
  { name: 'Adamawa',                   code: 'NG-AD', countryCode: 'NG', capital: 'Yola',          capitalCoords: [9.2035, 12.4954] },
  { name: 'Akwa Ibom',                 code: 'NG-AK', countryCode: 'NG', capital: 'Uyo',           capitalCoords: [5.0377, 7.9128] },
  { name: 'Anambra',                   code: 'NG-AN', countryCode: 'NG', capital: 'Awka',          capitalCoords: [6.2107, 7.0747] },
  { name: 'Bauchi',                    code: 'NG-BA', countryCode: 'NG', capital: 'Bauchi',        capitalCoords: [10.3103, 9.8439] },
  { name: 'Bayelsa',                   code: 'NG-BY', countryCode: 'NG', capital: 'Yenagoa',       capitalCoords: [4.9267, 6.2676] },
  { name: 'Benue',                     code: 'NG-BE', countryCode: 'NG', capital: 'Makurdi',       capitalCoords: [7.7322, 8.5391] },
  { name: 'Borno',                     code: 'NG-BO', countryCode: 'NG', capital: 'Maiduguri',     capitalCoords: [11.8311, 13.151] },
  { name: 'Cross River',               code: 'NG-CR', countryCode: 'NG', capital: 'Calabar',       capitalCoords: [4.9757, 8.3417] },
  { name: 'Delta',                     code: 'NG-DE', countryCode: 'NG', capital: 'Asaba',         capitalCoords: [6.1986, 6.7272] },
  { name: 'Ebonyi',                    code: 'NG-EB', countryCode: 'NG', capital: 'Abakaliki',     capitalCoords: [6.3249, 8.1137] },
  { name: 'Edo',                       code: 'NG-ED', countryCode: 'NG', capital: 'Benin City',    capitalCoords: [6.335, 5.6037] },
  { name: 'Ekiti',                     code: 'NG-EK', countryCode: 'NG', capital: 'Ado-Ekiti',     capitalCoords: [7.6211, 5.2214] },
  { name: 'Enugu',                     code: 'NG-EN', countryCode: 'NG', capital: 'Enugu',         capitalCoords: [6.5244, 7.5186] },
  { name: 'Federal Capital Territory', code: 'NG-FC', countryCode: 'NG', capital: 'Abuja',         capitalCoords: [9.0765, 7.3986], aliases: ['Abuja Federal Capital Territory', 'Abuja', 'FCT'] },
  { name: 'Gombe',                     code: 'NG-GO', countryCode: 'NG', capital: 'Gombe',         capitalCoords: [10.2897, 11.1689] },
  { name: 'Imo',                       code: 'NG-IM', countryCode: 'NG', capital: 'Owerri',        capitalCoords: [5.4836, 7.0332] },
  { name: 'Jigawa',                    code: 'NG-JI', countryCode: 'NG', capital: 'Dutse',         capitalCoords: [11.7566, 9.3386] },
  { name: 'Kaduna',                    code: 'NG-KD', countryCode: 'NG', capital: 'Kaduna',        capitalCoords: [10.5222, 7.4383] },
  { name: 'Kano',                      code: 'NG-KN', countryCode: 'NG', capital: 'Kano',          capitalCoords: [12.0022, 8.592] },
  { name: 'Katsina',                   code: 'NG-KT', countryCode: 'NG', capital: 'Katsina',       capitalCoords: [12.9908, 7.6018] },
  { name: 'Kebbi',                     code: 'NG-KE', countryCode: 'NG', capital: 'Birnin Kebbi',  capitalCoords: [12.4539, 4.1975] },
  { name: 'Kogi',                      code: 'NG-KO', countryCode: 'NG', capital: 'Lokoja',        capitalCoords: [7.7969, 6.7405] },
  { name: 'Kwara',                     code: 'NG-KW', countryCode: 'NG', capital: 'Ilorin',        capitalCoords: [8.4799, 4.5418] },
  { name: 'Lagos',                     code: 'NG-LA', countryCode: 'NG', capital: 'Ikeja',         capitalCoords: [6.6018, 3.3515] },
  { name: 'Nasarawa',                  code: 'NG-NA', countryCode: 'NG', capital: 'Lafia',         capitalCoords: [8.4939, 8.5158], aliases: ['Nassarawa'] },
  { name: 'Niger',                     code: 'NG-NI', countryCode: 'NG', capital: 'Minna',         capitalCoords: [9.6139, 6.5569] },
  { name: 'Ogun',                      code: 'NG-OG', countryCode: 'NG', capital: 'Abeokuta',      capitalCoords: [7.1557, 3.3451] },
  { name: 'Ondo',                      code: 'NG-ON', countryCode: 'NG', capital: 'Akure',         capitalCoords: [7.2508, 5.2103] },
  { name: 'Osun',                      code: 'NG-OS', countryCode: 'NG', capital: 'Osogbo',        capitalCoords: [7.7669, 4.5566], aliases: ['Oshogbo'] },
  { name: 'Oyo',                       code: 'NG-OY', countryCode: 'NG', capital: 'Ibadan',        capitalCoords: [7.3775, 3.947] },
  { name: 'Plateau',                   code: 'NG-PL', countryCode: 'NG', capital: 'Jos',           capitalCoords: [9.8965, 8.8583] },
  { name: 'Rivers',                    code: 'NG-RI', countryCode: 'NG', capital: 'Port Harcourt', capitalCoords: [4.8156, 7.0498] },
  { name: 'Sokoto',                    code: 'NG-SO', countryCode: 'NG', capital: 'Sokoto',        capitalCoords: [13.0059, 5.2476] },
  { name: 'Taraba',                    code: 'NG-TA', countryCode: 'NG', capital: 'Jalingo',       capitalCoords: [8.8833, 11.3667] },
  { name: 'Yobe',                      code: 'NG-YO', countryCode: 'NG', capital: 'Damaturu',      capitalCoords: [11.7479, 11.9608] },
  { name: 'Zamfara',                   code: 'NG-ZA', countryCode: 'NG', capital: 'Gusau',         capitalCoords: [12.1628, 6.6614] },

  // --- South Africa (9 provinces) ---
  // Self-hosted GeoJSON (geoBoundaries ADM1). NOTE the source misspells
  // "Northern Cape" as "Nothern Cape"; the misspelling is kept as an alias so
  // the feature still resolves. Capitals are the provincial (not national) seats.
  { name: 'Eastern Cape',  code: 'ZA-EC',  countryCode: 'ZA', capital: 'Bhisho',           capitalCoords: [-32.847, 27.4424], aliases: ['Bisho'] },
  { name: 'Free State',    code: 'ZA-FS',  countryCode: 'ZA', capital: 'Bloemfontein',     capitalCoords: [-29.0852, 26.1596] },
  { name: 'Gauteng',       code: 'ZA-GP',  countryCode: 'ZA', capital: 'Johannesburg',     capitalCoords: [-26.2041, 28.0473] },
  { name: 'KwaZulu-Natal', code: 'ZA-KZN', countryCode: 'ZA', capital: 'Pietermaritzburg', capitalCoords: [-29.6006, 30.3794] },
  { name: 'Limpopo',       code: 'ZA-LP',  countryCode: 'ZA', capital: 'Polokwane',        capitalCoords: [-23.9045, 29.4689] },
  { name: 'Mpumalanga',    code: 'ZA-MP',  countryCode: 'ZA', capital: 'Mbombela',         capitalCoords: [-25.4658, 30.9853], aliases: ['Nelspruit'] },
  { name: 'North West',    code: 'ZA-NW',  countryCode: 'ZA', capital: 'Mahikeng',         capitalCoords: [-25.8652, 25.6442], aliases: ['Mafikeng'] },
  { name: 'Northern Cape', code: 'ZA-NC',  countryCode: 'ZA', capital: 'Kimberley',        capitalCoords: [-28.7282, 24.7499], aliases: ['Nothern Cape'] },
  { name: 'Western Cape',  code: 'ZA-WC',  countryCode: 'ZA', capital: 'Cape Town',        capitalCoords: [-33.9249, 18.4241] },
]

// Parent countries supported by the States Quiz. The order here doesn't
// matter for UI — CountrySelector sorts alphabetically — but matches the
// quiz pool's grouping above.
export const STATES_COUNTRIES = [
  { code: 'US', label: 'United States' },
  { code: 'MX', label: 'Mexico' },
  { code: 'CA', label: 'Canada' },
  { code: 'AR', label: 'Argentina' },
  { code: 'BR', label: 'Brazil' },
  { code: 'AU', label: 'Australia' },
  { code: 'PH', label: 'Philippines' },
  { code: 'IN', label: 'India' },
  { code: 'MY', label: 'Malaysia' },
  { code: 'ID', label: 'Indonesia' },
  { code: 'NG', label: 'Nigeria' },
  { code: 'ZA', label: 'South Africa' },
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
