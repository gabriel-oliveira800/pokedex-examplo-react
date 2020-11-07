const pokemons_number = 20;

// const colors = {
//     fire: '#FDDFDF',
//     grass: '#DEFDE0',
//     electric: '#FCF7DE',
//     water: '#DEF3FD',
//     ground: '#f4e7da',
//     rock: '#d5d5d4',
//     fairy: '#fceaff',
//     poison: '#98d7a5',
//     bug: '#f8d5a3',
//     dragon: '#97b3e6',
//     psychic: '#eaeda1',
//     flying: '#F5F5F5',
//     fighting: '#E6E0D4',
//     normal: '#F5F5F5'
// };

// const main_types = Object.keys(colors);

async function getPokemonApiById(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();

    return pokemon;
}



export default async function getPokemons(id) {
    
    var promise = new Promise(async function (resolve, reject) {
        let pokemosAll = [];

        for (let i = 1; i <= pokemons_number; i++) {
            const poke = await getPokemonApiById(i);
            pokemosAll.push(poke);
        }

        resolve(pokemosAll);
    });

    return promise;
}
