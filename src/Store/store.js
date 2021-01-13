import { createStore } from "redux";
import POKEMON from "utils/pokemonDataArray";
import * as _ from 'lodash';

let defaultState = {
  randomPokemons: [],
  randomPokemonsFetching: false,
  detailsPage: null,
  playing: false,
  pokemonsArr: POKEMON,
};

// (() => {
//   localStorage.getItem("pokemon_state") == null && localStorage.setItem("pokemon_state", JSON.stringify(defaultState));
//   let getStateFromLocal = localStorage.getItem("pokemon_state");

//   defaultState = getStateFromLocal;
// })();


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

const store = createStore(reducer, undefined);
export default store;

// store.subscribe(() => {
//   let currentState = store.getState();
//   localStorage.setItem("pokemon_state", JSON.stringify(currentState));
// });
