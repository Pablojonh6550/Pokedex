import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';

import { getPokemonData, getPokemonRegion, getPokemonRegionData, getPokemonRegionUrl, getPokemons, getRegionData } from './components/Api/api';

import NavBar from './components/nav/NavBar';
import Home from './components/pages/Home';
import PokedexPage from './components/pokedex/PokedexPage';
import PokedexPageRegion from './components/pokedex/PokedexPageRegion';
import PokemonData from './components/pokemon/PokemonData';

function App() {
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const [pokemons, setPokemons] = useState([]);
    const [regions, setRegions] = useState([]);
    const [pokemonRegion, setPokemonRegion] = useState([]);
    // const [id, setId] = useState(0);

    const itensPerPage = 30;
    
  const fetchPokemons = async () => {
    try {
      setLoading(true);

      // Pokemon
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const response = data.results.map( async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(response);
      setPokemons(results);
      setTotalPages(Math.ceil(data.count / itensPerPage));

      // Region
      const data_region = await getPokemonRegion();
      const response_region = data_region.results.map( async (region) => {
        return await getRegionData(region.url);
      });
      const results_region = await Promise.all(response_region);
      setRegions(results_region);

      // Pokemon from region
      const pokemon_region = await getPokemonRegionUrl();
      const response_pokemon_region = pokemon_region.results.map( async (pokemon_region_all) => {
        return await getPokemonRegionData(pokemon_region_all.url); 
      });
      const results_pokemon_region = await Promise.all(response_pokemon_region);
      setPokemonRegion(results_pokemon_region);
      
      // 
    } catch (error) {
      console.log("fetchPokemon error: ", error);
    }
  }

  
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000)
      fetchPokemons();

  }, [page]);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home regions={regions}/>}/>
        <Route path="/pokedex_all" element={<PokedexPage pokemons={pokemons} loading={loading} page={page} totalPages={totalPages} setPage={setPage} />} />        
        <Route path='/kanto' element={<PokedexPageRegion pokemonsRegionAll={pokemonRegion} loading={loading} page={0} totalPages={0} setPage={0} />}/>
        <Route path='/favorite' element={<PokemonData />}/>
      </Routes>
    </Router>
  );
}

export default App;
