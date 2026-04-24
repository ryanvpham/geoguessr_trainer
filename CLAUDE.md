# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # first-time setup
npm run dev          # local dev server (Vite, usually http://localhost:5173)
npm run build        # production build; base path = /geoguessr_trainer/
npm run build:root   # production build; base path = / (for custom domains)
npm run preview      # preview the built dist/ locally
```

There is no test runner and no linter configured. Don't invent commands for them.

## Deployment

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`. The workflow sets `BASE_PATH=/<repo-name>/` automatically. Pages *Source* must be set to **GitHub Actions** in repo settings.

## Architecture

### Three quiz modes, one game loop

`src/components/GameScreen.jsx` is the shared game loop for **all** three modes (`country`, `capital`, `states`). `App.jsx` picks settings + mode; `GameScreen` renders questions, handles answers, tracks rounds, and shows the summary. When touching round/scoring logic, the change applies to every mode — don't fork per-mode copies.

Key invariants in `GameScreen`:
- **`loadNewQuestion` is the single source of truth for saving round scores.** It appends to `roundScores` whenever `getRandomCountry()` returns `null` (round exhausted). `startNextRound` only advances round state — it must not push to `roundScores`, or you'll get duplicate/skipped rounds.
- The **final correct answer auto-advances** to the summary (no extra click). This is detected inline in `handleAnswer` by computing the post-answer pool; when it's empty and no incorrect items remain, the summary is rendered directly. The function must also set `justSubmitted=true` on this path, otherwise the bubbled Enter keypress triggers the document-level listener and immediately clicks *Back to Menu*.
- Round 1 asks every item in the pool; subsequent rounds only re-quiz items still in `incorrectCountries`.

### Pool generation

`src/utils/gameLogic.js`:
- `getAvailableCountries(geoguessrFilter, selectedRegions)` — intersects the GeoGuessr allowlist with region filters. Empty `selectedRegions` means "all regions" (never return an empty pool — the game loop assumes non-empty).
- `getAvailableStates(countryCode)` — filters `allStates` to `'US' | 'MX' | 'CA'`.

### Map rendering

`WorldMap.jsx` is a generic d3-geo SVG renderer with pan/zoom/pinch and smooth auto-zoom to a target feature. It does **not** do fuzzy name matching:
- Country Quiz matches by **ISO-3166 numeric code** (`isoNumericMapping.js`), not by name. The world-atlas TopoJSON uses numeric IDs.
- States Quiz (`StatesMap.jsx`) matches by `feature.properties.name` against `state.name` + `state.aliases` (normalized for accents/case). **If a state fails to zoom, the most likely cause is a name mismatch between `src/data/states.js` and the GeoJSON source** — add the GeoJSON's exact name to `aliases`. Example: Canada's GeoJSON calls it `"Yukon Territory"`, not `"Yukon"`.

`StatesMap` also sanitizes problematic polygons in the PublicaMundi US GeoJSON (Alaska's out-of-range Aleutian polygon; Virginia's zero-area polygon) to prevent Mercator from painting extreme coordinates across the whole map.

### Answer validation

`src/utils/answerValidation.js` normalizes strings (lowercase, strip accents/punctuation/extra whitespace) before comparing. Every data record can carry an `aliases` array for alternate spellings (e.g. `"Québec"` → `"Quebec"`, `"PEI"` → `"Prince Edward Island"`). Prefer adding an alias over loosening the matcher.

### Legacy code

`script.js` at the repo root is the pre-React vanilla-JS version. It is **not** imported anywhere and should not be modified when fixing React-side bugs.

## Data conventions

- Countries: `src/data/countries.js` — ISO-3166 alpha-2 codes.
- States/provinces: `src/data/states.js` — ISO-3166-2 codes (`US-CA`, `CA-YT`, etc.), with `countryCode` for parent country.
- When adding a state/province, verify `name` matches the GeoJSON source used in `StatesMap.GEO_URLS`; if not, add the GeoJSON's spelling to `aliases`.
