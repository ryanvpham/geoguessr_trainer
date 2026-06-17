import { Head } from 'vite-react-ssg'
import { SITE_URL } from './meta'

// Per-route <head>. Rendered on every page so each prerendered HTML file gets
// its own title/description/canonical/OG without a duplicate static <title> in
// index.html (vite-react-ssg injects helmet tags after <head> rather than
// replacing existing ones). The canonical/OG origin is always the production
// apex — never derived from import.meta.env.BASE_URL.
const DEFAULT_IMAGE = '/og-default.png'

function Seo({ title, description, path, image = DEFAULT_IMAGE }) {
  const url = `${SITE_URL}${path}`
  const img = `${SITE_URL}${image}`
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
    </Head>
  )
}

export default Seo
