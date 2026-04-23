import { STATES_COUNTRIES, countStatesByCountry } from '../data/states'

// Single-select dropdown for the States Quiz. The option labels show the
// live subdivision count so the user can see the pool size before starting.
function CountrySelector({ selectedCountry, onChange }) {
  const counts = countStatesByCountry()

  return (
    <div className="country-selector">
      <div className="country-selector-head">
        <label className="setting-label" htmlFor="states-country-select">Country</label>
        <p className="setting-description">
          Pick which country's states or provinces to practice.
        </p>
      </div>
      <select
        id="states-country-select"
        className="country-select"
        value={selectedCountry}
        onChange={(e) => onChange(e.target.value)}
      >
        {STATES_COUNTRIES.map((c) => (
          <option key={c.code} value={c.code}>
            {c.label} ({counts[c.code] ?? 0})
          </option>
        ))}
      </select>
    </div>
  )
}

export default CountrySelector
