import React from 'react';
import './games.css';
import Predictor from './games/predictor';
import LMS from './games/lms';
function Games() {
  return (
    <div className="games-container">
      <Predictor/>
      <LMS />
    </div>
  );
}

export default Games;
