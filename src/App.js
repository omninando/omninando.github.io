import React, { Component } from 'react';
import logo from './assets/icons/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <a href="http://nandocoelho.co" alt="Fernando Coelho | Home">
          <img src={logo} className="logo" alt="logo" />
          </a>
        </div>

        <main className="intro" itemScope itemType="http://schema.org/Person">
          <p className="headline">I’M
            <span itemProp="name"> FERNANDO COELHO</span>.
            <span itemProp="jobTitle"> FRONT END ENGINEER </span>
            CURRENTLY CODING AT
            <span itemProp="worksFor" itemType="http://schema.org/Organization">
              <a itemProp="url" className="vtex-link" href="https://www.vtex.com.br"> VTEX</a>
            </span>
            .
          </p>
        </main>

        <footer className="footer">
          <ul className="footer-list">
            <li>
              <a className="footer-link" href="http://be.net/nandocoelho">
                Behance
              </a>
            </li>
            <li>
              <a className="footer-link" href="https://github.com/nandoacoelho">
                Github
              </a>
            </li>
            <li>
              <a className="footer-link" href="https://codepen.io/nandocoelho/">
                Codepen
              </a>
            </li>
            <li>
              <a className="footer-link" href="https://twitter.com/nandoacoelho">
                twitter
              </a>
            </li>
            <li>
              <a className="footer-link" href="https://instagram.com/nandocoelho.co">
                Instagram
              </a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;
