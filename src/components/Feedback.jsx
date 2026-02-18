function Feedback({ message, isCorrect }) {
  if (!message) return null
  
  return (
    <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
      {message}
    </div>
  )
}

export default Feedback

