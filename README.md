# GeoGuessr Trainer

A free web app to practice countries, flags, and capitals — built with React + Vite.

Modes:

- **Country Quiz** — identify a country from its flag or its highlighted location on the world map.
- **Capital Quiz** — match a country (by flag or name) to its capital.

Both modes support type-in answers or multiple choice, and an optional filter to only quiz countries that appear in GeoGuessr.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Deploy free to GitHub Pages

This repo already includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and publishes automatically.

1. Push the repo to GitHub.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push (or merge) to `main`. The workflow builds and deploys to `https://<your-username>.github.io/<repo-name>/`.

The workflow sets `BASE_PATH=/<repo-name>/` automatically. If you use a **custom domain** or host it at the root of a user/org site, run the build with `BASE_PATH=/`:

```bash
npm run build:root
```

## Deploy free to Netlify or Cloudflare Pages

The project is a plain Vite static build, so any static host works. Connect the repo, set:

- **Build command:** `npm run build:root`
- **Publish directory:** `dist`

(Use `build:root` so the base path is `/` rather than `/geoguessr_trainer/`.)

## Project structure

```
src/
  components/     UI screens & widgets (MenuScreen, GameScreen, WorldMap, …)
  data/           Country list + GeoGuessr filter
  utils/          Answer validation, game logic, ISO code mapping
  main.jsx        React entry
  styles.css      All styles
```

The map is a lightweight native-D3 SVG renderer: it loads the world-atlas 110m TopoJSON once, matches countries by ISO-3166 numeric code (not fuzzy name matching), and smoothly zooms/pans to the target. A pulsing pin marker appears for tiny countries that would otherwise be invisible.
