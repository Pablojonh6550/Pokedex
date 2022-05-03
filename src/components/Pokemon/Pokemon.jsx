import React from "react";

import './css/pokemon.css';

function Pokemon( props ) {
    const { pokemon, key } = props;
    
    return (
        <div className="pokemon_container" >
            
            {pokemon.name}
        </div>
    );
}

export default Pokemon;