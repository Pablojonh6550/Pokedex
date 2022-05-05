import React from "react";
import { AiFillHeart } from 'react-icons/ai';

import './css/pokemon.css';

function Pokemon( props ) {
    const { pokemon } = props;

    const onHeartClick = () => {
        console.log("favorite");

    }


    return (
        <div className="pokemon_container" >
            <div className="pokemon_card_hover">
                <div className="pokemon_card">
                    <div className="pokemon_image_container">
                        <img className="pokemon_image" src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </div>

                    <div className="pokemon_card_data">
                        <div className="pokemon_name_container">
                            <span>#{pokemon.id}</span>
                            <h3>{pokemon.name}</h3>
                        </div>

                        <div className="type_container">
                            <div className="type">
                                {pokemon.types.map((type, index) => {                                
                                    return (
                                    <div key={index} className="pokemon_type_text">{type.type.name}</div>
                                    
                                    );
                                    
                                })}
                            </div>
                        </div>

                    </div>
                        <div className="btn_favorite_container">
                        <button className="btn_favorite" onClick={onHeartClick}>
                            <AiFillHeart className="svg_btn"/>
                        </button>
                        </div>
                </div>
            </div>
        </div>
    );

}

export default Pokemon;