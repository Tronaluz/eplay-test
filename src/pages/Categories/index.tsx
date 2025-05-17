import ProductsList from '../../components/ProductsList'
import resident from '../../assets/images/ResidentEvil.png'
import diablo from '../../assets/images/Diablo.png'
import starwars from '../../assets/images/StarWars.png'
import zelda from '../../assets/images/zelda.png'
import { Game } from '../Home'

const promocoes: Game[] = []

const emBreve: Game[] = []

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="Acao" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
