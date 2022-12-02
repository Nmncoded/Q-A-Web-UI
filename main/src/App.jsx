import './App.scss'
import Header from './components/header'
import Aside from './components/aside'
import Body from './components/body'
import Footer from './components/footer'

function App() {

  return (
    <main className='container' >
      <Header />
      <section
      className='main-body'
      >
      <Aside />
      <Body />
      </section>
      <Footer />
    </main>
  )
}

export default App
