import { createStore } from "redux";
import POKEMON from "utils/pokemonDataArray";
import * as _ from 'lodash';

let defaultState = {
  randomPokemons: [],
  randomPokemonsFetching: false,
  playing: false,
  pokemonsArr: POKEMON,
};


const cacheToLocalStorage = () => {
  localStorage.getItem("pokemon_state") == null && localStorage.setItem("pokemon_state", JSON.stringify(defaultState));
  let getStateFromLocal = JSON.parse(localStorage.getItem("pokemon_state"));

  defaultState = getStateFromLocal;
}
cacheToLocalStorage();


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
  localStorage.setItem("pokemon_state", JSON.stringify(currentState));
});
