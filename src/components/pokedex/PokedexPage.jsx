import React, { useState } from "react";

import './css/pagepokedex.css';
import Pokemon from '../pokemon/Pokemon';
import Pagination from "../pagination/Pagination";
import Loading from "../loading/Loading";
import PokemonData from "../pokemon/PokemonData";

function PagePokedex( props ) {
    const { pokemons, loading, page, totalPages, setPage } = props;

    const [modalVisible, setModalVisible] = useState(false);

    const onLeftClickHandler = () => {
        if( page > 0 ) {
            setPage(page - 1);
        }
    }
    
    const onRightClickHandler = () => {
        if( page+1 !== totalPages ) {
            setPage(page+1);
            
        }
    }
    return (
        <div className="container_main">
            <div className="pokedex_container">
                <div className="pokedex_name">
                    <h1>Pokedex</h1>
                </div>
                <div><Pagination page={page+1}  totalPages={totalPages} onLeftClick={onLeftClickHandler} onRightClick={onRightClickHandler} /></div>
            </div>
            {loading ? (
                <Loading />
            ) : 
                <div className="pokemon_grid">
                    {pokemons && pokemons.map(( pokemon ) => {
                        return (
                        <Pokemon key={pokemon.id} pokemon={pokemon} setModalVisible={setModalVisible} />
                        )
                    })}
                    {pokemons && pokemons.map((pokemon) => {
                        return ( <PokemonData key={pokemon.id} modalVisible={modalVisible} setModalVisible={setModalVisible} pokemon={pokemon} name={pokemon.name}/>)
                    })}
                </div>
            }
        </div>
    );
}

export default PagePokedex;