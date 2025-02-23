import './App.css'
import ExperienceList from './components/experience'
import Footer from './components/footer'
import Header from './components/header'
import Hero from './components/hero'

function App() {
  return (
    <>
      <Header />
      <article className="wrapper">
        <Hero />
        <ExperienceList />
      </article>
      <Footer />
    </>
  )
}

export default App
