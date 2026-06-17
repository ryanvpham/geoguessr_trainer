import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

// Mode cards are real <Link> anchors (not buttons) so crawlers follow them to
// the four prerendered keyword pages, and they work as normal client-side nav.
function MenuScreen() {
  return (
    <div className="screen">
      <div className="menu-top-bar">
        <ThemeToggle />
      </div>

      <div className="menu-hero">
        <span className="eyebrow">GeoGuessr Trainer</span>
        <h1>Learn the world,<br />one country at a time.</h1>
        <p className="tagline">
          Free practice for country names, flags, and capitals.
          No signup, no ads, no tracking — just quizzes.
        </p>
      </div>

      <main className="mode-grid">
        <Link to="/country-quiz/" className="mode-card">
          <span className="mode-icon" aria-hidden="true">🏳️</span>
          <h2>Country Quiz</h2>
          <p>
            Identify countries from their flag or their position on the
            world map.
          </p>
          <span className="mode-arrow">Start practicing →</span>
        </Link>

        <Link to="/capital-quiz/" className="mode-card">
          <span className="mode-icon" aria-hidden="true">🏛️</span>
          <h2>Country Capital Quiz</h2>
          <p>
            Given a country's flag, name, or location on the map, name
            its capital.
          </p>
          <span className="mode-arrow">Start practicing →</span>
        </Link>

        <Link to="/states-quiz/" className="mode-card">
          <span className="mode-icon" aria-hidden="true">🗺️</span>
          <h2>States &amp; Provinces Quiz</h2>
          <p>
            Pick a country and name the state or province marked on the map.
          </p>
          <span className="mode-arrow">Start practicing →</span>
        </Link>

        <Link to="/state-capital-quiz/" className="mode-card">
          <span className="mode-icon" aria-hidden="true">🏙️</span>
          <h2>State &amp; Province Capitals Quiz</h2>
          <p>
            Given a state or province's name or its location on the map, name
            its capital.
          </p>
          <span className="mode-arrow">Start practicing →</span>
        </Link>
      </main>

      <section className="menu-about">
        <p>
          GeoGuessr Trainer is a free set of geography quizzes for sharpening your
          map skills: a <Link to="/country-quiz/">country flags quiz</Link>, a{' '}
          <Link to="/capital-quiz/">world capitals quiz</Link>, a{' '}
          <Link to="/states-quiz/">states &amp; provinces map quiz</Link>, and a{' '}
          <Link to="/state-capital-quiz/">state capitals quiz</Link>. Practice right
          in your browser — no account and no ads.
        </p>
      </section>

      <footer className="app-footer">
        Built for GeoGuessr beginners.
      </footer>
    </div>
  )
}

export default MenuScreen
