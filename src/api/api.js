
async function getPokemonsById() {
}

async function getPokemonsByName() {
}

export default {
    getPokemonsById: async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        response.json();

        return response.body;
    },

    getPokemonsByName: async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        response.json();

        return response.body;
    },

};