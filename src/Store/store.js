import { createStore } from "redux";
import ls from "local-storage";
import POKEMONS from "@pokemonDataArray";

let defaultState = {
  randomPokemons: [],
  searchResult: [],
  inputValue: "",
  detailsPage: "",
  playing: false,
  showResult: false,
  isFetching: false,
  smallImageCount: 0,
  counter: 0,
  pokemonsArr: POKEMONS
};

let chachingStateToLocalStorage = () => {
  ls.get("pokemon_pokedex_state") == null && ls.set("pokemon_pokedex_state", defaultState);
  let getStateFromLocal = ls.get("pokemon_pokedex_state");

  defaultState = getStateFromLocal;
};
chachingStateToLocalStorage();

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_RANDOM_POKEMON":
      return {
        ...state,
        randomPokemons: [...state.randomPokemons, action.randomPokemons]
      };
    case "CLEAR_RANDOM_POKEMON":
      return {
        ...state,
        randomPokemons: []
      };
    case "CLEAR_DETAILS_PAGE":
      return {
        ...state,
        detailsPage: ''
      };
    case "SET_DETAILS_PAGE":
      return {
        ...state,
        detailsPage: action.page
      };
    case "SET_SMALL_IMAGES_COUNT":
      return {
        ...state,
        smallImageCount: action.count
      };
    case "PLAY_PAUSE":
      return {
        ...state,
        playing: !state.playing
      };
    case "SHOW_RESULT":
      return {
        ...state,
        showResult: action.show
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
  ls.set("pokemon_pokedex_state", currentState);
});
