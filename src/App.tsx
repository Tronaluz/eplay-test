import Header from './components/Header'
import './App.css'
import { GlobalCss, Container } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <Header />
      </Container>
    </>
  )
}

export default App
