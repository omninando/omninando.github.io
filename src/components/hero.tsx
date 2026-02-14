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

      const getNodeText = (node: React.ReactNode): string => {
        if (node == null || typeof node === 'boolean') return ''
        if (typeof node === 'string' || typeof node === 'number') return String(node)
        if (Array.isArray(node)) return node.map(getNodeText).join('')
        if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
          return getNodeText(node.props.children)
        }
        return ''
      }

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
        ', a Brazilian Design\u00A0Systems\u00A0Engineer passionate about crafting meaningful interfaces. Based in Stockholm, I\'m currently building the future of Legal AI at ',
        <span key="legora" className="whitespace-nowrap">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://www.legora.com"
          >
            <span>Legora</span>
          </a>
          .
        </span>,
      ]

      // Split text into words while preserving React elements
      const items: React.ReactNode[] = []
      content.forEach((item) => {
        if (typeof item === 'string' || typeof item === 'number') {
          const text = String(item)
          items.push(
            ...text
              .split(' ')
              .map((word, i, arr) => (i < arr.length - 1 ? word + ' ' : word))
          )
          return
        }

        if (React.isValidElement(item)) {
          items.push(item)
        }
      })

      const lineBreaks: React.ReactNode[][] = [[]]
      let currentLine = 0
      let currentHeight = 0

      items.forEach((item, index) => {
        if (typeof item === 'string' || typeof item === 'number') {
          tempContainer.appendChild(document.createTextNode(String(item)))
        } else if (React.isValidElement(item)) {
          const span = tempContainer.appendChild(document.createElement('span'))
          span.textContent = getNodeText(item)
        } else {
          return
        }

        const newHeight = tempContainer.offsetHeight

        if (newHeight > currentHeight && lineBreaks[currentLine].length > 0) {
          currentLine++
          lineBreaks[currentLine] = []
          currentHeight = newHeight
        }

        lineBreaks[currentLine].push(
          React.isValidElement(item)
            ? React.cloneElement(item, { key: `element-${index}` })
            : String(item)
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
      <div className="hero-content w-full md:max-w-[90%] h-screen flex flex-col justify-center">
        <p
          ref={messageRef}
          className="message w-full max-w-[65ch] font-serif font-light text-[clamp(2rem,4.2vw,3.75rem)] leading-[1.05] tracking-[-2.1px] md:tracking-tight"
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
              Brazilian {'Design\u00A0Systems\u00A0Engineer'} passionate about
              crafting meaningful interfaces. Based in Stockholm, I'm currently
              building the future of Legal AI at{' '}
              <span className="whitespace-nowrap">
                <a
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.legora.com"
                >
                  <span>Legora</span>
                </a>
                .
              </span>
            </>
          )}
        </p>
      </div>
    </section>
  )
}

export default Hero
