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
                    
                        <div className={`pokemon_image_container ${pokemon.types.length == 2 ? pokemon.types.reduce((type) => {return (type.type.name)}) : pokemon.types.map((type) => {return (type.type.name)})}`}>
                            <img className="pokemon_image" src={pokemon.sprites.front_default} alt={pokemon.name} />
                        </div>
         
                        <div className="pokemon_card_data">
                            <div className="pokemon_name_container">
                                <h3>{pokemon.name}</h3>
                                <div className={`pokemon_number ${pokemon.types.length == 2 ? pokemon.types.reduce((type) => {return (type.type.name)}) : pokemon.types.map((type) => {return (type.type.name)})}`}>
                                    <span>#{pokemon.id}</span> 
                                </div>
                            </div>

                            <div className="type_container">
                                <div className="type">
                                    {pokemon.types.map((type, index) => {                            
                                        return (
                                        <div key={index} className="pokemon_type_text">{type.type.name} {console.log(type.type.name)}</div>
                                        
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