// Menu.js
import React from 'react';
import './menu.css'; // Import the CSS file

function Menu({ onSelect }) {
    return (
        <div className="menu-container">
            <button className="menu-button" onClick={() => onSelect('contentA')}>Home</button>
            <button className="menu-button" onClick={() => onSelect('contentB')}>Content B</button>
            <button className="menu-button" onClick={() => onSelect('contentC')}>Content C</button>
        </div>
    );
}

export default Menu;
