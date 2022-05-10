import React from "react";

import './css/pagepokedex.css';
// import Pokemon from '../pokemon/Pokemon';
import Pagination from "../pagination/Pagination";
import Loading from "../loading/Loading";

function PagePokedex( props ) {
    const { pokemonsRegionAll, loading, page, totalPages, setPage } = props;
    
    const onLeftClickHandler = () => {
        if( page > 0 ) {
            setPage(page - 1);
        }
        console.log(pokemonsRegionAll)
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
                    {pokemonsRegionAll && pokemonsRegionAll.map(( pokemonRegion ) => {
                            return (<p key={pokemonRegion.id}>{pokemonRegion.name}</p>)  
                    })}
                </div>
            }
        </div>
    );
}

export default PagePokedex;