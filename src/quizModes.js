import CountryQuizSettings from './components/CountryQuizSettings'
import CapitalQuizSettings from './components/CapitalQuizSettings'
import StatesQuizSettings from './components/StatesQuizSettings'
import StateCapitalQuizSettings from './components/StateCapitalQuizSettings'
import { REGION_IDS } from './data/regionMapping'
import { ROUTE_META } from './seo/meta'

// Single source of truth for the quiz modes. `src/routes.jsx` derives a route
// per entry and `src/screens/QuizPage.jsx` renders each one — adding a mode is
// one row here (plus its ROUTE_META entry + a matching GameScreen MODE_INFO).
// SEO strings live in ROUTE_META; user-facing card copy lives in MenuScreen and
// the in-game header in GameScreen's MODE_INFO — those are deliberately separate
// registers (marketing vs. <title> vs. terse header), not duplicated here.
//
// Each `defaultSettings` is its own object literal (own `[...REGION_IDS]` array)
// so modes never share a settings reference; useState snapshots it per mount.
export const QUIZ_MODES = [
  {
    gameMode: 'country',
    Settings: CountryQuizSettings,
    meta: ROUTE_META.country,
    defaultSettings: {
      geoguessrFilter: false,
      questionFormat: 'flag', // 'flag' | 'map' | 'capital'
      answerFormat: 'typein', // 'typein' | 'multichoice'
      selectedRegions: [...REGION_IDS],
    },
  },
  {
    gameMode: 'capital',
    Settings: CapitalQuizSettings,
    meta: ROUTE_META.capital,
    defaultSettings: {
      geoguessrFilter: false,
      questionFormat: 'flag', // 'flag' | 'countryName' | 'map'
      answerFormat: 'typein',
      selectedRegions: [...REGION_IDS],
    },
  },
  {
    gameMode: 'states',
    Settings: StatesQuizSettings,
    meta: ROUTE_META.states,
    defaultSettings: {
      questionFormat: 'map',
      answerFormat: 'typein',
      selectedCountry: 'US',
    },
  },
  {
    gameMode: 'stateCapital',
    Settings: StateCapitalQuizSettings,
    meta: ROUTE_META.stateCapital,
    defaultSettings: {
      questionFormat: 'map', // 'state' | 'map'
      answerFormat: 'typein',
      selectedCountry: 'US',
    },
  },
]
