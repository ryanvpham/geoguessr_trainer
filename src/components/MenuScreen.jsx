import ThemeToggle from './ThemeToggle'

function MenuScreen({ onCountryQuizClick, onCapitalQuizClick, onStatesQuizClick }) {
  return (
    <div className="screen">
      <div className="menu-top-bar">
        <ThemeToggle />
      </div>

      <div className="menu-hero">
        <span className="eyebrow">GeoGuessr Trainer</span>
        <h1>Learn the world,<br />one flag at a time.</h1>
        <p className="tagline">
          Free practice for country names, flags, and capitals.
          No signup, no ads, no tracking — just quizzes.
        </p>
      </div>

      <div className="mode-grid">
        <button
          type="button"
          className="mode-card"
          onClick={onCountryQuizClick}
        >
          <span className="mode-icon" aria-hidden="true">🏳️</span>
          <h2>Country Quiz</h2>
          <p>
            Identify countries from their flag or their highlighted position on the
            world map.
          </p>
          <span className="mode-arrow">Start practicing →</span>
        </button>

        <button
          type="button"
          className="mode-card"
          onClick={onCapitalQuizClick}
        >
          <span className="mode-icon" aria-hidden="true">🏛️</span>
          <h2>Country Capital Quiz</h2>
          <p>
            Given a flag, country name, or highlighted country on the map, name
            its capital.
          </p>
          <span className="mode-arrow">Start practicing →</span>
        </button>

        <button
          type="button"
          className="mode-card"
          onClick={onStatesQuizClick}
        >
          <span className="mode-icon" aria-hidden="true">🗺️</span>
          <h2>States Quiz</h2>
          <p>
            Pick a country and name the state or province marked on the map.
          </p>
          <span className="mode-arrow">Start practicing →</span>
        </button>
      </div>

      <footer className="app-footer">
        Built for GeoGuessr beginners.
      </footer>
    </div>
  )
}

export default MenuScreen
