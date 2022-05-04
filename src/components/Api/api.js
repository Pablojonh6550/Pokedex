export const searchPokemon = async (pokemon) => {

    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const request = await fetch(url)
        return await request.json()
        
    } catch (error) {
        console.log("error: ", error);
    }

}

export const getPokemons = async (limit = 30, offset = 0) => {

    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset${offset}`;
        const request = await fetch(url)
        return await request.json()
        
    } catch (error) {
        console.log("error: ", error);
    }

}
export const getPokemonData = async (url) => {

    try {
        
        const request = await fetch(url)
        return await request.json()
        
    } catch (error) {
        console.log("error: ", error);
    }

}