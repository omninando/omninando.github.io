import React, { useEffect, useRef, useState } from 'react'
import useIntersectionObserver from '../helpers/intersection'

const Hero: React.FC = () => {
  const messageRef = useRef<HTMLParagraphElement>(null)
  const [lines, setLines] = useState<React.ReactNode[][]>([])
  const [isVisible, setIsVisible] = useState(false)

  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate')
        setIsVisible(true)
      }
    })
  }

  useIntersectionObserver(observerCallback, { threshold: 0.5 }, '.hero')

  useEffect(() => {
    const splitIntoLines = () => {
      if (!messageRef.current) return

      // Create a temporary container with the same styling to measure line breaks
      const tempContainer = document.createElement('p')
      tempContainer.className = messageRef.current.className
      tempContainer.style.position = 'absolute'
      tempContainer.style.visibility = 'hidden'
      tempContainer.style.width = `${messageRef.current.offsetWidth}px`
      document.body.appendChild(tempContainer)

      // Content with React elements preserved
      const content = [
        'Olá, I\'m ',
        <span key="name" className="name italic font-medium">Fernando Coelho</span>,
        ', a Brazilian Design Systems Engineer passionate about crafting meaningful interfaces. Based in Stockholm, I\'m currently building the future of Legal AI at ',
        <a
          key="link"
          className="link"
          target="_blank"
          rel="noreferrer"
          href="https://www.legora.com"
        >
          <span>Legora</span>
        </a>,
        '.'
      ]

      // Split text into words while preserving React elements
      const items: (string | React.ReactElement)[] = []
      content.forEach(item => {
        if (typeof item === 'string') {
          items.push(...item.split(' ').map((word, i, arr) => i < arr.length - 1 ? word + ' ' : word))
        } else {
          items.push(item)
        }
      })

      const lineBreaks: React.ReactNode[][] = [[]]
      let currentLine = 0
      let currentHeight = 0

      items.forEach((item, index) => {
        const testElement = typeof item === 'string' ?
          document.createTextNode(item) :
          tempContainer.appendChild(document.createElement('span'))

        if (typeof item !== 'string') {
          testElement.textContent = item.props.children?.props?.children || item.props.children || ''
        } else {
          tempContainer.appendChild(testElement)
        }

        const newHeight = tempContainer.offsetHeight

        if (newHeight > currentHeight && lineBreaks[currentLine].length > 0) {
          currentLine++
          lineBreaks[currentLine] = []
          currentHeight = newHeight
        }

        lineBreaks[currentLine].push(
          typeof item === 'string' ? item : React.cloneElement(item, { key: `element-${index}` })
        )
      })

      document.body.removeChild(tempContainer)
      setLines(lineBreaks)
    }

    splitIntoLines()
    window.addEventListener('resize', splitIntoLines)
    return () => window.removeEventListener('resize', splitIntoLines)
  }, [])

  return (
    <section className="hero flex justify-center align-center w-full h-full p-4 md:p-0">
      <div className="hero-content w-full md:max-w-[90%] h-[100vh] flex flex-col justify-center">
        <p
          ref={messageRef}
          className="message md:max-w-[80%] font-serif font-light text-4xl md:text-6xl tracking-[-2.1px] md:tracking-tight"
        >
          {lines.length > 0 ? (
            lines.map((line, lineIndex) => (
              <span
                key={`line-${lineIndex}`}
                className={`line-wrapper ${isVisible ? 'animate-line' : ''}`}
                style={{
                  animationDelay: `${lineIndex * 0.11}s`,
                  display: 'block'
                }}
              >
                {line}
              </span>
            ))
          ) : (
            <>
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
            </>
          )}
        </p>
      </div>
    </section>
  )
}

export default Hero
