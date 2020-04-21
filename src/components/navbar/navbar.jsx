import React, { useState } from 'react';
import './navbar.css';

import logoPrimary from '../../assets/images/logo.svg';

// nav
import hamburger from '../../assets/images/icon-hamburger.svg';
import hamClose from '../../assets/images/icon-close.svg';

// navbar state 
// starting state is false

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = function () {
    { }
    setIsOpen(!isOpen);
  }

  return (
    <nav className={isOpen === false ? "" : "nav-fixed"} >
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logoPrimary} alt="company-logo" />
        </div>

        <button className="hamburger" onClick={toggle}>
          {isOpen === false ?
            <img src={hamburger} alt="icon-hamburger" /> :
            <img src={hamClose} alt="icon-hamburger-close" className="show" />}
        </button>

        <div className="nav-items">
          <ul className={isOpen === false ? "d-none" : "nav-show"}>
            <li><a>How we work</a></li>
            <li><a>Blog</a></li>
            <li><a>Account</a></li>
            <li><a className="btn">View plans</a></li>
          </ul>
        </div>
      </div>
    </nav>

  );
}


export default Navbar

