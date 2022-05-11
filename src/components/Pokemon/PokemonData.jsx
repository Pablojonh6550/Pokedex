import React from "react";

import './css/pokemondata.css';


function PokemonData( props ) {
    const { modalVisible, setModalVisible} = props;

    const closeModal = () => {
        setModalVisible(false);
    }
    return (
        <>
            { modalVisible && 
                <div className="card_background_container">
                    <div className="card_description">
                        <div className="image_description">
                            
                        </div>
                        <button onClick={closeModal}>x</button>
                    </div>
                </div>
            }
        </>
    );
}

export default PokemonData;