import { useState, useEffect, useCallback } from 'react'
import { allCountries } from '../data/countries'
import { getAvailableCountries, generateMultiChoiceOptions } from '../utils/gameLogic'
import { normalizeString, checkCountryAnswer, checkCapitalAnswer } from '../utils/answerValidation'
import QuestionDisplay from './QuestionDisplay'
import AnswerInput from './AnswerInput'
import Feedback from './Feedback'
import RoundSummary from './RoundSummary'

function GameScreen({ gameMode, settings, onBack }) {
  const [countries, setCountries] = useState([])
  const [currentCountry, setCurrentCountry] = useState(null)
  const [correctCount, setCorrectCount] = useState(0)
  const [totalSeen, setTotalSeen] = useState(0)
  const [usedCountries, setUsedCountries] = useState([])
  const [incorrectCountries, setIncorrectCountries] = useState([])
  const [currentRound, setCurrentRound] = useState(1)
  const [roundCorrectCount, setRoundCorrectCount] = useState(0)
  const [roundTotalSeen, setRoundTotalSeen] = useState(0)
  const [roundScores, setRoundScores] = useState([])
  const [feedback, setFeedback] = useState({ message: '', isCorrect: null })
  const [showNext, setShowNext] = useState(false)
  const [nextButtonText, setNextButtonText] = useState('Next Question')
  const [isAnswered, setIsAnswered] = useState(false)
  const [justSubmitted, setJustSubmitted] = useState(false)

  // Initialize countries when component mounts or settings change
  useEffect(() => {
    const availableCountries = getAvailableCountries(settings.geoguessrFilter)
    setCountries(availableCountries)
    setCurrentCountry(null)
    setCorrectCount(0)
    setTotalSeen(0)
    setUsedCountries([])
    setIncorrectCountries([])
    setCurrentRound(1)
    setRoundCorrectCount(0)
    setRoundTotalSeen(0)
    setRoundScores([])
    setFeedback({ message: '', isCorrect: null })
    setShowNext(false)
    setNextButtonText('Next Question')
    setIsAnswered(false)
  }, [settings.geoguessrFilter])

  // Load first question when countries are ready
  useEffect(() => {
    if (countries.length > 0 && !currentCountry) {
      loadNewQuestion()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries])

  // Get random country for current round
  const getRandomCountry = useCallback(() => {
    let availableForRound
    
    if (currentRound === 1) {
      // First round: all countries
      availableForRound = countries
    } else {
      // Subsequent rounds: only incorrect countries from previous rounds
      availableForRound = countries.filter(c => incorrectCountries.includes(c.name))
    }
    
    // Filter out countries already used in this round
    let availableCountries = availableForRound.filter(c => !usedCountries.includes(c.name))
    
    if (availableCountries.length === 0) {
      // Round complete - check if we should start next round
      if (currentRound === 1 && incorrectCountries.length > 0) {
        // Start round 2 with incorrect countries
        startNextRound()
        return null
      } else if (currentRound > 1) {
        // Check if there are still incorrect countries to practice
        const stillIncorrect = countries.filter(c => incorrectCountries.includes(c.name))
        if (stillIncorrect.length > 0) {
          startNextRound()
          return null
        }
      }
      // All rounds complete
      return null
    }
    
    const randomIndex = Math.floor(Math.random() * availableCountries.length)
    const country = availableCountries[randomIndex]
    setUsedCountries(prev => [...prev, country.name])
    return country
  }, [countries, currentRound, incorrectCountries, usedCountries])

  // Start next round
  const startNextRound = useCallback(() => {
    // Save current round score before starting next round
    if (roundTotalSeen > 0) {
      setRoundScores(prev => [...prev, {
        round: currentRound,
        correct: roundCorrectCount,
        total: roundTotalSeen
      }])
    }
    
    setCurrentRound(prev => prev + 1)
    setUsedCountries([]) // Reset used countries for new round
    setRoundCorrectCount(0)
    setRoundTotalSeen(0)
    
    // Filter incorrect countries to only those that are still incorrect
    const stillIncorrect = countries.filter(c => incorrectCountries.includes(c.name))
    
    if (stillIncorrect.length === 0) {
      return null // No more incorrect countries to practice
    }
    
    // Get a random country from remaining incorrect ones
    const randomIndex = Math.floor(Math.random() * stillIncorrect.length)
    const country = stillIncorrect[randomIndex]
    setUsedCountries([country.name])
    return country
  }, [countries, currentRound, incorrectCountries, roundCorrectCount, roundTotalSeen])

  // Load a new question
  const loadNewQuestion = useCallback(() => {
    const country = getRandomCountry()
    
    if (country === null) {
      // Round complete - save the round score
      if (roundTotalSeen > 0) {
        setRoundScores(prev => [...prev, {
          round: currentRound,
          correct: roundCorrectCount,
          total: roundTotalSeen
        }])
      }
      
      // All rounds complete
      if (incorrectCountries.length === 0) {
        setFeedback({
          message: `Perfect! You got all ${countries.length} ${gameMode === 'country' ? 'countries' : 'capitals'} correct!`,
          isCorrect: true
        })
      } else {
        const remainingCount = incorrectCountries.length
        const word = gameMode === 'country' 
          ? (remainingCount !== 1 ? 'countries' : 'country')
          : (remainingCount !== 1 ? 'capitals' : 'capital')
        setFeedback({
          message: `Round ${currentRound} complete! You have ${remainingCount} ${word} to practice. Click Next to continue.`,
          isCorrect: true
        })
      }
      setShowNext(true)
      setNextButtonText(incorrectCountries.length > 0 ? 'Start Next Round' : 'Back to Menu')
      setCurrentCountry(null)
      setIsAnswered(true)
      return
    }
    
    setCurrentCountry(country)
    setFeedback({ message: '', isCorrect: null })
    setShowNext(false)
    setNextButtonText('Next Question')
    setIsAnswered(false)
  }, [getRandomCountry, countries, gameMode, currentRound, roundCorrectCount, roundTotalSeen, incorrectCountries])

  // Handle answer submission
  const handleAnswer = useCallback((userAnswer) => {
    if (isAnswered || !currentCountry) return
    
    let isCorrect
    let feedbackMessage
    
    if (gameMode === 'country') {
      isCorrect = checkCountryAnswer(userAnswer, currentCountry)
      feedbackMessage = isCorrect 
        ? `Correct! It's ${currentCountry.name}`
        : `Incorrect! The correct answer is: ${currentCountry.name}`
    } else {
      isCorrect = checkCapitalAnswer(userAnswer, currentCountry)
      feedbackMessage = isCorrect
        ? `Correct! The capital of ${currentCountry.name} is ${currentCountry.capital}`
        : `Incorrect! The capital of ${currentCountry.name} is: ${currentCountry.capital}`
    }
    
    // Update counts
    setTotalSeen(prev => prev + 1)
    setRoundTotalSeen(prev => prev + 1)
    
    if (isCorrect) {
      setCorrectCount(prev => prev + 1)
      setRoundCorrectCount(prev => prev + 1)
      
      // Remove from incorrect list if it was there
      setIncorrectCountries(prev => prev.filter(name => name !== currentCountry.name))
    } else {
      // Wrong answer - add to incorrect list if not already there
      setIncorrectCountries(prev => {
        if (!prev.includes(currentCountry.name)) {
          return [...prev, currentCountry.name]
        }
        return prev
      })
    }
    
    setFeedback({ message: feedbackMessage, isCorrect })
    setShowNext(true)
    setIsAnswered(true)
    
    // Set flag to prevent immediate next trigger
    setJustSubmitted(true)
    setTimeout(() => {
      setJustSubmitted(false)
    }, 100)
  }, [gameMode, currentCountry, isAnswered])

  // Handle next button click
  const handleNext = useCallback(() => {
    if (nextButtonText === 'Start Next Round') {
      const country = startNextRound()
      if (country === null) {
        setFeedback({
          message: `Perfect! You've mastered all ${gameMode === 'country' ? 'countries' : 'capitals'}!`,
          isCorrect: true
        })
        setNextButtonText('Back to Menu')
        setCurrentCountry(null)
        return
      }
      setCurrentCountry(country)
      setFeedback({ message: '', isCorrect: null })
      setShowNext(false)
      setNextButtonText('Next Question')
      setIsAnswered(false)
    } else if (nextButtonText === 'Back to Menu') {
      onBack()
    } else {
      loadNewQuestion()
    }
  }, [nextButtonText, startNextRound, gameMode, loadNewQuestion, onBack])

  // Handle Enter key for next button
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter' && showNext && isAnswered && !justSubmitted) {
        e.preventDefault()
        handleNext()
      }
    }
    
    document.addEventListener('keypress', handleKeyPress)
    return () => document.removeEventListener('keypress', handleKeyPress)
  }, [showNext, isAnswered, justSubmitted, handleNext])

  const gameTitle = gameMode === 'country' ? '🌍 Country Quiz' : '🏛️ Capital Quiz'
  const percentage = totalSeen > 0 ? Math.round((correctCount / totalSeen) * 100) : 0
  const correctAnswer = currentCountry 
    ? (gameMode === 'country' ? currentCountry.name : currentCountry.capital)
    : ''

  // Show round summary only when game is complete
  const showRoundSummary = incorrectCountries.length === 0 && roundScores.length > 0

  return (
    <div className="screen">
      <header>
        <button className="back-arrow-btn" onClick={onBack}>←</button>
        <h1 id="game-title">{gameTitle}</h1>
        <div className="score">
          <span>Round: <span>{currentRound}</span></span>
          <span id="score-display">{correctCount} / {totalSeen} ({percentage}%)</span>
        </div>
      </header>
      
      <main>
        {showRoundSummary && <RoundSummary roundScores={roundScores} />}
        
        {currentCountry && (
          <div className="question-container">
            <QuestionDisplay
              questionFormat={settings.questionFormat}
              country={currentCountry}
              gameMode={gameMode}
            />
          </div>
        )}
        
        <Feedback message={feedback.message} isCorrect={feedback.isCorrect} />
        
        {currentCountry && (
          <AnswerInput
            answerFormat={settings.answerFormat}
            onSubmit={handleAnswer}
            disabled={isAnswered}
            correctAnswer={correctAnswer}
            countries={countries}
            isCapital={gameMode === 'capital'}
          />
        )}
        
        {showNext && (
          <button className="next-btn" onClick={handleNext}>
            {nextButtonText}
          </button>
        )}
      </main>
    </div>
  )
}

export default GameScreen

