import MenuScreen from '../components/MenuScreen'
import Seo from '../seo/Seo'
import { ROUTE_META } from '../seo/meta'

function MenuPage() {
  return (
    <>
      <Seo {...ROUTE_META.home} />
      <MenuScreen />
    </>
  )
}

export default MenuPage
