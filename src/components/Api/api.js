
// Buscar pokémon 
export const searchPokemon = async (pokemon) => {

    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const request = await fetch(url)
        return await request.json()
        
    } catch (error) {
        console.log("error: ", error);
    }

}

//Requisição todos os pokémons {com limit e ordem de inicio} 
export const getPokemons = async (limit, offset) => {

    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const request = await fetch(url)
        return await request.json()
        
    } catch (error) {
        console.log("error: ", error);
    }

}

//Requisição dados de cada pokemon
export const getPokemonData = async (url) => {

    try {
        
        const request = await fetch(url)
        return await request.json()
        
    } catch (error) {
        console.log("error: ", error);
    }

}

//Requisição regiões
export const getPokemonRegion = async () => {

    try {
        let url = `https://pokeapi.co/api/v2/region`;
        const request = await fetch(url)
        return await request.json()
        
    } catch (error) {
        console.log("error: ", error);
    }

}

export const getRegionData = async (url) => {

    try {
        
        const request = await fetch(url)
        return await request.json()
        
    } catch (error) {
        console.log("error: ", error);
    }

}