import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de RPG"
              to="/categories#rpg"
            >
              RPG
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de Ação"
              to="/categories#action"
            >
              ACAO
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de Aventura"
              to="/categories#adventure"
            >
              AVENTURA
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de Esportes"
              to="/categories#sports"
            >
              ESPORTES
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de Simulacao"
              to="/categories#simulation"
            >
              SIMULACAO
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de Luta"
              to="/categories#fight"
            >
              Luta
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Acesso rapido</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="Clique aqui para acessar a secao de Promocoes"
              to="/#on-sale"
            >
              Promocoes
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar a secao de em breve"
              to="/#coming-soon"
            >
              Em breve
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <p>{currentYear} - &copy; E-Play Todos os direitors reservados</p>
    </div>
  </S.Container>
)

export default Footer
