import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'
import './styles.css'

// basename is derived from Vite's base so links resolve under both deploys:
//   BASE_PATH=/ (apex geo-quizzes.com) → '' → '/'
//   default /geoguessr_trainer/         → '/geoguessr_trainer'
const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

export const createRoot = ViteReactSSG({ routes, basename })
