// Menu.js
import React from 'react';
import './menu.css'; // Import the CSS file

function Menu({ onSelect }) {
    return (
        <div className="menu-container">
            <button className="menu-button" onClick={() => onSelect('contentA')}>Intro</button>
            <button className="menu-button" onClick={() => onSelect('contentB')}>Games</button>
            <button className="menu-button" onClick={() => onSelect('contentC')}>Content C</button>
            <button className="menu-button" onClick={() => onSelect('contentd')}>Content d</button>
        </div>
    );
}

export default Menu;
