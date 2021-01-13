import store from 'Store/store';
import axios from 'axios';

export let getRandomPokemon = async (amount = 722) => {
  const randomNumber = Math.floor(1 + Math.random() * amount);
  const URL = `https://pokeapi.co/api/v2/pokemon/${randomNumber}/`;

  await axios
    .get(URL)
    .then(async (response) => {
      let randomPokemon = response.data;

      await store.dispatch({ type: 'ADD_RANDOM_POKEMON', randomPokemon });
    })
    .catch((error) => {
      console.log(error);
    });
};
