import React from 'react'

const Hero: React.FC = () => {
  return (
    <article className="hero flex justify-center align-center p-4 md:p-8 w-full 2xl:max-w-[70%]">
      <p className="message font-serif font-light text-4xl md:text-8xl/24 md:tracking-tight">
        <span className="name italic">Fernando Coelho</span>, is a Frontend
        engineer based in Barcelona currently connecting people through form
        experiences at{' '}
        <a className="link" href="https://www.typeform.com">
          Typeform
        </a>
        .
      </p>
    </article>
  )
}

export default Hero
