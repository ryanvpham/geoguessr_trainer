function CountryQuizSettings({ settings, onSettingsChange, onBack, onStart }) {
  const handleGeoguessrFilterChange = (e) => {
    onSettingsChange({ ...settings, geoguessrFilter: e.target.checked })
  }

  const handleQuestionFormatChange = (e) => {
    onSettingsChange({ ...settings, questionFormat: e.target.value })
  }

  const handleAnswerFormatChange = (e) => {
    onSettingsChange({ ...settings, answerFormat: e.target.value })
  }

  return (
    <div className="screen">
      <header>
        <button className="back-arrow-btn" onClick={onBack}>←</button>
        <h1>⚙️ Country Quiz Settings</h1>
      </header>
      <div className="settings-content">
        <div className="setting-item">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={settings.geoguessrFilter}
              onChange={handleGeoguessrFilterChange}
            />
            <span>GeoGuessr Countries Only</span>
          </label>
          <p className="setting-description">Filter to only countries that appear in GeoGuessr</p>
        </div>
        <div className="setting-item">
          <label className="setting-label">Question Format</label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="country-quiz-question-format"
                value="flag"
                checked={settings.questionFormat === 'flag'}
                onChange={handleQuestionFormatChange}
              />
              <span>Flag</span>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="country-quiz-question-format"
                value="map"
                checked={settings.questionFormat === 'map'}
                onChange={handleQuestionFormatChange}
              />
              <span>Map</span>
            </label>
          </div>
        </div>
        <div className="setting-item">
          <label className="setting-label">Answer Format</label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="country-quiz-answer-format"
                value="typein"
                checked={settings.answerFormat === 'typein'}
                onChange={handleAnswerFormatChange}
              />
              <span>Type In</span>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="country-quiz-answer-format"
                value="multichoice"
                checked={settings.answerFormat === 'multichoice'}
                onChange={handleAnswerFormatChange}
              />
              <span>Multiple Choice</span>
            </label>
          </div>
        </div>
        <button className="menu-btn" onClick={onStart}>Start Quiz</button>
      </div>
    </div>
  )
}

export default CountryQuizSettings

