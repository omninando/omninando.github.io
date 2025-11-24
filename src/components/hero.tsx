import React from 'react'
import useIntersectionObserver from '../helpers/intersection'

const Hero: React.FC = () => {
  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate')
      }
    })
  }

  useIntersectionObserver(observerCallback, { threshold: 0.5 }, '.hero')

  return (
    <section className="hero flex justify-center align-center w-full h-full p-4 md:p-0">
      <div className="hero-content w-full md:max-w-[90%] h-[100vh] flex flex-col justify-center">
        <p className="message md:max-w-[80%] font-serif font-light text-4xl md:text-6xl tracking-[-2.1px] md:tracking-tight">
          Olá, I'm{' '}
          <span className="name italic font-medium">Fernando Coelho</span>, a
          Brazilian Design Systems Engineer passionate about crafting meaningful
          interfaces. Based in Stockholm, I'm currently building the future of
          Legal AI at{' '}
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://www.legora.com"
          >
            <span>Legora</span>
          </a>
          .
        </p>
      </div>
    </section>
  )
}

export default Hero
