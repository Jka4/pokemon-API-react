import { createStore } from "redux";
import ls from "local-storage";

let defaultState = {
  randomPokemons: [],
  searchResult: [],
  inputValue: "",
  detailsPage: "",
  playing: false,
  SHOW_HIDE_RESULT: false
};

let chachingStateToLocalStorage = () => {
  ls.get("state") == null && ls.set("state", defaultState);
  let getStateFromLocal = ls.get("state");

  defaultState = getStateFromLocal;
};

chachingStateToLocalStorage();

function counter(state = defaultState, action) {
  switch (action.type) {
    case "add_random_pokemons":
      return {
        ...state,
        randomPokemons: [...state.randomPokemons, action.randomPokemons]
      };
    case "clear_random_pokemons":
      return {
        ...state,
        randomPokemons: []
      };
    case "set_input_value":
      return {
        ...state,
        inputValue: action.value
      };
    case "set_searchResult":
      return {
        ...state,
        searchResult: action.result
      };
    case "set_detailsPage":
      return {
        ...state,
        detailsPage: action.page
      };
    case "delete_detailsPage":
      return {
        ...state,
        detailsPage: ""
      };
    case "PLAY_PAUSE":
      return {
        ...state,
        playing: !state.playing
      };
    case "SHOW_HIDE_RESULT":
      return {
        ...state,
        SHOW_HIDE_RESULT: !state.SHOW_HIDE_RESULT
      };
    default:
      return state;
  }
}

const store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

store.subscribe(() => {
  let currentState = store.getState();
  // console.clear();
  // console.log("store", currentState);

  ls.set("state", currentState);
});
