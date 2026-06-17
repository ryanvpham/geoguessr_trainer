# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # first-time setup
npm run dev          # local dev server (Vite, usually http://localhost:5173; set PORT to override — the user often has their own instance holding 5173)
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
- **Fetch at session start, not just at branch time.** Sessions often begin with an old feature branch checked out (this file may not even exist in that tree). Before any new work, `git fetch --all --prune` and check how far the checkout lags `origin/main` — a fix written against a stale tree has to be re-ported later (this happened with the June 2026 map-lag fix, originally built on a branch 9 commits behind).
- **At commit/PR time, update this file with anything worth remembering.** If you discovered a non-obvious data source, hit a tooling gotcha, fixed an invariant, or learned something a future session would need to know cold, add it to the relevant section here. Keep entries terse — a sentence with the *why*, not a changelog. Stale facts (paths, code locations, supported sets) should be corrected as part of the same PR.

## Deployment

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`. **The workflow currently pins `BASE_PATH=/`** because the site lives at the custom domain `geo-quizzes.com` (see `public/CNAME`). If you ever revert to `username.github.io/geoguessr_trainer/`, change `BASE_PATH` back to `/${{ github.event.repository.name }}/`. Pages *Source* must be set to **GitHub Actions** in repo settings.

## Architecture

### Quiz modes, one game loop

`src/components/GameScreen.jsx` is the shared game loop for **all** modes:
- `country` — name a country (flag/map/capital prompt).
- `capital` — name a country's capital (flag/name/map prompt).
- `states` — name a state or province highlighted on the country map.
- `stateCapital` — name a state's capital from either the state name or a map with the capital starred. The country dropdown is the same set as the States Quiz's (`CountrySelector`'s default) — every record in `allStates` carries `capital` + `capitalCoords`, so a new States Quiz country is automatically quizzable here too. To narrow it again, pass a filtered `countries` list to `CountrySelector` in `StateCapitalQuizSettings.jsx`.

`App.jsx` picks settings + mode; `GameScreen` renders questions, handles answers, tracks rounds, and shows the summary. Per-mode display strings (header title + singular/plural item word) live in the `MODE_INFO` lookup at the top of `GameScreen.jsx` — adding a mode means adding an entry there. When touching round/scoring logic, the change applies to every mode — don't fork per-mode copies.

`stateCapital` reuses the States Quiz pool (`getAvailableStates`) but the answer is the state's `capital` field, so its branch in `GameScreen.handleAnswer` falls through to the same `else` block as `capital` mode — they share the validator and feedback strings.

Key invariants in `GameScreen`:
- **`loadNewQuestion` is the single source of truth for saving round scores.** It appends to `roundScores` whenever `getRandomCountry()` returns `null` (round exhausted). `startNextRound` only advances round state — it must not push to `roundScores`, or you'll get duplicate/skipped rounds.
- The **final correct answer auto-advances** to the summary (no extra click). This is detected inline in `handleAnswer` by computing the post-answer pool; when it's empty and no incorrect items remain, the summary is rendered directly. The function must also set `justSubmitted=true` on this path, otherwise the bubbled Enter keypress triggers the document-level listener and immediately clicks *Back to Menu*.
- Round 1 asks every item in the pool; subsequent rounds only re-quiz items still in `incorrectCountries`.

### Pool generation

`src/utils/gameLogic.js`:
- `getAvailableCountries(geoguessrFilter, selectedRegions)` — intersects the GeoGuessr allowlist with region filters. Empty `selectedRegions` means "all regions" (never return an empty pool — the game loop assumes non-empty).
- `getAvailableStates(countryCode)` — filters `allStates` by parent country. Supported parents are listed in `STATES_COUNTRIES` (`src/data/states.js`); a matching `GEO_URLS` entry must exist in `StatesMap.jsx` for the country to render.

### Map rendering

`WorldMap.jsx` is a generic d3-geo SVG renderer with pan/zoom/pinch and smooth auto-zoom to a target feature.

**Rendering is project-once + transform — don't reintroduce per-frame reprojection.** Feature paths are projected a single time per feature set against the fixed module-level `BASE_PROJECTION`; pan/zoom/animation only updates an SVG `transform` on the countries `<g>`. Mercator is conformal, so this is pixel-identical to re-projecting, and it's the difference between ~9 fps and ~120 fps during auto-zoom (a `geoPath(projection)` call over all features inside the render path is the regression to watch for in review). Two invariants keep it correct:
- `buildProjection` is a pure module-scope function and the **only** place the scale/center math lives. The view transform is derived from the base and current projection objects' `.scale()`/`.center()` — never hand-code the span ratio or duplicate the formula.
- The highlighted feature is drawn as a separate overlay `<path>` (`highlightedPathDs`), so target changes never touch the memoized base-layer JSX (`baseCountryPaths`). Recoloring base paths in place would re-render all ~250 nodes.

It does **not** do fuzzy name matching:
- Country Quiz matches by **ISO-3166 numeric code** (`isoNumericMapping.js`), not by name. The world-atlas TopoJSON uses numeric IDs.
- States Quiz (`StatesMap.jsx`) matches by `feature.properties.name` against `state.name` + `state.aliases` (normalized for accents/case). **If a state fails to zoom, the most likely cause is a name mismatch between `src/data/states.js` and the GeoJSON source** — add the GeoJSON's exact name to `aliases`. Example: Canada's GeoJSON calls it `"Yukon Territory"`, not `"Yukon"`.

`StatesMap` also sanitizes problematic polygons in the PublicaMundi US GeoJSON (Alaska's out-of-range Aleutian polygon; Virginia's zero-area polygon) to prevent Mercator from painting extreme coordinates across the whole map.

**GeoJSON sources**: most countries pull from `click_that_hood` via jsDelivr (e.g. US, Canada, Brazil, Australia, **Malaysia**). Note click_that_hood files can be stale or incomplete: its Malaysia file omits Labuan (handled via canonical-name choices in `states.js`), and its India file was missing Arunachal Pradesh entirely with dated 2019/2020 boundaries and a crude Lakshadweep blob — which is why **India is now self-hosted from geoBoundaries** (see below). Some countries are self-hosted under `public/data/`:
- **Mexico** (`mexico-states.geojson`) — click_that_hood ships Mexico but at 9.4 MB / 250k points it's ~14× heavier than Canada's file. We host a Shapely-simplified version (`shape(...).simplify(0.005, preserve_topology=True)`, ~390 KB / 16.6k points) — visually indistinguishable at quiz zoom. (The original motivation — d3-geo reprojecting every point per frame during auto-zoom — was eliminated by the project-once + transform rendering above, but the smaller file is still worth keeping for download size and the one-time projection cost.) **Preserve `properties.name` exactly** when simplifying — the GeoJSON uses formal state names (e.g. `Coahuila de Zaragoza`, `Michoacán de Ocampo`, `Veracruz de Ignacio de la Llave`), and `findStateFeature` matches by name + aliases.
- **Argentina** (`argentina-provinces.geojson`) — extracted from Natural Earth 10m admin-1 because click_that_hood doesn't ship Argentina. The global Natural Earth file is 60 MB, way over jsDelivr's 20 MB limit, so per-country self-hosting is the only viable path.
- **Philippines** (`philippines-regions.geojson`) — Natural Earth gives 118 *provinces*; the quiz uses the 17 *regions* (matches how Filipinos identify location and how GeoGuessr-relevant guesses work). The 17-feature file is built by grouping provinces by their `region` property and dissolving polygons with `shapely.ops.unary_union`. Run `make_valid` first — Natural Earth has a few self-intersecting polygons in PH that crash a naive union.
- **India / Indonesia / Nigeria / South Africa** (`india-states.geojson`, `indonesia-provinces.geojson`, `nigeria-states.geojson`, `south-africa-provinces.geojson`) — sourced from **geoBoundaries** ADM1 (the `gbOpen` `_simplified` files, fetched per-country via `https://www.geoboundaries.org/api/current/gbOpen/<ISO3>/ADM1/`). geoBoundaries is the go-to fallback when click_that_hood lacks a country (Indonesia/Nigeria/South Africa) or ships a stale/incomplete one (India). Its ADM1 files are clean and current; India ADM1 is the full 36 (28 states + 8 UTs) with a faithful 22-atoll Lakshadweep. Three post-processing steps: (1) remap `properties.shapeName` → `properties.name` (the renderer matches on `name`); (2) re-simplify at `tol=0.005` for parity with the other hosted files; (3) **re-orient rings clockwise** (see winding note below). geoBoundaries labels carry diacritics (`Bihār`, `Gujarāt`, `Damān`); `normalizeString` strips them, so plain ASCII canonical names match without aliases. Other source quirks do need aliases — e.g. South Africa's file misspells `Northern Cape` as `Nothern Cape`.

**Ring winding — the silent killer for self-hosted GeoJSON.** d3-geo treats polygons as *spherical*, so winding order decides which side is "inside." This renderer needs **clockwise** outer rings; a counter-clockwise ring is read as its complement and d3 fills the *entire map* with the highlight color (you'll see a solid amber background with a tiny hole instead of a small highlighted shape). RFC 7946 / geoBoundaries / most "standard" GeoJSON use CCW outer rings, so they render inverted out of the box — but click_that_hood and the older self-hosted files (Mexico, Argentina, Philippines) happen to be CW, which is why they "just worked." When adding a self-hosted file, re-orient with Shapely `orient(poly, sign=-1.0)` (CW exterior, CW for each polygon of a MultiPolygon) and sanity-check the shoelace sign matches the existing files. Note this is **not** caught by the name/coords verification — only by actually rendering it.

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
