import React from "react";

import './css/pokemondata.css';
import IMG from '../../images/pokemon-1.png';


function PokemonData() {
    return (
        <div className="card_description_container">
            <div className="card_bottom_container">
                <div className="card_top_container">
                    <div className="card_description_image">
                        <img src={IMG} alt="pokemon" />
                        
                    </div>                    
                </div>
            </div>
        </div>
    );
}

export default PokemonData;