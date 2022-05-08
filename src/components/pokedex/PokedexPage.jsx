import React from "react";

import './css/pagepokedex.css';
import Pokemon from '../pokemon/Pokemon';
import Pagination from "../pagination/Pagination";

function PagePokedex( props ) {
    const { pokemons, loading } = props;

    return (
        <div className="container_main">
            <div className="pokedex_container">
                <div className="pokedex_name">
                    <h1>Pokedex</h1>
                </div>
                <div><Pagination /></div>
            </div>
            {loading ? (
                <div>Carregando...</div>
            ) : 
                <div className="pokemon_grid">
                    {pokemons && pokemons.map(( pokemon ) => {
                        return (
                        <Pokemon key={pokemon.id} pokemon={pokemon}/>
                        )
                    })}
                </div>
            }
        </div>
    );
}

export default PagePokedex;