import { lazy, Suspense, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Seo from '../seo/Seo'

// GameScreen pulls in d3-geo, topojson and the map data — lazy-load it so that
// heavy bundle stays out of the prerendered settings/menu chunks and only loads
// when the user actually starts a quiz. `started` is false during SSG, so this
// never renders (or imports) during prerender.
const GameScreen = lazy(() => import('../components/GameScreen'))

// Last-used settings per gameMode, so leaving a quiz and coming back to the same
// mode restores the user's previous choices. Module-level (in-memory) on purpose:
// it survives client-side navigation but starts empty on a fresh page load, so
// the first render always matches the prerendered defaults — reading
// localStorage in the initializer would cause a hydration mismatch.
const savedSettings = new Map()

// One generic page for every quiz mode (see src/quizModes.js). Holds the mode's
// settings + a `started` flag, renders the mode's settings screen, then swaps to
// the game on Start. Back from either returns to the menu.
function QuizPage({ mode }) {
  const { gameMode, Settings, defaultSettings, meta } = mode
  const navigate = useNavigate()
  const [settings, setSettings] = useState(() => savedSettings.get(gameMode) ?? defaultSettings)
  const updateSettings = (next) => {
    savedSettings.set(gameMode, next)
    setSettings(next)
  }
  const [started, setStarted] = useState(false)
  // Bumped by GameScreen's Restart button. Keying GameScreen on it remounts the
  // game with fresh state (same settings), so restart can't drift out of sync
  // with GameScreen's own initialisation.
  const [runId, setRunId] = useState(0)
  const goHome = () => navigate('/')

  if (started) {
    return (
      <Suspense fallback={null}>
        <GameScreen
          key={runId}
          gameMode={gameMode}
          settings={settings}
          onBack={goHome}
          onRestart={() => setRunId(id => id + 1)}
        />
      </Suspense>
    )
  }

  return (
    <>
      <Seo {...meta} />
      <Settings
        settings={settings}
        onSettingsChange={updateSettings}
        onBack={goHome}
        onStart={() => setStarted(true)}
      />
    </>
  )
}

export default QuizPage
