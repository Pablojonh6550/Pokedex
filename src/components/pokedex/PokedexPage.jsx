import React from "react";

import './css/pagepokedex.css';

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
                    {pokemons.map((pokemon, index) => {
                        return (
                        <div className="ca">
                            <div>Nome: {pokemon.name}</div>
                            <div>Peso: {pokemon.wheight}</div>
                            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                        </div>
                        )
                    })}
                </div>
            }
        </div>
    );
}

export default PagePokedex;