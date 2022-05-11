import React, { useState } from "react";
import { AiFillHeart } from 'react-icons/ai';

import './css/pokemon.css';
import PokemonData from "./PokemonData";

function Pokemon( props ) {
    const { pokemon } = props;
    const type_css = pokemon.types.map((type) => {return type.type.name});
    const [modalVisible, setModalVisible] = useState(false);

    const onHeartClick = () => {
        console.log("favorite");
        setModalVisible(prev => !prev);

    }



    return (
        <div className="pokemon_container" >
            <div className="pokemon_card_hover">
                <div className="pokemon_card">
                    
                        <div className={`pokemon_image_container ${pokemon.types.length === 2 ? pokemon.types.reduce((type) => {return (type.type.name)}) : pokemon.types.map((type) => {return (type.type.name)})}`}>
                            <img className="pokemon_image" src={pokemon.sprites.front_default} alt={pokemon.name} />
                        </div>
         
                        <div className="pokemon_card_data">
                            <div className="pokemon_name_container">
                                <h3>{pokemon.name}</h3>
                                <div className={`pokemon_number ${pokemon.types.length === 2 ? pokemon.types.reduce((type) => {return (type.type.name)}) : pokemon.types.map((type) => {return (type.type.name)})}`}>
                                    <span>#{pokemon.id}</span> 
                                </div>
                            </div>

                                <div className={`type_container `}>
                                    {pokemon.types.map((type, index) => {                            
                                        return (
                                        <div key={index} className={`type ${type_css === type.type.name ? '' : type.type.name}`}><span>{type.type.name}</span></div>
                                        ); 
                                    })}
                                </div>

                        </div>
                        <div className="btn_favorite_container">
                            <button className="btn_favorite" onClick={onHeartClick}>
                                <AiFillHeart className="svg_btn"/>
                            </button>
                        </div>
                        
                </div>
            </div>
            {/* <PokemonData modalVisible={modalVisible} setModalVisible={setModalVisible}/> */}
        </div>
        
    );

}

export default Pokemon;