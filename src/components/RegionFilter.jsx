import { REGIONS, REGION_IDS, countryToRegion } from '../data/regionMapping'
import { allCountries } from '../data/countries'
import { geoguessrCountries } from '../data/geoguessrCountries'
import { useMemo } from 'react'

// Pre-compute count per region once per filter combo so we can tell the user
// "Asia (34)" etc. Reflects the GeoGuessr filter if it's on — numbers should
// match the actual quiz pool.
function computeRegionCounts(geoguessrFilter) {
  const nameMap = {
    Czechia: 'Czech Republic',
    Lichtenstein: 'Liechtenstein',
  }

  let pool = allCountries
  if (geoguessrFilter) {
    pool = allCountries.filter((country) => {
      const countryName = country.name
      const aliases = country.aliases || []
      return geoguessrCountries.some((ggName) => {
        const mappedName = nameMap[ggName] || ggName
        return (
          countryName === mappedName ||
          countryName === ggName ||
          aliases.some((alias) => alias === ggName || alias === mappedName)
        )
      })
    })
  }

  const counts = Object.fromEntries(REGION_IDS.map((id) => [id, 0]))
  for (const country of pool) {
    const r = countryToRegion[country.code]
    if (r && counts[r] !== undefined) counts[r] += 1
  }
  return counts
}

function RegionFilter({ selectedRegions, onChange, geoguessrFilter }) {
  const counts = useMemo(
    () => computeRegionCounts(geoguessrFilter),
    [geoguessrFilter]
  )

  const allSelected = selectedRegions.length === REGION_IDS.length
  const noneSelected = selectedRegions.length === 0

  const toggleRegion = (id) => {
    if (selectedRegions.includes(id)) {
      onChange(selectedRegions.filter((r) => r !== id))
    } else {
      onChange([...selectedRegions, id])
    }
  }

  const selectAll = () => onChange([...REGION_IDS])
  const selectNone = () => onChange([])

  return (
    <div className="region-filter">
      <div className="region-filter-header">
        <label className="setting-label">Regions</label>
        <div className="region-filter-actions">
          <button
            type="button"
            className="region-link-btn"
            onClick={selectAll}
            disabled={allSelected}
          >
            All
          </button>
          <span aria-hidden="true" className="region-link-sep">·</span>
          <button
            type="button"
            className="region-link-btn"
            onClick={selectNone}
            disabled={noneSelected}
          >
            None
          </button>
        </div>
      </div>
      <p className="setting-description">
        Pick which parts of the world to practice. Unchecking everything
        defaults to all regions.
      </p>
      <div className="region-grid">
        {[...REGIONS].sort((a, b) => a.label.localeCompare(b.label)).map((region) => {
          const isChecked = selectedRegions.includes(region.id)
          const count = counts[region.id] ?? 0
          return (
            <label
              key={region.id}
              className={`region-chip${isChecked ? ' is-checked' : ''}`}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => toggleRegion(region.id)}
              />
              <span className="region-chip-label">{region.label}</span>
              <span className="region-chip-count">{count}</span>
            </label>
          )
        })}
      </div>
    </div>
  )
}

export default RegionFilter
