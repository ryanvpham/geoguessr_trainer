import { lazy, Suspense, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Seo from '../seo/Seo'

// GameScreen pulls in d3-geo, topojson and the map data — lazy-load it so that
// heavy bundle stays out of the prerendered settings/menu chunks and only loads
// when the user actually starts a quiz. `started` is false during SSG, so this
// never renders (or imports) during prerender.
const GameScreen = lazy(() => import('../components/GameScreen'))

// One generic page for every quiz mode (see src/quizModes.js). Holds the mode's
// settings + a `started` flag, renders the mode's settings screen, then swaps to
// the game on Start. Back from either returns to the menu.
function QuizPage({ mode }) {
  const { gameMode, Settings, defaultSettings, meta } = mode
  const navigate = useNavigate()
  const [settings, setSettings] = useState(defaultSettings)
  const [started, setStarted] = useState(false)
  const goHome = () => navigate('/')

  if (started) {
    return (
      <Suspense fallback={null}>
        <GameScreen gameMode={gameMode} settings={settings} onBack={goHome} />
      </Suspense>
    )
  }

  return (
    <>
      <Seo {...meta} />
      <Settings
        settings={settings}
        onSettingsChange={setSettings}
        onBack={goHome}
        onStart={() => setStarted(true)}
      />
    </>
  )
}

export default QuizPage
