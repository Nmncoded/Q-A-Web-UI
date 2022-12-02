import './App.scss'
import Header from './components/header'
import Aside from './components/aside'
import Body from './components/body'
import Footer from './components/footer'
import { useStateData } from './context'
import Success from './components/success'

function App() {
  const {isSubmitted} = useStateData();
  return (
    <main className='container' >
      {
        isSubmitted ? <Success /> :
        <>
        <Header />
        <section
        className='main-body'
        >
        <Aside />
        <Body />
        </section>
        <Footer />
        </>
      }
    </main>
  )
}

export default App
