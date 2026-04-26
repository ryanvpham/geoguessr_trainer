// Top-level administrative subdivisions for the States Quiz.
// Covers:
//   - 50 U.S. states
//   - 32 Mexican states (incl. Mexico City / CDMX)
//   - Canada's 10 provinces + 3 territories
//   - Argentina's 23 provinces + Buenos Aires City (CABA)
//   - Brazil's 26 states + Federal District
//   - Australia's 6 states + 2 territories
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
