import { ACTION_TYPE } from 'constants/actionType';
import POKEMON from 'utils/pokemonDataArray';

let defaultState = {
  randomPokemon: [],
  pokemonArr: POKEMON,
  detailedPage: {},
};

function pokemonsReducer(state = defaultState, action: any) {
  switch (action.type) {
    case ACTION_TYPE.ADD_RANDOM_POKEMON:
      return { ...state, randomPokemon: [...state.randomPokemon, action.payload] };
    case ACTION_TYPE.CLEAR_RANDOM_POKEMON:
      return { ...state, randomPokemon: [] };
    case ACTION_TYPE.SET_DETAILED_PAGE:
      return { ...state, detailedPage: action.payload };

    default:
      return state;
  }
}

export default pokemonsReducer;
