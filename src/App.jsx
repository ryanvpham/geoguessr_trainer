import { useState } from 'react'
import MenuScreen from './components/MenuScreen'
import CountryQuizSettings from './components/CountryQuizSettings'
import CapitalQuizSettings from './components/CapitalQuizSettings'
import GameScreen from './components/GameScreen'

function App() {
  const [currentScreen, setCurrentScreen] = useState('menu')
  const [gameMode, setGameMode] = useState(null)
  
  // Settings for each game mode
  const [countryQuizSettings, setCountryQuizSettings] = useState({
    geoguessrFilter: false,
    questionFormat: 'flag', // 'flag' or 'map'
    answerFormat: 'typein' // 'typein' or 'multichoice'
  })
  
  const [capitalQuizSettings, setCapitalQuizSettings] = useState({
    geoguessrFilter: false,
    questionFormat: 'flag', // 'flag' or 'countryName'
    answerFormat: 'typein' // 'typein' or 'multichoice'
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

