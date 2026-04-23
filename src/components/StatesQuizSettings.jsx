import CountrySelector from './CountrySelector'

function StatesQuizSettings({ settings, onSettingsChange, onBack, onStart }) {
  const handleCountryChange = (countryCode) => {
    onSettingsChange({ ...settings, selectedCountry: countryCode })
  }

  const handleAnswerFormatChange = (e) => {
    onSettingsChange({ ...settings, answerFormat: e.target.value })
  }

  return (
    <div className="screen">
      <header>
        <button className="back-arrow-btn" onClick={onBack} aria-label="Back">←</button>
        <h1>States Quiz</h1>
      </header>
      <div className="settings-content">
        <div className="setting-item">
          <CountrySelector
            selectedCountry={settings.selectedCountry}
            onChange={handleCountryChange}
          />
        </div>
        <div className="setting-item">
          <div className="setting-group">
            <div className="setting-group-head">
              <span className="setting-label">Quiz Format</span>
              <p className="setting-description">
                Each round shows the country map with a star on the state's capital — name the state.
              </p>
            </div>
            <div className="setting-subrow">
              <span className="setting-label">Answer</span>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="states-quiz-answer-format"
                    value="typein"
                    checked={settings.answerFormat === 'typein'}
                    onChange={handleAnswerFormatChange}
                  />
                  <span>Type In</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="states-quiz-answer-format"
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

export default StatesQuizSettings
