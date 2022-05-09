import React from "react";

import './css/pagepokedex.css';
import Pokemon from '../pokemon/Pokemon';
import Pagination from "../pagination/Pagination";

function PagePokedex( props ) {
    const { pokemons, loading, page, totalPages, setPage } = props;
    
    const onLeftClickHandler = () => {
        if( page > 0 ) {
            setPage(page - 1);
        }
    }
    
    const onRightClickHandler = () => {
        if( page+1 !== totalPages ) {
            setPage(page+1);
            // console.log(page);
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
                <div>Carregando...</div>
            ) : 
                <div className="pokemon_grid">
                    {pokemons && pokemons.map(( pokemon ) => {
                        return (
                        <Pokemon key={pokemon.id} pokemon={pokemon}/>
                        )
                    })}
                </div>
            }
        </div>
    );
}

export default PagePokedex;