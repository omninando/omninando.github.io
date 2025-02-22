import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="header flex justify-between p-4 md:p-8 uppercase font-medium text-2xl">
      <div className="logo">
        <a href="/">Fernando Coelho</a>
      </div>
      <nav className="navigation">
        <ul className="flex gap-4">
          {/* <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li> */}
        </ul>
      </nav>
    </header>
  )
}

export default Header
