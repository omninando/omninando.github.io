import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="header fixed z-2 flex flex justify-center w-full md:pt-12  font-medium text-2xl">
      <div className="wrapper w-full md:max-w-[90%] flex justify-between items-center">
        <a href="/" aria-label="fernando coelho" className="logo text-6xl">
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
