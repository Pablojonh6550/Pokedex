import React from "react";

import { Link } from 'react-router-dom';
import './css/navbar.css';

import { AiFillHome, AiFillHeart } from 'react-icons/ai';
import SearchBar from "./SearchBar";

function NavBar() {
    const logo_pokedex = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';

    return (
            <nav>
                        <img src={logo_pokedex} alt="logo_pokedex" className="navbar_logo" />
                    
                    <div className="menu">
                        <div className="menu_item">
                            <AiFillHome />
                            <Link to="/">Home</Link>
                        </div>
                        <div className="menu_item">
                            <AiFillHeart />
                            <Link to="/favorite">Favorite</Link> 
                        </div>
                        <SearchBar />
                    </div>
            </nav>
    );
}

export default NavBar;