import CountrySelector from './CountrySelector'

function StateCapitalQuizSettings({ settings, onSettingsChange, onBack, onStart }) {
  const handleCountryChange = (countryCode) => {
    onSettingsChange({ ...settings, selectedCountry: countryCode })
  }

  const handleAnswerFormatChange = (e) => {
    onSettingsChange({ ...settings, answerFormat: e.target.value })
  }

  const handleQuestionFormatChange = (e) => {
    onSettingsChange({ ...settings, questionFormat: e.target.value })
  }

  return (
    <div className="screen">
      <header>
        <button className="back-arrow-btn" onClick={onBack} aria-label="Back">←</button>
        <h1>State Capitals Quiz</h1>
      </header>
      <div className="settings-content">
        <div className="setting-item">
          <CountrySelector
            selectedCountry={settings.selectedCountry}
            onChange={handleCountryChange}
            description="Pick which country's state or province capitals to practice."
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
                    name="state-capital-quiz-question-format"
                    value="state"
                    checked={settings.questionFormat === 'state'}
                    onChange={handleQuestionFormatChange}
                  />
                  <span>State</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="state-capital-quiz-question-format"
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
                    name="state-capital-quiz-answer-format"
                    value="typein"
                    checked={settings.answerFormat === 'typein'}
                    onChange={handleAnswerFormatChange}
                  />
                  <span>Type In</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="state-capital-quiz-answer-format"
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

export default StateCapitalQuizSettings
