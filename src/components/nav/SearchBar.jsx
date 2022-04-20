import React from "react";
import { useState } from 'react';

function SearchBar() {
    const [search, setSearch] = useState(""); 

    const onChangeHandler = (e) => {
        console.log("pokemon: ", e.target.value);
        setSearch(e.target.value);
    }

    return (
        <div className="searchbar_container">
            <div className="searchbar_input">
                <input type="text" placeholder="Buscar Pokemon" onChange={onChangeHandler}/>
                <button>
                    
                </button>
            </div>
        </div>
    );
}

export default SearchBar;