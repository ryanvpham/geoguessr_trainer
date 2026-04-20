import FlagDisplay from './FlagDisplay'
import CountryNameDisplay from './CountryNameDisplay'
import WorldMap from './WorldMap'
import { getCapitalCoords } from '../data/capitalCoordinates'

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
    } else if (questionFormat === 'map') {
      return (
        <WorldMap
          highlightedCountryCode={country.code}
          capitalCoords={getCapitalCoords(country.code)}
        />
      )
    }
  }

  return null
}

export default QuestionDisplay

