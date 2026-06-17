import App from './App'
import MenuPage from './screens/MenuPage'
import QuizPage from './screens/QuizPage'
import { QUIZ_MODES } from './quizModes'

// Route table consumed by vite-react-ssg (React Router v6 RouteObjects). Each
// path becomes a prerendered HTML file at build time (dirStyle: 'nested' →
// /country-quiz/index.html), then hydrates into the normal client SPA.
// <App> is the layout shell (<div class="container"> + <Outlet/>); the quiz
// routes are derived from the QUIZ_MODES registry so paths stay in one place.
export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <MenuPage /> },
      ...QUIZ_MODES.map((mode) => ({
        // ROUTE_META.path is the canonical, trailing-slash URL; the route uses
        // the bare slug (no leading/trailing slash).
        path: mode.meta.path.replace(/^\/+|\/+$/g, ''),
        element: <QuizPage mode={mode} />,
      })),
    ],
  },
]
