import { http } from 'utils/apiCaching';

const getDetailedPokemon = (currentPokemon) => {
  return (dispatch) => {
    dispatch({ type: 'SET_DETAILED_PAGE', payload: {} });

    const url = `https://pokeapi.co/api/v2/pokemon/${currentPokemon}/`;
    return http().then(async (api) => {
      const response = await api.get(url);
      const poke = response.data;

      delete poke.sprites.other;
      delete poke.sprites.versions;

      dispatch({ type: 'SET_DETAILED_PAGE', payload: poke });
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
