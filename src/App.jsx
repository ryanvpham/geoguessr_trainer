import { useState } from 'react'
import MenuScreen from './components/MenuScreen'
import CountryQuizSettings from './components/CountryQuizSettings'
import CapitalQuizSettings from './components/CapitalQuizSettings'
import StatesQuizSettings from './components/StatesQuizSettings'
import StateCapitalQuizSettings from './components/StateCapitalQuizSettings'
import GameScreen from './components/GameScreen'
import { REGION_IDS } from './data/regionMapping'

function App() {
  const [currentScreen, setCurrentScreen] = useState('menu')
  const [gameMode, setGameMode] = useState(null)

  // Settings for each game mode. By default every region is selected so the
  // quiz covers the whole world until the user narrows it down.
  const [countryQuizSettings, setCountryQuizSettings] = useState({
    geoguessrFilter: false,
    questionFormat: 'flag', // 'flag' | 'map' | 'capital'
    answerFormat: 'typein', // 'typein' or 'multichoice'
    selectedRegions: [...REGION_IDS],
  })

  const [capitalQuizSettings, setCapitalQuizSettings] = useState({
    geoguessrFilter: false,
    questionFormat: 'flag', // 'flag' | 'countryName' | 'map'
    answerFormat: 'typein', // 'typein' or 'multichoice'
    selectedRegions: [...REGION_IDS],
  })

  // States Quiz: only one question format (map) today. `selectedCountry` is
  // a single ISO alpha-2 — pool is whichever country's subdivisions the user
  // picked from the dropdown. Defaults to United States.
  const [statesQuizSettings, setStatesQuizSettings] = useState({
    questionFormat: 'map',
    answerFormat: 'typein', // 'typein' or 'multichoice'
    selectedCountry: 'US',
  })

  // Scoped to STATE_CAPITAL_COUNTRIES (same set as the States Quiz).
  const [stateCapitalQuizSettings, setStateCapitalQuizSettings] = useState({
    questionFormat: 'map', // 'state' (name as text) | 'map' (highlighted on country map)
    answerFormat: 'typein', // 'typein' or 'multichoice'
    selectedCountry: 'US',
  })

  const handleStartCountryQuiz = () => {
    setGameMode('country')
    setCurrentScreen('game')
  }

  const handleStartCapitalQuiz = () => {
    setGameMode('capital')
    setCurrentScreen('game')
  }

  const handleStartStatesQuiz = () => {
    setGameMode('states')
    setCurrentScreen('game')
  }

  const handleStartStateCapitalQuiz = () => {
    setGameMode('stateCapital')
    setCurrentScreen('game')
  }

  const settingsForMode = {
    country:      countryQuizSettings,
    capital:      capitalQuizSettings,
    states:       statesQuizSettings,
    stateCapital: stateCapitalQuizSettings,
  }

  return (
    <div className="container">
      {currentScreen === 'menu' && (
        <MenuScreen
          onCountryQuizClick={() => setCurrentScreen('country-quiz-settings')}
          onCapitalQuizClick={() => setCurrentScreen('capital-quiz-settings')}
          onStatesQuizClick={() => setCurrentScreen('states-quiz-settings')}
          onStateCapitalQuizClick={() => setCurrentScreen('state-capital-quiz-settings')}
        />
      )}

      {currentScreen === 'country-quiz-settings' && (
        <CountryQuizSettings
          settings={countryQuizSettings}
          onSettingsChange={setCountryQuizSettings}
          onBack={() => setCurrentScreen('menu')}
          onStart={handleStartCountryQuiz}
        />
      )}

      {currentScreen === 'capital-quiz-settings' && (
        <CapitalQuizSettings
          settings={capitalQuizSettings}
          onSettingsChange={setCapitalQuizSettings}
          onBack={() => setCurrentScreen('menu')}
          onStart={handleStartCapitalQuiz}
        />
      )}

      {currentScreen === 'states-quiz-settings' && (
        <StatesQuizSettings
          settings={statesQuizSettings}
          onSettingsChange={setStatesQuizSettings}
          onBack={() => setCurrentScreen('menu')}
          onStart={handleStartStatesQuiz}
        />
      )}

      {currentScreen === 'state-capital-quiz-settings' && (
        <StateCapitalQuizSettings
          settings={stateCapitalQuizSettings}
          onSettingsChange={setStateCapitalQuizSettings}
          onBack={() => setCurrentScreen('menu')}
          onStart={handleStartStateCapitalQuiz}
        />
      )}

      {currentScreen === 'game' && (
        <GameScreen
          gameMode={gameMode}
          settings={settingsForMode[gameMode]}
          onBack={() => setCurrentScreen('menu')}
        />
      )}
    </div>
  )
}

export default App

