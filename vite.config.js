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
  server: {
    // Respect a harness/CI-assigned port (e.g. Claude Code preview) so the
    // dev server doesn't collide with another instance on the default 5173.
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})
