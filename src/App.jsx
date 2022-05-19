import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import { getPokemonData, getPokemonRegion, getPokemons, getRegionData, searchPokemon } from './components/Api/api';
import { FavoriteProvider } from './components/contexts/FavoriteContext';

import NavBar from './components/nav/NavBar';
import Home from './components/pages/Home';
import RegionPage from './components/pages/RegionPage';
import PokedexPage from './components/pokedex/PokedexPage';
import PokedexPageRegion from './components/pokedex/PokedexPageRegion';

const favoritesKey = "favorite";

function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [regions, setRegions] = useState([]);
  const [visible, setVisible] = useState(false);
  
  console.log(regions);

  const itensPerPage = 30;

  const fetchPokemons = async () => {
    try {
      
      setLoading(true);
      setNotFound(false);
      // Pokemon
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const response = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(response);
      setPokemons(results);
      setTotalPages(Math.ceil(data.count / itensPerPage));
      
      // Region
      const data_region = await getPokemonRegion();
      const response_region = data_region.results.map(async (region) => {
        return await getRegionData(region.url);
      });
      const results_region = await Promise.all(response_region);
      setRegions(results_region);
     
    } catch (error) {
      console.log("fetchPokemon error: ", error);
    }
  }

  const loadFavoritePokemons = () => {
    try {
      setLoading(true);

      const pokemonFavoritesKey = JSON.parse(window.localStorage.getItem(favoritesKey)) || [];
      setFavorites(pokemonFavoritesKey);
    } catch (error) {
      console.log("loadFavoritePokemons error: ", error);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000)
    loadFavoritePokemons();

  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000)
    fetchPokemons();
    
  }, [page]);

  const updateFavoritePokemon = (name) => {
    const updatedFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(name)
    if (favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1);
    } else {
      updatedFavorites.push(name);
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  }

  const onSearchPokemon = async (pokemon) => {
    if (!pokemon) {
      fetchPokemons();
    }
    setNotFound(false);
    setLoading(true);

    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);

    } else {
      setPokemons([result]);
      setPage(0);
      setTotalPages(1);
    }
    
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }

  return (
    <>
      <FavoriteProvider
        value={{
          favoritePokemon: favorites,
          updateFavoritePokemon: updateFavoritePokemon,
        }}
      >
        <Router>
          <NavBar onSearch={onSearchPokemon} visible={visible} setVisible={setVisible}/>
          <div className='app_container'>
            <Routes>
              <Route path='/' element={<Home setVisible={setVisible}/>} />
              <Route path="/pokedex" element={<PokedexPage pokemons={pokemons} loading={loading} page={page} totalPages={totalPages} setPage={setPage} />} />
              <Route path='/region' element={<RegionPage regions={regions}/>} />
              {/* <Route path='/regionpokemon' element={<PokedexPageRegion pokemonsRegionAll={dataRegion} loading={loading} page={0} totalPages={0} setPage={0} />} /> */}
              {/* <Route path='/favorite' element={} /> */}
            </Routes>
          </div>
          
        </Router>

      </FavoriteProvider>
    </>
  );
}

export default App;
