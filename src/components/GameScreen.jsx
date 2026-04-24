import { useState, useEffect, useCallback } from 'react'
import { allCountries } from '../data/countries'
import { getAvailableCountries, getAvailableStates, generateMultiChoiceOptions } from '../utils/gameLogic'
import { normalizeString, checkCountryAnswer, checkCapitalAnswer, checkStateAnswer } from '../utils/answerValidation'
import QuestionDisplay from './QuestionDisplay'
import AnswerInput from './AnswerInput'
import Feedback from './Feedback'
import RoundSummary from './RoundSummary'

// Per-mode display strings used in round-complete and end-of-game messages.
// Keeps the feedback code below free of nested ternaries.
const ITEM_LABELS = {
  country: { singular: 'country', plural: 'countries' },
  capital: { singular: 'capital', plural: 'capitals' },
  states:  { singular: 'state',   plural: 'states'    },
}

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

  // Re-seed the pool whenever any input that shapes the pool changes.
  //   - country/capital modes: region selection + GeoGuessr filter
  //   - states mode:           selected country code (US/MX/CA)
  // Joining the region array to a string keeps the dep stable across rerenders.
  const regionKey = Array.isArray(settings.selectedRegions)
    ? settings.selectedRegions.slice().sort().join('|')
    : ''
  const selectedCountry = settings.selectedCountry || ''

  useEffect(() => {
    const availableCountries = gameMode === 'states'
      ? getAvailableStates(settings.selectedCountry)
      : getAvailableCountries(settings.geoguessrFilter, settings.selectedRegions)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameMode, settings.geoguessrFilter, regionKey, selectedCountry])

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

    // Round exhausted — let loadNewQuestion save the score and present the
    // correct next action (Start Next Round / Back to Menu). Advancing the
    // round here caused a double-advance when handleNext also called
    // startNextRound on click.
    if (availableCountries.length === 0) return null
    
    const randomIndex = Math.floor(Math.random() * availableCountries.length)
    const country = availableCountries[randomIndex]
    setUsedCountries(prev => [...prev, country.name])
    return country
  }, [countries, currentRound, incorrectCountries, usedCountries])

  // Start next round. Scoring is handled by loadNewQuestion when the previous
  // round ends — this function only advances round state and picks the first
  // question of the new round from the remaining incorrect items.
  const startNextRound = useCallback(() => {
    setCurrentRound(prev => prev + 1)
    setRoundCorrectCount(0)
    setRoundTotalSeen(0)

    const stillIncorrect = countries.filter(c => incorrectCountries.includes(c.name))
    if (stillIncorrect.length === 0) {
      setUsedCountries([])
      return null
    }

    const randomIndex = Math.floor(Math.random() * stillIncorrect.length)
    const country = stillIncorrect[randomIndex]
    setUsedCountries([country.name])
    return country
  }, [countries, incorrectCountries])

  // Load a new question
  const loadNewQuestion = useCallback(() => {
    const country = getRandomCountry()
    
    if (country === null) {
      // Single source of truth for round-score bookkeeping — fires on every
      // round boundary (final round or mid-game transition) and applies
      // uniformly to country, capital, and states modes.
      if (roundTotalSeen > 0) {
        setRoundScores(prev => [...prev, {
          round: currentRound,
          correct: roundCorrectCount,
          total: roundTotalSeen
        }])
      }
      
      // All rounds complete
      const labels = ITEM_LABELS[gameMode] || ITEM_LABELS.country
      if (incorrectCountries.length === 0) {
        setFeedback({
          message: `Perfect! You got all ${countries.length} ${labels.plural} correct!`,
          isCorrect: true
        })
      } else {
        const remainingCount = incorrectCountries.length
        const word = remainingCount !== 1 ? labels.plural : labels.singular
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
    } else if (gameMode === 'states') {
      // `currentCountry` is a state object here; reusing the same state slot
      // keeps the game loop generic across modes.
      isCorrect = checkStateAnswer(userAnswer, currentCountry)
      feedbackMessage = isCorrect
        ? `Correct! It's ${currentCountry.name}`
        : `Incorrect! The correct answer is: ${currentCountry.name}`
    } else {
      isCorrect = checkCapitalAnswer(userAnswer, currentCountry)
      feedbackMessage = isCorrect
        ? `Correct! The capital of ${currentCountry.name} is ${currentCountry.capital}`
        : `Incorrect! The capital of ${currentCountry.name} is: ${currentCountry.capital}`
    }
    
    // Compute post-answer state up front so we can detect "game over" without
    // waiting for the async setState cycle (and without needing a second click).
    const newIncorrectCountries = isCorrect
      ? incorrectCountries.filter(name => name !== currentCountry.name)
      : (incorrectCountries.includes(currentCountry.name)
          ? incorrectCountries
          : [...incorrectCountries, currentCountry.name])
    const newUsedCountries = [...usedCountries, currentCountry.name]
    const availableForRound = currentRound === 1
      ? countries
      : countries.filter(c => newIncorrectCountries.includes(c.name))
    const remainingInRound = availableForRound.filter(c => !newUsedCountries.includes(c.name))
    const gameOver = remainingInRound.length === 0 && newIncorrectCountries.length === 0

    // Update counts
    setTotalSeen(prev => prev + 1)
    setRoundTotalSeen(prev => prev + 1)

    if (isCorrect) {
      setCorrectCount(prev => prev + 1)
      setRoundCorrectCount(prev => prev + 1)
    }
    setIncorrectCountries(newIncorrectCountries)

    if (gameOver) {
      // Skip the intermediate "Next Question" screen — write the final round's
      // score and jump straight to the summary + Back to Menu.
      const finalRoundCorrect = roundCorrectCount + (isCorrect ? 1 : 0)
      const finalRoundTotal = roundTotalSeen + 1
      setRoundScores(prev => [...prev, {
        round: currentRound,
        correct: finalRoundCorrect,
        total: finalRoundTotal,
      }])
      const labels = ITEM_LABELS[gameMode] || ITEM_LABELS.country
      setFeedback({
        message: `Perfect! You got all ${countries.length} ${labels.plural} correct!`,
        isCorrect: true,
      })
      setShowNext(true)
      setNextButtonText('Back to Menu')
      setCurrentCountry(null)
      setIsAnswered(true)
      // Suppress the Enter keypress that submitted this answer — otherwise it
      // bubbles to the document listener and immediately "clicks" Back to Menu.
      setJustSubmitted(true)
      setTimeout(() => setJustSubmitted(false), 100)
      return
    }

    setFeedback({ message: feedbackMessage, isCorrect })
    setShowNext(true)
    setIsAnswered(true)
    
    // Set flag to prevent immediate next trigger
    setJustSubmitted(true)
    setTimeout(() => {
      setJustSubmitted(false)
    }, 100)
  }, [gameMode, currentCountry, isAnswered, incorrectCountries, usedCountries, countries, currentRound, roundCorrectCount, roundTotalSeen])

  // Handle next button click
  const handleNext = useCallback(() => {
    if (nextButtonText === 'Start Next Round') {
      const country = startNextRound()
      if (country === null) {
        const labels = ITEM_LABELS[gameMode] || ITEM_LABELS.country
        setFeedback({
          message: `Perfect! You've mastered all ${labels.plural}!`,
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

  const gameTitle =
    gameMode === 'country' ? 'Country Quiz'
    : gameMode === 'states' ? 'States Quiz'
    : 'Capital Quiz'
  const percentage = totalSeen > 0 ? Math.round((correctCount / totalSeen) * 100) : 0
  // For country + states modes the answer is the item's name; for the capital
  // quiz it's the capital field. Drives AnswerInput's multi-choice options.
  const correctAnswer = currentCountry
    ? (gameMode === 'capital' ? currentCountry.capital : currentCountry.name)
    : ''

  // Show round summary only when game is complete
  const showRoundSummary = incorrectCountries.length === 0 && roundScores.length > 0

  // Round progress — for round 1 it's (seen / total); for later rounds
  // (seen this round / incorrect from previous). Fall back to 0 if none.
  const roundTotal =
    currentRound === 1 ? countries.length : incorrectCountries.length + roundTotalSeen
  const progressPct = roundTotal > 0
    ? Math.min(100, Math.round((roundTotalSeen / roundTotal) * 100))
    : 0

  return (
    <div className="screen">
      <header className="game-header">
        <button className="back-arrow-btn" onClick={onBack} aria-label="Back to menu">←</button>
        <h1 id="game-title">{gameTitle}</h1>
        <div className="score-badge" aria-label={`Score ${correctCount} of ${totalSeen}, ${percentage}%`}>
          <span>Round <span className="round-num">{currentRound}</span></span>
          <span className="dot" aria-hidden="true"></span>
          <span id="score-display">{correctCount}/{totalSeen} · {percentage}%</span>
        </div>
      </header>

      <div className="round-progress" aria-hidden="true">
        <div
          className="round-progress-fill"
          style={{ width: `${progressPct}%` }}
        />
      </div>

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

