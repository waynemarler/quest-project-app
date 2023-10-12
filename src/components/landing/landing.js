// landing.js

import React, { useState } from 'react';
import './landing.css';
import logo from '../../assets/images/qg-logo.png';

function Landing({ onEnter }){
  const [animationEnded, setAnimationEnded] = useState(false);
  
  console.log('Animation Ended State:', animationEnded);

  return (
    <section className="landing-section">
      <img src={logo} className="app-logo-landing" alt="logo"  onAnimationEnd={() => {
          console.log('Animation ended');  // This will log when the animation ends
          setAnimationEnded(true);
        }} />
      <h2 className="landing-subtitle">Innovative Betting Solutions</h2>
      {animationEnded && <button className="enter-button" onClick={onEnter}>Enter</button>}

    </section>
    
  );


  
}




export default Landing;
