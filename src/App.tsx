import './App.css'
import ExperienceList from './components/experience'
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
    </>
  )
}

export default App
