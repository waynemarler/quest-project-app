import React from 'react';
import './intro.css'
import screenApp from '../assets/images/appscreen.png';
function Intro() {
    return (
        <div className='intro-container'>
            <div className="text-section">
            <div className="quest-intro">
    <h2>Welcome to Quest Gaming</h2>
    <p>Where innovation meets excitement. We specialize in pioneering peer-to-peer betting games centered around popular sporting events, such as football.</p>
    <p>Designed for groups of friends, our games offer an interactive platform that merges the thrill of the sport with the joy of friendly competition. Dive in, challenge your pals, and amplify your sports-watching experience with Quest Gaming.</p>
    <p>It's not just about winning; it's about having fun together!</p>
</div>

                {/* Additional text or components can go here */}
            </div>
            <div className="image-section">
                <img className='mobile-image' src={screenApp} alt="Mobile Phone" />
            </div>
        </div>
    );
}

export default Intro;
