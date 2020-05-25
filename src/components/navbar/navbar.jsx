import React, { useState } from 'react';
import './navbar.css';

import logoPrimary from '../../assets/images/logo.svg';

// nav
import hamburger from '../../assets/images/icon-hamburger.svg';
import hamClose from '../../assets/images/icon-close.svg';

// navbar state 
// starting state isOpen set to false

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = function () {
    { }
    setIsOpen(!isOpen);
  }

  // {isOpen === false ? "" : "nav-fixed"}

  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <div className="nav-logo">
              <a href="index.html"><img src={logoPrimary} alt="company logo" /></a>
            </div>
            <div className="dropdown-btn" onClick={toggle}>
              {isOpen === false ?
                <img src={hamburger} alt="icon-hamburger" /> :
                <img src={hamClose} alt="icon-hamburger-close" className="show" />}
            </div>
            <div className="nav-items-desktop">
              <ul className="nav-items">
                <li className="nav-item"><a>How we work</a></li>
                <li className="nav-item"><a>Blog</a></li>
                <li className="nav-item"><a>Account</a></li>
                <li className="nav-item"><a className="btn-dark">View plans</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <div className={isOpen === false ? "d-none" : "dropdown-menu"}>
        <ul className={isOpen === false ? "d-none" : "nav-items"}>
          <li className="nav-item"><a>How we work</a></li>
          <li className="nav-item"><a>Blog</a></li>
          <li className="nav-item"><a>Account</a></li>
          <li className="nav-item"><a className="btn-light">View plans</a></li>
        </ul>
      </div>

    </div>

  );
}


export default Navbar

