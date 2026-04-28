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

## Git & PRs

This is a personal project. **All git activity here must use the personal GitHub identity, not the work one.**

- Identity: `ryanvpham <ryanvpham94@gmail.com>`. The local `git config user.email` may be the work identity — don't change it. Instead, set both author and committer per-commit:
  ```
  GIT_COMMITTER_NAME="ryanvpham" GIT_COMMITTER_EMAIL="ryanvpham94@gmail.com" \
    git commit --author="ryanvpham <ryanvpham94@gmail.com>" -m "..."
  ```
  Setting only `--author` leaves the committer as the work identity, which still surfaces on GitHub.
- Remote `origin` is `github.com/ryanvpham/geoguessr_trainer` (personal). Push directly there.
- Open PRs against `main` in that repo. After `git push -u origin <branch>`, surface the PR creation URL from the push output for the user to click.

### Workflow conventions

- **Always sync with origin/main before creating a branch.** Run `git fetch origin && git checkout -b <branch> origin/main` so the new branch starts at the latest merged state — not whatever local main happened to be. Skipping this leads to PRs that conflict with already-merged work or accidentally revert it.
- **At commit/PR time, update this file with anything worth remembering.** If you discovered a non-obvious data source, hit a tooling gotcha, fixed an invariant, or learned something a future session would need to know cold, add it to the relevant section here. Keep entries terse — a sentence with the *why*, not a changelog. Stale facts (paths, code locations, supported sets) should be corrected as part of the same PR.

## Deployment

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`. **The workflow currently pins `BASE_PATH=/`** because the site lives at the custom domain `geo-quizzes.com` (see `public/CNAME`). If you ever revert to `username.github.io/geoguessr_trainer/`, change `BASE_PATH` back to `/${{ github.event.repository.name }}/`. Pages *Source* must be set to **GitHub Actions** in repo settings.

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
- `getAvailableStates(countryCode)` — filters `allStates` by parent country. Supported parents are listed in `STATES_COUNTRIES` (`src/data/states.js`); a matching `GEO_URLS` entry must exist in `StatesMap.jsx` for the country to render.

### Map rendering

`WorldMap.jsx` is a generic d3-geo SVG renderer with pan/zoom/pinch and smooth auto-zoom to a target feature. It does **not** do fuzzy name matching:
- Country Quiz matches by **ISO-3166 numeric code** (`isoNumericMapping.js`), not by name. The world-atlas TopoJSON uses numeric IDs.
- States Quiz (`StatesMap.jsx`) matches by `feature.properties.name` against `state.name` + `state.aliases` (normalized for accents/case). **If a state fails to zoom, the most likely cause is a name mismatch between `src/data/states.js` and the GeoJSON source** — add the GeoJSON's exact name to `aliases`. Example: Canada's GeoJSON calls it `"Yukon Territory"`, not `"Yukon"`.

`StatesMap` also sanitizes problematic polygons in the PublicaMundi US GeoJSON (Alaska's out-of-range Aleutian polygon; Virginia's zero-area polygon) to prevent Mercator from painting extreme coordinates across the whole map.

**GeoJSON sources**: most countries pull from `click_that_hood` via jsDelivr. Some countries are self-hosted under `public/data/`:
- **Argentina** (`argentina-provinces.geojson`) — extracted from Natural Earth 10m admin-1 because click_that_hood doesn't ship Argentina. The global Natural Earth file is 60 MB, way over jsDelivr's 20 MB limit, so per-country self-hosting is the only viable path.
- **Philippines** (`philippines-regions.geojson`) — Natural Earth gives 118 *provinces*; the quiz uses the 17 *regions* (matches how Filipinos identify location and how GeoGuessr-relevant guesses work). The 17-feature file is built by grouping provinces by their `region` property and dissolving polygons with `shapely.ops.unary_union`. Run `make_valid` first — Natural Earth has a few self-intersecting polygons in PH that crash a naive union.

Use ``${import.meta.env.BASE_URL}data/...`` for self-hosted GeoJSON paths so they resolve correctly under both `/` and `/<repo>/` base paths.

### Answer validation

`src/utils/answerValidation.js` normalizes strings (lowercase, strip accents/punctuation/extra whitespace) before comparing. Every data record can carry an `aliases` array for alternate spellings (e.g. `"Québec"` → `"Quebec"`, `"PEI"` → `"Prince Edward Island"`). Prefer adding an alias over loosening the matcher.

### Legacy code

`script.js` at the repo root is the pre-React vanilla-JS version. It is **not** imported anywhere and should not be modified when fixing React-side bugs.

## Data conventions

- Countries: `src/data/countries.js` — ISO-3166 alpha-2 codes.
- States/provinces: `src/data/states.js` — ISO-3166-2 codes (`US-CA`, `CA-YT`, etc.), with `countryCode` for parent country.
- When adding a state/province, verify `name` matches the GeoJSON source used in `StatesMap.GEO_URLS`; if not, add the GeoJSON's spelling to `aliases`. The fastest sanity check is a tiny Python script that loads the GeoJSON, normalizes both sides (lowercase + strip accents), and asserts every `state.name`-or-alias resolves to a feature.
- When adding a new parent country to the States Quiz, three coordinated edits are required: append to `allStates` and `STATES_COUNTRIES` in `src/data/states.js`, and add a `GEO_URLS` entry in `src/components/StatesMap.jsx`. Missing any one leaves the country either unselectable, un-poolable, or unrenderable.
