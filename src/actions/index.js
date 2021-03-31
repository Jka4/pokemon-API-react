import { http } from 'utils/apiCaching';

const getDetailedPokemon = (name) => {
  return (dispatch) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    return http().then(async (api) => {
      const pokemon = (await api.get(url)).data;

      delete pokemon.sprites.other;
      delete pokemon.sprites.versions;

      return pokemon;
    });
  };
};

const getRandomPokemon = (pokemonArr) => {
  return (dispatch) => {
    const randomPokemon = pokemonArr[Math.floor(1 + Math.random() * pokemonArr.length)];
    dispatch({ type: 'ADD_RANDOM_POKEMON', payload: randomPokemon });
  };
};

export { getDetailedPokemon, getRandomPokemon };
