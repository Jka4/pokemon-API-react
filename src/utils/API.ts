import store from 'Store/store';
import axios from 'axios';

// export let getRandomPokemon = async (amount = 759) => {
//     const randomNumber = Math.floor(1 + Math.random() * amount);
//     const URL = `https://pokeapi.co/api/v2/pokemon/${randomNumber}/`;

//     await axios
//         .get(URL)
//         .then(async (response) => {
//             let randomPokemons = response.data;

//             await store.dispatch({ type: 'ADD_RANDOM_POKEMON', randomPokemons });
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// };

export const setDelailedPageData = async (pokemon_id: number) => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon_id}/`;
    await axios.get(URL).then(async (response) => {
        const page = response.data;

        delete page.sprites.other;
        delete page.sprites.versions;

        await store.dispatch({ type: 'SET_DETAILS_PAGE', page });
    });
};
