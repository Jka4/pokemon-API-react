import { ACTION_TYPE } from 'constants/actionType';

const getRandomPokemon = (pokemonArr: any) => {
  return (dispatch: any) => {
    const randomPokemon = pokemonArr[Math.floor(1 + Math.random() * pokemonArr.length)];
    dispatch({ type: ACTION_TYPE.ADD_RANDOM_POKEMON, payload: randomPokemon });
  };
};

export { getRandomPokemon };
