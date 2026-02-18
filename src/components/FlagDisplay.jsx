function FlagDisplay({ country }) {
  return (
    <div className="flag-container">
      <img
        id="flag"
        src={`https://flagcdn.com/w320/${country.code.toLowerCase()}.png`}
        alt={`${country.name} flag`}
        onError={(e) => {
          e.target.src = `https://flagcdn.com/w320/${country.code.toLowerCase()}.svg`
          e.target.onerror = () => {
            e.target.style.display = 'none'
            console.warn(`Flag not available for ${country.name} (${country.code})`)
          }
        }}
      />
    </div>
  )
}

export default FlagDisplay

