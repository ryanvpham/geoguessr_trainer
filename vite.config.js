import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages under https://<user>.github.io/<repo>/ the `base` must
// match the repo name. Override with BASE_PATH env var (e.g. "/" when using
// a custom domain or a user/organization root site).
//
//   BASE_PATH=/        → https://example.com/
//   BASE_PATH=/my/     → https://example.com/my/
//   (unset)            → /geoguessr_trainer/ (default GitHub Pages repo path)
const base = process.env.BASE_PATH || '/geoguessr_trainer/'

export default defineConfig({
  plugins: [react()],
  base,
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})
