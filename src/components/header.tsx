import React, { useEffect, useState } from 'react'

const LOGO_FONT_FAMILY = '"League Script"'
const LOGO_FONT_CHECK = `1em ${LOGO_FONT_FAMILY}`

const Header: React.FC = () => {
  const [isLogoFontReady, setIsLogoFontReady] = useState(() => {
    // Keep rendering simple/fail-open if the browser doesn't support the Font Loading API.
    if (typeof document === 'undefined') return true
    if (!('fonts' in document)) return true
    if (typeof document.fonts.check !== 'function') return true
    return document.fonts.check(LOGO_FONT_CHECK)
  })

  useEffect(() => {
    if (isLogoFontReady) return
    if (!('fonts' in document)) {
      setIsLogoFontReady(true)
      return
    }

    let cancelled = false
    const timeoutMs = 3000

    const waitForLogoFont = async () => {
      try {
        await Promise.race([
          document.fonts.load(LOGO_FONT_CHECK),
          new Promise<void>((resolve) => setTimeout(resolve, timeoutMs)),
        ])
      } finally {
        if (!cancelled) setIsLogoFontReady(true)
      }
    }

    waitForLogoFont()

    return () => {
      cancelled = true
    }
  }, [isLogoFontReady])

  return (
    <header className="header fixed z-2 flex justify-center w-full p-4 md:p-0 md:pt-12 font-medium text-2xl">
      <div className="wrapper w-full md:max-w-[90%] flex justify-between items-center">
        <a
          href="/"
          aria-label="fernando coelho"
          className={`logo text-6xl ${isLogoFontReady ? '' : 'invisible'}`}
        >
          FC
        </a>
        {/* <nav className="navigation">
          <ul className="flex gap-4 uppercase">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav> */}
      </div>
    </header>
  )
}

export default Header
