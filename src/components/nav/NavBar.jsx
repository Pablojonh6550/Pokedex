import React, { useContext, useState } from "react";

import './css/navbar.css';

import { Link } from 'react-router-dom';
import { AiFillHome, AiFillHeart } from 'react-icons/ai';

import SearchBar from "./SearchBar";
import FavoriteContext from "../contexts/FavoriteContext";

function NavBar(props) {
    
    const { onSearch, visible, setVisible } = props;

    const { favoritePokemon } = useContext(FavoriteContext);
    const logo_pokedex = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';

    const onVisible = () => {
        setVisible(false);
    }

    return (
        <nav>
            <img src={logo_pokedex} alt="logo_pokedex" className="navbar_logo" />

            <div className="menu">
                <div className="menu_item">
                    <AiFillHome />
                    <Link to="/" onClick={onVisible}>Home</Link>
                </div>
                <div className="menu_item">
                    <AiFillHeart />
                    <Link to="/favorite">Favorite ({favoritePokemon.length})</Link>
                </div>
                {visible ? (
                    <SearchBar onSearchHandler={onSearch} />
                ) : ''}
                
            </div>
        </nav>
    );
}

export default NavBar;