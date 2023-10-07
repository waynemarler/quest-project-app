// landing.js

import React from 'react';
import './landing.css';
import logo from '../../assets/images/qg-logo.png';

function Landing({ onEnter }){
  return (
    <section className="landing-section">
      <img src={logo} className="app-logo-landing" alt="logo" />
      <h2 className="landing-subtitle">Innovative Gaming Solutions</h2>
      <button className="enter-button" onClick={onEnter}>Enter</button>

    </section>
  );
}

export default Landing;
