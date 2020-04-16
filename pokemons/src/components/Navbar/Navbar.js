import React from 'react';
import './style.css';
import PokePNG from '../Navbar/pokeapi_256.png';

function Navbar() {
    return (
        <div className="Navbar">
            <img src={PokePNG} alt=""/>
        </div>
    );
}

export default Navbar;
