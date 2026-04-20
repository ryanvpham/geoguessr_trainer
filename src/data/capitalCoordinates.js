// Latitude / longitude for every capital city in allCountries (210 entries).
// Used to place a marker on the map for the Capital Quiz's map question format.
// Coordinates are decimal degrees, [lat, lng].
//
// Notes on edge cases:
//   - Bolivia: Sucre (the constitutional capital) rather than La Paz.
//   - South Africa: Pretoria (the executive capital) — SA has three.
//   - Israel / Palestine: both are placed at ~Jerusalem; the map marker is just
//     a positional hint and the quiz answer is the capital string.
//   - Kazakhstan: Astana (reverted from Nur-Sultan in 2022).
//   - Myanmar: Naypyidaw (the administrative capital since 2005).
//   - Ivory Coast: Yamoussoukro (the official capital; Abidjan is economic).
//   - Micronesian states with dispersed "capital districts" (Nauru, FSM,
//     Palau) use the coordinates of their seat of government.

export const capitalCoordinates = {
  // --- Europe ---
  AL: [41.3275, 19.8187],   // Tirana
  AD: [42.5063, 1.5218],    // Andorra la Vella
  AT: [48.2082, 16.3738],   // Vienna
  BY: [53.9006, 27.5590],   // Minsk
  BE: [50.8503, 4.3517],    // Brussels
  BA: [43.8563, 18.4131],   // Sarajevo
  BG: [42.6977, 23.3219],   // Sofia
  HR: [45.8150, 15.9819],   // Zagreb
  CY: [35.1856, 33.3823],   // Nicosia
  CZ: [50.0755, 14.4378],   // Prague
  DK: [55.6761, 12.5683],   // Copenhagen
  EE: [59.4370, 24.7536],   // Tallinn
  FO: [62.0108, -6.7714],   // Tórshavn
  FI: [60.1699, 24.9384],   // Helsinki
  FR: [48.8566, 2.3522],    // Paris
  DE: [52.5200, 13.4050],   // Berlin
  GR: [37.9838, 23.7275],   // Athens
  HU: [47.4979, 19.0402],   // Budapest
  IS: [64.1466, -21.9426],  // Reykjavík
  IE: [53.3498, -6.2603],   // Dublin
  IM: [54.1523, -4.4862],   // Douglas
  IT: [41.9028, 12.4964],   // Rome
  XK: [42.6629, 21.1655],   // Pristina
  LV: [56.9496, 24.1052],   // Riga
  LI: [47.1410, 9.5209],    // Vaduz
  LT: [54.6872, 25.2797],   // Vilnius
  LU: [49.6116, 6.1319],    // Luxembourg
  MT: [35.8989, 14.5146],   // Valletta
  MD: [47.0105, 28.8638],   // Chișinău
  MC: [43.7384, 7.4246],    // Monaco
  ME: [42.4304, 19.2594],   // Podgorica
  NL: [52.3676, 4.9041],    // Amsterdam
  MK: [41.9981, 21.4254],   // Skopje
  NO: [59.9139, 10.7522],   // Oslo
  PL: [52.2297, 21.0122],   // Warsaw
  PT: [38.7223, -9.1393],   // Lisbon
  RO: [44.4268, 26.1025],   // Bucharest
  RU: [55.7558, 37.6173],   // Moscow
  SM: [43.9424, 12.4578],   // San Marino
  RS: [44.7866, 20.4489],   // Belgrade
  SK: [48.1486, 17.1077],   // Bratislava
  SI: [46.0569, 14.5058],   // Ljubljana
  ES: [40.4168, -3.7038],   // Madrid
  SE: [59.3293, 18.0686],   // Stockholm
  CH: [46.9480, 7.4474],    // Bern
  UA: [50.4501, 30.5234],   // Kyiv
  GB: [51.5074, -0.1278],   // London
  VA: [41.9029, 12.4534],   // Vatican City

  // --- Middle East ---
  BH: [26.2235, 50.5876],   // Manama
  IR: [35.6892, 51.3890],   // Tehran
  IQ: [33.3152, 44.3661],   // Baghdad
  IL: [31.7683, 35.2137],   // Jerusalem
  JO: [31.9539, 35.9106],   // Amman
  KW: [29.3759, 47.9774],   // Kuwait City
  LB: [33.8938, 35.5018],   // Beirut
  OM: [23.5880, 58.3829],   // Muscat
  PS: [31.7833, 35.2333],   // East Jerusalem
  QA: [25.2854, 51.5310],   // Doha
  SA: [24.7136, 46.6753],   // Riyadh
  SY: [33.5138, 36.2765],   // Damascus
  TR: [39.9334, 32.8597],   // Ankara
  AE: [24.4539, 54.3773],   // Abu Dhabi
  YE: [15.3694, 44.1910],   // Sana'a

  // --- Africa ---
  DZ: [36.7538, 3.0588],    // Algiers
  AO: [-8.8383, 13.2344],   // Luanda
  BJ: [6.4969, 2.6289],     // Porto-Novo
  BW: [-24.6282, 25.9231],  // Gaborone
  BF: [12.3714, -1.5197],   // Ouagadougou
  BI: [-3.4264, 29.9308],   // Gitega
  CM: [3.8480, 11.5021],    // Yaoundé
  CV: [14.9330, -23.5133],  // Praia
  CF: [4.3947, 18.5582],    // Bangui
  TD: [12.1348, 15.0557],   // N'Djamena
  KM: [-11.7172, 43.2473],  // Moroni
  CG: [-4.2634, 15.2429],   // Brazzaville
  DJ: [11.8251, 42.5903],   // Djibouti
  CD: [-4.4419, 15.2663],   // Kinshasa
  EG: [30.0444, 31.2357],   // Cairo
  GQ: [3.7504, 8.7371],     // Malabo
  ER: [15.3229, 38.9251],   // Asmara
  SZ: [-26.3054, 31.1367],  // Mbabane
  ET: [9.0320, 38.7469],    // Addis Ababa
  GA: [0.4162, 9.4673],     // Libreville
  GM: [13.4549, -16.5790],  // Banjul
  GH: [5.6037, -0.1870],    // Accra
  GN: [9.5370, -13.6785],   // Conakry
  GW: [11.8636, -15.5977],  // Bissau
  CI: [6.8276, -5.2893],    // Yamoussoukro
  KE: [-1.2921, 36.8219],   // Nairobi
  LS: [-29.3151, 27.4869],  // Maseru
  LR: [6.2907, -10.7605],   // Monrovia
  LY: [32.8872, 13.1913],   // Tripoli
  MG: [-18.8792, 47.5079],  // Antananarivo
  MW: [-13.9626, 33.7741],  // Lilongwe
  ML: [12.6392, -8.0029],   // Bamako
  MR: [18.0735, -15.9582],  // Nouakchott
  MU: [-20.1609, 57.5012],  // Port Louis
  MA: [34.0209, -6.8416],   // Rabat
  MZ: [-25.9692, 32.5732],  // Maputo
  NA: [-22.5597, 17.0832],  // Windhoek
  NE: [13.5127, 2.1128],    // Niamey
  NG: [9.0765, 7.3986],     // Abuja
  RE: [-20.8789, 55.4481],  // Saint-Denis
  RW: [-1.9441, 30.0619],   // Kigali
  ST: [0.3302, 6.7333],     // São Tomé
  SN: [14.7167, -17.4677],  // Dakar
  SC: [-4.6191, 55.4513],   // Victoria
  SL: [8.4657, -13.2317],   // Freetown
  SO: [2.0469, 45.3182],    // Mogadishu
  ZA: [-25.7479, 28.2293],  // Pretoria
  SS: [4.8594, 31.5713],    // Juba
  SD: [15.5007, 32.5599],   // Khartoum
  TZ: [-6.1630, 35.7516],   // Dodoma
  TG: [6.1375, 1.2123],     // Lomé
  TN: [36.8065, 10.1815],   // Tunis
  UG: [0.3476, 32.5825],    // Kampala
  ZM: [-15.3875, 28.3228],  // Lusaka
  ZW: [-17.8292, 31.0522],  // Harare

  // --- Asia ---
  AF: [34.5553, 69.2075],   // Kabul
  AM: [40.1872, 44.5152],   // Yerevan
  AZ: [40.4093, 49.8671],   // Baku
  BD: [23.8103, 90.4125],   // Dhaka
  BT: [27.4712, 89.6339],   // Thimphu
  BN: [4.9031, 114.9398],   // Bandar Seri Begawan
  KH: [11.5564, 104.9282],  // Phnom Penh
  CN: [39.9042, 116.4074],  // Beijing
  GE: [41.7151, 44.8271],   // Tbilisi
  HK: [22.3193, 114.1694],  // Hong Kong
  IN: [28.6139, 77.2090],   // New Delhi
  ID: [-6.2088, 106.8456],  // Jakarta
  JP: [35.6762, 139.6503],  // Tokyo
  KZ: [51.1694, 71.4491],   // Astana
  KG: [42.8746, 74.5698],   // Bishkek
  LA: [17.9757, 102.6331],  // Vientiane
  MY: [3.1390, 101.6869],   // Kuala Lumpur
  MV: [4.1755, 73.5093],    // Malé
  MN: [47.8864, 106.9057],  // Ulaanbaatar
  MM: [19.7633, 96.0785],   // Naypyidaw
  NP: [27.7172, 85.3240],   // Kathmandu
  KP: [39.0392, 125.7625],  // Pyongyang
  PK: [33.6844, 73.0479],   // Islamabad
  PH: [14.5995, 120.9842],  // Manila
  SG: [1.3521, 103.8198],   // Singapore
  KR: [37.5665, 126.9780],  // Seoul
  LK: [6.9271, 79.8612],    // Colombo
  TW: [25.0330, 121.5654],  // Taipei
  TJ: [38.5598, 68.7870],   // Dushanbe
  TH: [13.7563, 100.5018],  // Bangkok
  TL: [-8.5569, 125.5603],  // Dili
  TM: [37.9601, 58.3261],   // Ashgabat
  UZ: [41.2995, 69.2401],   // Tashkent
  VN: [21.0285, 105.8544],  // Hanoi

  // --- North America (incl. Central America & Caribbean) ---
  AG: [17.1274, -61.8468],  // Saint John's
  BS: [25.0443, -77.3504],  // Nassau
  BB: [13.0975, -59.6167],  // Bridgetown
  BZ: [17.2514, -88.7705],  // Belmopan
  BM: [32.2949, -64.7834],  // Hamilton
  CA: [45.4215, -75.6972],  // Ottawa
  CR: [9.9281, -84.0907],   // San José
  CU: [23.1136, -82.3666],  // Havana
  CW: [12.1224, -68.8822],  // Willemstad
  DM: [15.3017, -61.3876],  // Roseau
  DO: [18.4861, -69.9312],  // Santo Domingo
  SV: [13.6929, -89.2182],  // San Salvador
  GL: [64.1836, -51.7214],  // Nuuk
  GD: [12.0561, -61.7486],  // Saint George's
  GT: [14.6349, -90.5069],  // Guatemala City
  HT: [18.5944, -72.3074],  // Port-au-Prince
  HN: [14.0723, -87.1921],  // Tegucigalpa
  JM: [17.9712, -76.7936],  // Kingston
  MX: [19.4326, -99.1332],  // Mexico City
  NI: [12.1150, -86.2362],  // Managua
  PA: [8.9824, -79.5199],   // Panama City
  PR: [18.4655, -66.1057],  // San Juan
  KN: [17.2955, -62.7262],  // Basseterre
  LC: [14.0101, -60.9875],  // Castries
  VC: [13.1600, -61.2248],  // Kingstown
  TT: [10.6596, -61.5180],  // Port of Spain
  US: [38.9072, -77.0369],  // Washington
  VI: [18.3419, -64.9307],  // Charlotte Amalie

  // --- South America ---
  AR: [-34.6037, -58.3816], // Buenos Aires
  BO: [-19.0196, -65.2619], // Sucre
  BR: [-15.7942, -47.8822], // Brasília
  CL: [-33.4489, -70.6693], // Santiago
  CO: [4.7110, -74.0721],   // Bogotá
  EC: [-0.1807, -78.4678],  // Quito
  GY: [6.8013, -58.1551],   // Georgetown
  PY: [-25.2637, -57.5759], // Asunción
  PE: [-12.0464, -77.0428], // Lima
  SR: [5.8520, -55.2038],   // Paramaribo
  UY: [-34.9011, -56.1645], // Montevideo
  VE: [10.4806, -66.9036],  // Caracas

  // --- Oceania ---
  AS: [-14.2754, -170.7020], // Pago Pago
  AU: [-35.2809, 149.1300],  // Canberra
  CX: [-10.4217, 105.6791],  // Flying Fish Cove
  FJ: [-18.1416, 178.4419],  // Suva
  GU: [13.4745, 144.7504],   // Hagåtña
  KI: [1.3382, 172.9792],    // South Tarawa
  MH: [7.0897, 171.3803],    // Majuro
  FM: [6.9248, 158.1611],    // Palikir
  NR: [-0.5477, 166.9209],   // Yaren
  NZ: [-41.2865, 174.7762],  // Wellington
  MP: [15.1900, 145.7467],   // Saipan
  PW: [7.5006, 134.6241],    // Ngerulmud
  PG: [-9.4438, 147.1803],   // Port Moresby
  WS: [-13.8506, -171.7513], // Apia
  SB: [-9.4280, 159.9495],   // Honiara
  TO: [-21.1393, -175.2041], // Nuku'alofa
  TV: [-8.5211, 179.1962],   // Funafuti
  VU: [-17.7334, 168.3273],  // Port Vila
}

export function getCapitalCoords(code) {
  return capitalCoordinates[code] || null
}
