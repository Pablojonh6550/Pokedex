import React from "react";

import './css/pokemondata.css';


function PokemonData(props) {
    const { modalVisible, setModalVisible, name } = props;

    const closeModal = () => {
        setModalVisible(false);
    }
    return (
        <>
            {modalVisible &&
                <div className="card_background_container">

                    <div className="card_description">
                        <div className="image_description">

                        </div>

                        <div className="pokemon_description">
                            <div className="description_head">
                                <button onClick={closeModal} className="description_button"><span>Fechar</span></button>
                                <div className="description_name">
                                    <h1>{name}</h1>
                                </div>
                            </div>
                            <div className="pokemon_status">
                                <p>1</p>
                                <p>2</p>
                                <p>3</p>
                            </div>
                        </div>
                    </div>

                </div>
            }
        </>
    );
}

export default PokemonData;