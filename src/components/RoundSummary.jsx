function RoundSummary({ roundScores }) {
  if (!roundScores || roundScores.length === 0) return null
  
  return (
    <div className="round-summary">
      <h3>Round Summary</h3>
      <div className="round-summary-content">
        {roundScores.map((score, index) => {
          const percentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0
          return (
            <div key={index} className="round-summary-item">
              <span className="round-label">Round {index + 1}:</span>
              <span className="round-score">{score.correct} / {score.total} ({percentage}%)</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RoundSummary

