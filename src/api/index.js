

async function getPokemonApiById(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();

    return pokemon;
}

const Api = {
    updatedData: async (currentNumber, nextNumber) => {
        var promise = new Promise(async (resolve, reject) => {
            let pokemosAll = [];

            for (let i = currentNumber; i <= nextNumber; i++) {
                const poke = await getPokemonApiById(i);
                pokemosAll.push(poke);
            }

            resolve(pokemosAll);
        });

        return promise;
    },
    getPokemons: async (pokemons_number) => {
        var promise = new Promise(async (resolve, reject) => {
            let pokemosAll = [];

            for (let i = 1; i <= pokemons_number; i++) {
                const poke = await getPokemonApiById(i);
                pokemosAll.push(poke);
            }

            resolve(pokemosAll);
        });

        return promise;
    }
}

export default Api;