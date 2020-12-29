import { createStore } from "redux";
import ls from "local-storage";
// import POKEMONS from "utils/pokemonDataArray";
import CryptoJS from "crypto-js";
import * as _ from 'lodash';
import React from "react";

const POKEMONS = React.lazy(() => import('utils/pokemonDataArray'));

const APP_SECRET_KEY = "mySecretKey_kjkszpj";


let defaultState = {
  randomPokemons: [],
  randomPokemonsFetching: false,
  detailsPage: null,
  playing: false,
  pokemonsArr: POKEMONS,
};

const chachingStateToLocalStorage = () => {
  let encrypt = CryptoJS.AES.encrypt(
    JSON.stringify(defaultState),
    APP_SECRET_KEY
  ).toString();

  ls.get("pokemon_state") == null && ls.set("pokemon_state", encrypt);
  let getStateFromLocal = ls.get("pokemon_state");

  let bytes = CryptoJS.AES.decrypt(getStateFromLocal, APP_SECRET_KEY);
  let decrypt = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  defaultState = decrypt;
};
chachingStateToLocalStorage();

function reducer(state = defaultState, action) {
  let actionValue;
  _.mapKeys(action, (value, key) => key !== 'type' && (actionValue = action[key]));

  switch (action.type) {
    case "ADD_RANDOM_POKEMON":
      return {
        ...state,
        randomPokemons: [...state.randomPokemons, actionValue],
      };
    case "CLEAR_RANDOM_POKEMON":
      return {
        ...state,
        randomPokemons: [],
      };
    case "RANDOM_POKEMON_FETCHING_START":
      return {
        ...state,
        randomPokemonsFetching: true,
      };
    case "RANDOM_POKEMON_FETCHING_END":
      return {
        ...state,
        randomPokemonsFetching: false,
      };
    case "CLEAR_DETAILS_PAGE":
      return {
        ...state,
        detailsPage: null,
      };
    case "SET_DETAILS_PAGE":
      return {
        ...state,
        detailsPage: actionValue,
      };
    case "PLAY_PAUSE":
      return {
        ...state,
        playing: !state.playing,
      };
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

store.subscribe(() => {
  let currentState = store.getState();
  let encrypt = CryptoJS.AES.encrypt(
    JSON.stringify(currentState),
    APP_SECRET_KEY
  ).toString();

  ls.set("pokemon_state", encrypt);
});
