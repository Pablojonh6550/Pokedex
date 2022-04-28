export const searchPokemon = async (pokemon) => {

    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const request = await fetch(url)
        return await request.json()
        
    } catch (error) {
        console.log("error: ", error);
    }

}