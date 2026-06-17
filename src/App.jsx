import { StrictMode } from 'react'
import { Outlet } from 'react-router-dom'

// Layout shell for every route. Navigation between screens is now URL-based
// (see src/routes.jsx); each quiz mode owns its own settings + game state in
// its page wrapper under src/screens/. The matched route renders into <Outlet>.
function App() {
  return (
    <StrictMode>
      <div className="container">
        <Outlet />
      </div>
    </StrictMode>
  )
}

export default App
