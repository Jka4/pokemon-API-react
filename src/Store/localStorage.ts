import { PokesTypes } from 'types/index';
import { version } from '../../package.json';

type stateType = {
  randomPokemon: PokesTypes[];
  pokemonArr: PokesTypes[];
};

const keyLiteral = `pokemon_state_${version}`;

export const saveState = (state: stateType) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(keyLiteral, serializedState);
  } catch (error) {
    console.log('Ooops, state not saved to localStorage');
    console.log('=> ', error);
  }
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(keyLiteral);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};
