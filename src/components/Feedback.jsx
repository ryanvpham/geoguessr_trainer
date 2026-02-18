function Feedback({ message, isCorrect }) {
  return (
    <div className={`feedback ${message ? (isCorrect ? 'correct' : 'incorrect') : ''}`}>
      {message}
    </div>
  )
}

export default Feedback

