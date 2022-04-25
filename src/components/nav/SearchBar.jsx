import React from "react";
import { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

import './css/searchbar.css';

function SearchBar() {
    const [search, setSearch] = useState(""); 

    const onChangeHandler = (e) => {
        console.log("pokemon: ", e.target.value);
        setSearch(e.target.value);
    }

    const onButtonClickHandler = () => {
        console.log("pokemon", search);
    }

    return (
        <div className="searchbar_container">
            <div className="searchbar_input">
                <input type="text" placeholder="Buscar Pokemon" onChange={onChangeHandler}/>
            </div>
            <button className="button_searchbar" onClick={onButtonClickHandler}><BiSearchAlt/></button>
        </div>
    );
}

export default SearchBar;