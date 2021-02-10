import { configureStore } from '@reduxjs/toolkit';

import thunk from 'redux-thunk';

import POKEMON from "utils/pokemonDataArray";
import { saveState, loadState } from './localStorage';

import mapKeys from 'lodash.mapkeys';
import throttle from 'lodash.throttle';


let defaultState = {
  randomPokemon: [],
  pokemonArr: POKEMON,
};

function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_RANDOM_POKEMON":
      return {
        ...state,
        randomPokemon: [...state.randomPokemon, action.payload],
      };
    case "CLEAR_RANDOM_POKEMON":
      return {
        ...state,
        randomPokemon: [],
      };
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
  preloadedState: loadState(),
  middleware: middlewares,
})

store.subscribe(
  throttle(() => saveState(store.getState()), 1000)
);

export default store;
