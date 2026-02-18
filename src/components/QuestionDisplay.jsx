import FlagDisplay from './FlagDisplay'
import CountryNameDisplay from './CountryNameDisplay'
import WorldMap from './WorldMap'

function QuestionDisplay({ questionFormat, country, gameMode }) {
  if (gameMode === 'country') {
    if (questionFormat === 'flag') {
      return <FlagDisplay country={country} />
    } else if (questionFormat === 'map') {
      return <WorldMap highlightedCountryCode={country.code} />
    }
  } else {
    // Capital Quiz
    if (questionFormat === 'flag') {
      return <FlagDisplay country={country} />
    } else if (questionFormat === 'countryName') {
      return <CountryNameDisplay name={country.name} />
    }
  }
  
  return null
}

export default QuestionDisplay

