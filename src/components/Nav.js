import React, { useState } from 'react';

import close from '../assets/close.png';
import menu from '../assets/menu.png';

import './nav.css';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <h1>BJ<span>.</span></h1>
      <div className="desktop-menu">
        <a href='#home'>Home</a>
        <a href='#skills'>Skills</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
      </div>
      <img
        className="menu-icon"
        src={showMenu ? close : menu}
        alt="menuicon"
        onClick={() => setShowMenu(!showMenu)} />

      <div className="mob-menu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <a href='#home'>Home</a>
        <a href='#projects'>Projects</a>
        <a href='#skills'>Skills</a>
        <a href='#contact'>Contact</a>

      </div>
    </nav>
  );
};

export default Nav;
