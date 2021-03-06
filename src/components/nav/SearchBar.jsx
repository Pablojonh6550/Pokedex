import React from "react";
import { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

import './css/searchbar.css';

function SearchBar(props) {
    const { onSearchHandler } = props;
    const [search, setSearch] = useState("");

    const onChangeHandler = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value)
        if (e.target.value.length === 0) {
            onSearchHandler(undefined);
        }

    }

    const onButtonClickHandler = () => {
        if (!search) {
            alert('campo vazio');
            onSearchHandler(undefined);
        }else{
            onSearchHandler(search);

        }

    }

    return (
        <div className="searchbar_container">
            <div className="searchbar_input">
                <input type="text" placeholder="Buscar Pokemon" onChange={onChangeHandler} />
            </div>
            <button className="button_searchbar" type="submit" onClick={onButtonClickHandler}><BiSearchAlt /></button>
        </div>
    );
}

export default SearchBar;