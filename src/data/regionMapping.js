// Region classifications for each of the 210 countries in the quiz.
// 7 regions, chosen to match how GeoGuessr players typically think about the world:
//   - Europe
//   - Middle East
//   - Africa
//   - Asia
//   - North America (includes Central America and the Caribbean)
//   - South America
//   - Oceania
//
// A few judgment calls worth noting:
//   - Transcontinental countries are grouped by the region they're most commonly
//     associated with (e.g. Russia → Europe, Turkey → Middle East, Egypt → Africa).
//   - Cyprus and Armenia are often debated. Cyprus is grouped Europe (EU member),
//     Armenia and Georgia with Asia (Caucasus/Central Asia).
//   - Caribbean and Central American nations sit under North America.
//   - Christmas Island, Guam, and Northern Mariana Islands go under Oceania as
//     Pacific/Australian-administered territories.

export const REGIONS = [
  { id: 'europe', label: 'Europe' },
  { id: 'middle_east', label: 'Middle East' },
  { id: 'africa', label: 'Africa' },
  { id: 'asia', label: 'Asia' },
  { id: 'north_america', label: 'North America' },
  { id: 'south_america', label: 'South America' },
  { id: 'oceania', label: 'Oceania' },
]

export const REGION_IDS = REGIONS.map((r) => r.id)

// Country alpha-2 code → region id
export const countryToRegion = {
  // --- Europe ---
  AL: 'europe', AD: 'europe', AT: 'europe', BY: 'europe', BE: 'europe',
  BA: 'europe', BG: 'europe', HR: 'europe', CY: 'europe', CZ: 'europe',
  DK: 'europe', EE: 'europe', FO: 'europe', FI: 'europe', FR: 'europe',
  DE: 'europe', GR: 'europe', HU: 'europe', IS: 'europe', IE: 'europe',
  IM: 'europe', IT: 'europe', XK: 'europe', LV: 'europe', LI: 'europe',
  LT: 'europe', LU: 'europe', MT: 'europe', MD: 'europe', MC: 'europe',
  ME: 'europe', NL: 'europe', MK: 'europe', NO: 'europe', PL: 'europe',
  PT: 'europe', RO: 'europe', RU: 'europe', SM: 'europe', RS: 'europe',
  SK: 'europe', SI: 'europe', ES: 'europe', SE: 'europe', CH: 'europe',
  UA: 'europe', GB: 'europe', VA: 'europe',

  // --- Middle East ---
  BH: 'middle_east', IR: 'middle_east', IQ: 'middle_east', IL: 'middle_east',
  JO: 'middle_east', KW: 'middle_east', LB: 'middle_east', OM: 'middle_east',
  PS: 'middle_east', QA: 'middle_east', SA: 'middle_east', SY: 'middle_east',
  TR: 'middle_east', AE: 'middle_east', YE: 'middle_east',

  // --- Africa ---
  DZ: 'africa', AO: 'africa', BJ: 'africa', BW: 'africa', BF: 'africa',
  BI: 'africa', CM: 'africa', CV: 'africa', CF: 'africa', TD: 'africa',
  KM: 'africa', CG: 'africa', DJ: 'africa', CD: 'africa', EG: 'africa',
  GQ: 'africa', ER: 'africa', SZ: 'africa', ET: 'africa', GA: 'africa',
  GM: 'africa', GH: 'africa', GN: 'africa', GW: 'africa', CI: 'africa',
  KE: 'africa', LS: 'africa', LR: 'africa', LY: 'africa', MG: 'africa',
  MW: 'africa', ML: 'africa', MR: 'africa', MU: 'africa', MA: 'africa',
  MZ: 'africa', NA: 'africa', NE: 'africa', NG: 'africa', RE: 'africa',
  RW: 'africa', ST: 'africa', SN: 'africa', SC: 'africa', SL: 'africa',
  SO: 'africa', ZA: 'africa', SS: 'africa', SD: 'africa', TZ: 'africa',
  TG: 'africa', TN: 'africa', UG: 'africa', ZM: 'africa', ZW: 'africa',

  // --- Asia ---
  AF: 'asia', AM: 'asia', AZ: 'asia', BD: 'asia', BT: 'asia',
  BN: 'asia', KH: 'asia', CN: 'asia', GE: 'asia', HK: 'asia',
  IN: 'asia', ID: 'asia', JP: 'asia', KZ: 'asia', KG: 'asia',
  LA: 'asia', MY: 'asia', MV: 'asia', MN: 'asia', MM: 'asia',
  NP: 'asia', KP: 'asia', PK: 'asia', PH: 'asia', SG: 'asia',
  KR: 'asia', LK: 'asia', TW: 'asia', TJ: 'asia', TH: 'asia',
  TL: 'asia', TM: 'asia', UZ: 'asia', VN: 'asia',

  // --- North America (inc. Central America & Caribbean) ---
  AG: 'north_america', BS: 'north_america', BB: 'north_america', BZ: 'north_america',
  BM: 'north_america', CA: 'north_america', CR: 'north_america', CU: 'north_america',
  CW: 'north_america', DM: 'north_america', DO: 'north_america', SV: 'north_america',
  GL: 'north_america', GD: 'north_america', GT: 'north_america', HT: 'north_america',
  HN: 'north_america', JM: 'north_america', MX: 'north_america', NI: 'north_america',
  PA: 'north_america', PR: 'north_america', KN: 'north_america', LC: 'north_america',
  VC: 'north_america', TT: 'north_america', US: 'north_america', VI: 'north_america',

  // --- South America ---
  AR: 'south_america', BO: 'south_america', BR: 'south_america', CL: 'south_america',
  CO: 'south_america', EC: 'south_america', GY: 'south_america', PY: 'south_america',
  PE: 'south_america', SR: 'south_america', UY: 'south_america', VE: 'south_america',

  // --- Oceania ---
  AS: 'oceania', AU: 'oceania', CX: 'oceania', FJ: 'oceania', GU: 'oceania',
  KI: 'oceania', MH: 'oceania', FM: 'oceania', NR: 'oceania', NZ: 'oceania',
  MP: 'oceania', PW: 'oceania', PG: 'oceania', WS: 'oceania', SB: 'oceania',
  TO: 'oceania', TV: 'oceania', VU: 'oceania',
}

export function getRegionForCountry(code) {
  return countryToRegion[code] || null
}
