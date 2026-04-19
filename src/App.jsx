import { useState } from 'react'
import MenuScreen from './components/MenuScreen'
import CountryQuizSettings from './components/CountryQuizSettings'
import CapitalQuizSettings from './components/CapitalQuizSettings'
import GameScreen from './components/GameScreen'
import { REGION_IDS } from './data/regionMapping'

function App() {
  const [currentScreen, setCurrentScreen] = useState('menu')
  const [gameMode, setGameMode] = useState(null)

  // Settings for each game mode. By default every region is selected so the
  // quiz covers the whole world until the user narrows it down.
  const [countryQuizSettings, setCountryQuizSettings] = useState({
    geoguessrFilter: false,
    questionFormat: 'flag', // 'flag' or 'map'
    answerFormat: 'typein', // 'typein' or 'multichoice'
    selectedRegions: [...REGION_IDS],
  })

  const [capitalQuizSettings, setCapitalQuizSettings] = useState({
    geoguessrFilter: false,
    questionFormat: 'flag', // 'flag' or 'countryName'
    answerFormat: 'typein', // 'typein' or 'multichoice'
    selectedRegions: [...REGION_IDS],
  })

  const handleStartCountryQuiz = () => {
    setGameMode('country')
    setCurrentScreen('game')
  }

  const handleStartCapitalQuiz = () => {
    setGameMode('capital')
    setCurrentScreen('game')
  }

  return (
    <div className="container">
      {currentScreen === 'menu' && (
        <MenuScreen
          onCountryQuizClick={() => setCurrentScreen('country-quiz-settings')}
          onCapitalQuizClick={() => setCurrentScreen('capital-quiz-settings')}
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
      
      {currentScreen === 'game' && (
        <GameScreen
          gameMode={gameMode}
          settings={gameMode === 'country' ? countryQuizSettings : capitalQuizSettings}
          onBack={() => setCurrentScreen('menu')}
        />
      )}
    </div>
  )
}

export default App

