import ThemeToggle from './ThemeToggle'

function MenuScreen({ onCountryQuizClick, onCapitalQuizClick }) {
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
          <h2>Capital Quiz</h2>
          <p>
            Given a flag or country name, name its capital. Perfect for brushing up
            on the trickier ones.
          </p>
          <span className="mode-arrow">Start practicing →</span>
        </button>
      </div>

      <footer className="app-footer">
        Built for GeoGuessr players. ·{' '}
        <a
          href="https://github.com/ryanvpham/geoguessr_trainer"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source on GitHub
        </a>
      </footer>
    </div>
  )
}

export default MenuScreen
