import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
      tempore sunt, eius dolorem necessitatibus fuga placeat quia tenetur
      voluptas dicta. Vitae vel reprehenderit soluta perferendis? Debitis eaque
      natus eos odio.
    </Descricao>
  </Card>
)

export default Product
