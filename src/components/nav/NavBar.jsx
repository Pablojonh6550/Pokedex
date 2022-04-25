import React from "react";

import { AiFillHome, AiFillHeart } from 'react-icons/ai';
import './css/navbar.css';
import SearchBar from "./SearchBar";

function NavBar() {
    const logo_pokedex = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';

    return (
            <nav>
                        <img src={logo_pokedex} alt="logo_pokedex" className="navbar_logo" />
                    
                    <div className="menu">
                        <div className="menu_item">
                            <AiFillHome />
                            <a href="#">Home</a> 
                        </div>
                        <div className="menu_item">
                            <AiFillHeart />
                            <a href="#">Favorite</a> 
                        </div>
                        <SearchBar />
                    </div>
            </nav>
    );
}

export default NavBar;