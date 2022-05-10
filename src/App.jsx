import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';

import { getPokemonData, getPokemonRegion, getPokemons, getRegionData } from './components/Api/api';

import NavBar from './components/nav/NavBar';
import Home from './components/pages/Home';
import PokedexPage from './components/pokedex/PokedexPage';

function App() {
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const [pokemons, setPokemons] = useState([]);
    const [regions, setRegions] = useState([]);

    const itensPerPage = 30;
    
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const response = data.results.map( async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(response);
      setPokemons(results);
      setTotalPages(Math.ceil(data.count / itensPerPage));
      
      const data_region = await getPokemonRegion();
      const response_region = data_region.results.map( async (region) => {
        return await getRegionData(region.url);
      });
      const results_region = await Promise.all(response_region);
      setRegions(results_region);

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
      </Routes>
      {/* <PokedexPage pokemons={pokemons} loading={loading} page={page} totalPages={totalPages} setPage={setPage} /> */}
    </Router>
  );
}

export default App;
