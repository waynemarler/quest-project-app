// Main.js
import React from 'react';
import './main.css';
import Intro from '../../contents/intro';
import Games from '../../contents/games';

function Main({ selectedContent }) {
    return (
        <div className='main'>
            {selectedContent === 'contentA' && <div><Intro/></div>}
            {selectedContent === 'contentB' && <div><Games /></div>}
            {selectedContent === 'contentC' && <div>This is Content C</div>}
            {selectedContent === 'contentd' && <div>This is Content d</div>}
        </div>
    );
}

export default Main;

