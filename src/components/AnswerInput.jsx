import { useState, useRef, useEffect, useMemo } from 'react'
import { generateMultiChoiceOptions } from '../utils/gameLogic'

function AnswerInput({ answerFormat, onSubmit, disabled, correctAnswer, countries, isCapital }) {
  const [answer, setAnswer] = useState('')
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    // Focus input when a new question loads (when disabled becomes false or correctAnswer changes)
    if (!disabled && answerFormat === 'typein' && inputRef.current) {
      // Use setTimeout to ensure the input is ready to receive focus
      setTimeout(() => {
        inputRef.current?.focus()
      }, 0)
    }
  }, [disabled, answerFormat, correctAnswer])

  useEffect(() => {
    // Reset when disabled changes (new question loaded)
    if (!disabled) {
      setAnswer('')
      setSelectedAnswer(null)
      setIsAnswered(false)
    }
  }, [disabled])

  const handleSubmit = () => {
    if (disabled || isAnswered) return
    
    if (answerFormat === 'typein') {
      onSubmit(answer.trim())
      setIsAnswered(true)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !disabled && !isAnswered) {
      handleSubmit()
    }
  }

  const handleMultiChoiceClick = (option) => {
    if (disabled || isAnswered) return
    
    setSelectedAnswer(option)
    setIsAnswered(true)
    onSubmit(option)
  }

  if (answerFormat === 'typein') {
    return (
      <div className="input-container">
        <input
          ref={inputRef}
          type="text"
          id="answer-input"
          placeholder="Enter answer..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={disabled || isAnswered}
          autoComplete="off"
        />
        {!isAnswered && (
          <button id="submit-btn" onClick={handleSubmit} disabled={disabled || isAnswered}>
            Submit
          </button>
        )}
      </div>
    )
  } else {
    // Multi-choice
    const options = useMemo(() => {
      if (!correctAnswer || !countries) return []
      return generateMultiChoiceOptions(correctAnswer, countries, isCapital)
    }, [correctAnswer, countries, isCapital])
    
    return (
      <div className="multichoice-container">
        <div className="multichoice-options">
          {options.map((option, index) => {
            const isSelected = selectedAnswer === option
            const isCorrect = option === correctAnswer
            let className = 'multichoice-btn'
            
            if (isAnswered) {
              if (isSelected && isCorrect) {
                className += ' correct'
              } else if (isSelected && !isCorrect) {
                className += ' incorrect'
              } else if (!isSelected && isCorrect) {
                className += ' correct'
              }
            }
            
            return (
              <button
                key={index}
                className={className}
                onClick={() => handleMultiChoiceClick(option)}
                disabled={disabled || isAnswered}
              >
                {option}
              </button>
            )
          })}
        </div>
      </div>
    )
  }
}

export default AnswerInput

