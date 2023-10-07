// Main.js
import React from 'react';
import './main.css';
import Intro from '../../contents/intro';

function Main({ selectedContent }) {
    return (
        <div className='main'>
            {selectedContent === 'contentA' && <div><Intro/></div>}
            {selectedContent === 'contentB' && <div>This is Content B</div>}
            {selectedContent === 'contentC' && <div>This is Content C</div>}
        </div>
    );
}

export default Main;

