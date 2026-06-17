// Per-route SEO metadata — the single source of truth for titles, descriptions,
// and canonical paths. Consumed by <Seo> on each route and mirrored in
// public/sitemap.xml. Paths carry a trailing slash to match what GitHub Pages
// serves for the nested-directory build output (e.g. /country-quiz/index.html),
// so canonical/og:url/sitemap all agree and ranking signals don't split.
export const SITE_URL = 'https://geo-quizzes.com'

export const ROUTE_META = {
  home: {
    path: '/',
    title: 'GeoGuessr Trainer — Free Country, Flag & Capital Quizzes',
    description:
      'Free, no-signup quizzes to practice country flags, world capitals, and states & provinces on the map. Built for GeoGuessr training.',
  },
  country: {
    path: '/country-quiz/',
    title: 'Country Flags & Map Quiz — Identify Every Country',
    description:
      'Practice identifying countries by their flag or their location on the world map. Free type-in or multiple-choice quiz covering every country.',
  },
  capital: {
    path: '/capital-quiz/',
    title: "World Capitals Quiz — Name Any Country's Capital",
    description:
      'Test yourself on world capitals: name the capital of any country from its flag, name, or location on the map. Free and no signup.',
  },
  states: {
    path: '/states-quiz/',
    title: 'States & Provinces Map Quiz — US, Mexico, India & More',
    description:
      'Name the state or province highlighted on the map. Covers the US, Mexico, Canada, India, Indonesia, Nigeria and more. Free map quiz.',
  },
  stateCapital: {
    path: '/state-capital-quiz/',
    title: 'State & Province Capitals Quiz — Name Each Capital',
    description:
      'Name the capital of each US state (and other countries’ provinces) from the state name or its location on the map. Free state capitals quiz.',
  },
}
