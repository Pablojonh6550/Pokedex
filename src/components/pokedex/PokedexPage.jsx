import React from "react";

import './css/pagepokedex.css';
import Pokemon from '../Pokemon/Pokemon';

function PagePokedex( props ) {
    const { pokemons, loading } = props;

    return (
        <div className="container_main">
            <div className="pokedex_container">
                <div className="pokedex_name">
                    <h1>Pokedex</h1>
                </div>
                <div>Paginação:</div>
            </div>
            {loading ? (
                <div>Carregando...</div>
            ) : 
                <div className="pokedex_grid">
                    {pokemons && pokemons.map((pokemon, index) => {
                        return (
                        <Pokemon />
                        )
                    })}
                </div>
            }
        </div>
    );
}

export default PagePokedex;