import { PokesTypes } from 'types/index';

type stateType = {
  randomPokemon: PokesTypes[];
  pokemonArr: PokesTypes[];
};

export const saveState = (state: stateType) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('pokemon_state', serializedState);
  } catch (error) {
    console.log('Ooops, state not saved to localStorage');
    console.log('=> ', error);
  }
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('pokemon_state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};
