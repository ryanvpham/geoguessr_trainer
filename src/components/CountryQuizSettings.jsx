import RegionFilter from './RegionFilter'

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

  const handleRegionsChange = (regions) => {
    onSettingsChange({ ...settings, selectedRegions: regions })
  }

  return (
    <div className="screen">
      <header>
        <button className="back-arrow-btn" onClick={onBack} aria-label="Back">←</button>
        <h1>Country Quiz</h1>
      </header>
      <div className="settings-content">
        <div className="setting-item">
          <label className="setting-row setting-toggle">
            <div className="setting-text">
              <span className="setting-label">GeoGuessr Countries Only</span>
              <p className="setting-description">Filter to only countries that appear in GeoGuessr</p>
            </div>
            <span className="switch">
              <input
                type="checkbox"
                checked={settings.geoguessrFilter}
                onChange={handleGeoguessrFilterChange}
              />
              <span className="switch-slider" aria-hidden="true"></span>
            </span>
          </label>
        </div>
        <div className="setting-item">
          <RegionFilter
            selectedRegions={settings.selectedRegions || []}
            onChange={handleRegionsChange}
            geoguessrFilter={settings.geoguessrFilter}
          />
        </div>
        <div className="setting-item">
          <div className="setting-group">
            <div className="setting-group-head">
              <span className="setting-label">Quiz Format</span>
              <p className="setting-description">Pick how each round is shown and answered.</p>
            </div>
            <div className="setting-subrow">
              <span className="setting-label">Question</span>
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
            <div className="setting-subrow">
              <span className="setting-label">Answer</span>
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
          </div>
        </div>
        <button className="menu-btn" onClick={onStart}>Start Quiz</button>
      </div>
    </div>
  )
}

export default CountryQuizSettings

