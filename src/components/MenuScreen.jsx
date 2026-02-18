function MenuScreen({ onCountryQuizClick, onCapitalQuizClick }) {
  return (
    <div className="screen">
      <header>
        <h1>🌍 GeoGuessr Trainer</h1>
      </header>
      <div className="menu-buttons">
        <button className="menu-btn" onClick={onCountryQuizClick}>
          Country Quiz
        </button>
        <button className="menu-btn" onClick={onCapitalQuizClick}>
          Country Capital Quiz
        </button>
      </div>
    </div>
  )
}

export default MenuScreen

