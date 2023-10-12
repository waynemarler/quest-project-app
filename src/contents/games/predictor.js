
import './predictor.css';
import React, { useEffect } from 'react';

function Predictor() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.proto.io/api/widget-embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <div className="predictor-container">
    <div className="predictor-text">
      <h2>Predictor</h2>
      <p>
  <strong>Predictor</strong>, an exhilarating EPL football match outcome prediction game, lets you challenge your football acumen against your friends. Imagine the thrill of predicting the exact outcomes of EPL matches and then putting those predictions to the test against your mates.
</p>

<p>
  Here's how it works: As a user, you get to create a game. Once your game is set up, you can invite friends to join in and challenge your predictions. But here's the twist: you, the game creator, get to set the stakes. Whether it's bragging rights, a friendly wager, or just for fun, the choice is yours.
</p>

<p>
  Not only that, but you also determine how many friends you invite, ensuring that each game is as intimate or expansive as you desire. And with an easy-to-use interface, setting up a game and inviting friends is a breeze.
</p>

<p>
  But that's not all! The Predictor app is enhanced with a live results feed, ensuring that you stay updated in real-time. As the matches unfold, watch as the leaderboard updates, letting you know who's leading the prediction pack.
</p>

<p>
  Additional features include personalized profiles where you can track your prediction success rate, chat functionality to engage in friendly banter with opponents, and even a trophy room to showcase your prediction victories.
</p>

<p>
  In a nutshell, the Predictor app combines the love of football with the thrill of competition, creating an experience that's bound to have you and your friends hooked in no time!
</p>
<p>
  Excited about <strong>Predictor</strong>? We invite you to dive right in and experience it for yourself. On the right, you'll find an interactive prototype of the app. Go ahead, click around, and explore the features. We're confident you'll love what you see. Your feedback is invaluable to us, so don't hesitate to share your thoughts after giving it a whirl!
</p>


      {/* Additional content or components for predictor-text */}
    </div>
    
    <div className="protoio-container">
      <div className="protoio-embed-prototype" data-code="YAJW1O" data-show-sidebuttons="0"></div>
    </div>
  </div>
);
}

export default Predictor;
