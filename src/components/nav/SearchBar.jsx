import React from "react";
import { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { searchPokemon } from '../Api/api';
import './css/searchbar.css';

function SearchBar() {

    const [search, setSearch] = useState(""); 
    const [pokemon, setPokemon] = useState();

    const onChangeHandler = (e) => {
        console.log("pokemon/", e.target.value);
        setSearch(e.target.value);
    }

    const onButtonClickHandler = () => {
        onSearchHandler(search);
        console.log("pokemon/", search);
    }

    const onSearchHandler = (pokemon) => {
        const result = searchPokemon(pokemon);
        setPokemon(result);
        console.log("pokemon ", result);
    }

    return (
        <div className="searchbar_container">
            <div className="searchbar_input">
                <input type="text" placeholder="Buscar Pokemon" onChange={onChangeHandler}/>
            </div>
            <button className="button_searchbar" onClick={onButtonClickHandler}><BiSearchAlt/></button>
            {!pokemon}
        </div>
    );
}

export default SearchBar;