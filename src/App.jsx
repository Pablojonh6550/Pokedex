import React, { useState, useEffect } from 'react';

import './App.css';

import { getPokemons } from './components/Api/api';

import NavBar from './components/nav/NavBar';
import PokedexPage from './components/pokedex/PokedexPage';

function App() {
    const [loading, setLoading] = useState(false);
    const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons();
      setPokemons(data);
      setLoading(false);

    } catch (error) {
      console.log("fetchPokemon error: ", error);
    }
  }

  useEffect(() => {
    console.log('carregou');
    fetchPokemons();
  }, []);

  return (
    <div>
      <NavBar />
      <PokedexPage pokemons={pokemons} loading={loading}/>
    </div>
  );
}

export default App;
