import { configureStore } from '@reduxjs/toolkit';

import thunk from 'redux-thunk';

import POKEMON from 'utils/pokemonDataArray';
import { ls } from 'utils/localStorage';

import throttle from 'lodash.throttle';

let defaultState = {
  randomPokemon: [],
  pokemonArr: POKEMON,
  detailedPage: {},
};

function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_RANDOM_POKEMON':
      return { ...state, randomPokemon: [...state.randomPokemon, action.payload] };
    case 'CLEAR_RANDOM_POKEMON':
      return { ...state, randomPokemon: [] };

    default:
      return state;
  }
}

const store = configureStore({
  reducer: rootReducer,
  preloadedState: ls.load(),
  middleware: [thunk],
});

store.subscribe(throttle(() => ls.save(store.getState()), 1000));

export default store;
