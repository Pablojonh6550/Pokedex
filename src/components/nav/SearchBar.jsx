import React from "react";
import { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { searchPokemon } from '../Api/api';
import './css/searchbar.css';

function SearchBar() {

    const [search, setSearch] = useState(""); 
    const [pokemon, setPokemon] = useState();

    const onChangeHandler = (e) => {
        setSearch(e.target.value);
    }

    const onButtonClickHandler = () => {
        onSearchHandler(search);
    }

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon);
        setPokemon(result);

    }

    return (
        <div className="searchbar_container">
            <div className="searchbar_input">
                <input type="text" placeholder="Buscar Pokemon" onChange={onChangeHandler}/>
            </div>
            <button className="button_searchbar" type="submit" onClick={onButtonClickHandler}><BiSearchAlt/></button>
        </div>
    );
}

export default SearchBar;