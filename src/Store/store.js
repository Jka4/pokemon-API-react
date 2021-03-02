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
    case 'SET_DETAILED_PAGE':
      return { ...state, detailedPage: action.payload };
    default:
      return state;
  }
}

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

const store = configureStore({
  reducer: rootReducer,
  preloadedState: ls.load(),
  middleware: middlewares,
});

store.subscribe(throttle(() => ls.save(store.getState()), 1000));

export default store;
