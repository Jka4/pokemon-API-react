import { configureStore } from '@reduxjs/toolkit';


import POKEMON from "utils/pokemonDataArray";
import { saveState, loadState } from './localStorage';

import mapKeys from 'lodash.mapkeys';
import throttle from 'lodash.throttle';


let defaultState = {
  randomPokemon: [],
  playing: false,
  pokemonArr: POKEMON,
};

function rootReducer(state = defaultState, action) {
  let actionValue;
  mapKeys(action, (value, key) => key !== 'type' && (actionValue = action[key]));

  switch (action.type) {
    case "ADD_RANDOM_POKEMON":
      return {
        ...state,
        randomPokemon: [...state.randomPokemon, actionValue],
      };
    case "CLEAR_RANDOM_POKEMON":
      return defaultState;
    case "PLAY_PAUSE":
      return {
        ...state,
        playing: !state.playing,
      };
    default:
      return state;
  }
}

const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(),


})

// save store to LS on first load
saveState(store.getState());

store.subscribe(
  throttle(() => saveState(store.getState()), 1000)
);


export default store;
