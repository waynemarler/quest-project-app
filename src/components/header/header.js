import React from 'react';
import logo from '../../assets/images/qg-logo.png';
import './header.css';

function Header() {
  return (
    <header className="app-header">
      <img src={logo} className="app-logo-header" alt="logo" />
      <h2 className="header-subtitle">Innovative Betting Solutions</h2>
    </header>
  );
}

export default Header;
