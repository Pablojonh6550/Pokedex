import React from "react";

import './css/pokemon.css';

function Pokemon( props ) {
    const { pokemon } = props;
    console.log("pokemon: ", pokemon);
    return (
        <div className="pokemon_container" >
            <div className="pokemon_card_hover">
                <div className="pokemon_card">
                    <div className="pokemon_image_container">
                        <img className="pokemon_image" src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </div>
                {pokemon.name}
                </div>
            </div>
        </div>
    );
}

export default Pokemon;