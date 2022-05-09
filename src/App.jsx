import React, { useState, useEffect } from 'react';

import './App.css';

import { getPokemonData, getPokemons } from './components/Api/api';

import NavBar from './components/nav/NavBar';
import PokedexPage from './components/pokedex/PokedexPage';

function App() {
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const [pokemons, setPokemons] = useState([]);

    const itensPerPage = 30;
    
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const response = data.results.map( async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(response)
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
      
      

    } catch (error) {
      console.log("fetchPokemon error: ", error);
    }
  }

  useEffect(() => {
    console.log(page);
    fetchPokemons();
  }, [page]);

  return (
    <div>
      <NavBar />
      <PokedexPage pokemons={pokemons} loading={loading} page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
}

export default App;
