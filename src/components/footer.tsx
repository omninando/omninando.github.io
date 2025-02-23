import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="footer flex justify-center w-full p-4 pb-12 md:p-0 md:pb-12 md:pt-30 font-medium text-sm md:text-base">
      <div className="wrapper w-full md:max-w-[90%] flex flex-col md:flex-row gap-10 justify-between items-center">
        <p>© Fernando Coelho 2025</p>
        <div className="social-links flex flex-wrap flex-center justify-center md:justify-end w-[60%] md:w-auto gap-4">
          <a
            className="link"
            href="mailto:nandoacoelho@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          |
          <a
            className="link"
            href="https://github.com/omninando"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          |
          <a
            className="link"
            href="https://codepen.io/nandocoelho/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodePen
          </a>
          <span className="hidden md:flex">|</span>
          <a
            className="link"
            href="https://www.behance.net/nandocoelho/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance
          </a>
          |
          <a
            className="link"
            href="https://linkedin.com/in/nandocoelho"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
