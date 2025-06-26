import { Container, SectionTitle, Links, Link, FooterSection } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link to="/categories#rpg">RPG</Link>
          </li>
          <li>
            <Link to="/categories#action">ACAO</Link>
          </li>
          <li>
            <Link to="/categories#adventure">AVENTURA</Link>
          </li>
          <li>
            <Link to="/categories#sports">ESPORTES</Link>
          </li>
          <li>
            <Link to="/categories#simulation">SIMULACAO</Link>
          </li>
          <li>
            <Link to="/categories#fight">Luta</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rapido</SectionTitle>
        <Links>
          <li>
            <Link to="/#on-sale">Promocoes</Link>
          </li>
          <li>
            <Link to="/#coming-soon">Em breve</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-Play Todos os direitors reservados</p>
    </div>
  </Container>
)

export default Footer
