import { createStore } from "redux";
import ls from "local-storage";

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
  bigImage: ''
};

let chachingStateToLocalStorage = () => {
  ls.get("state_pokemon") == null && ls.set("state_pokemon", defaultState);
  let getStateFromLocal = ls.get("state_pokemon");

  defaultState = getStateFromLocal;
};
chachingStateToLocalStorage();

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "add_random_pokemons":
      return {
        ...state,
        randomPokemons: [...state.randomPokemons, action.randomPokemons]
      };
    case "add_counter":
      return {
        ...state,
        counter: state.randomPokemons.length + 1
      };
    case "clear_random_pokemons":
      return {
        ...state,
        randomPokemons: []
      };
    case "clear_detailsPage":
      return {
        ...state,
        detailsPage: ''
      };
    case "clear_bigImage":
      return {
        ...state,
        bigImage: ''
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
    case "set_bigImage":
      return {
        ...state,
        bigImage: action.url
      };
    case "set_smallImageCount":
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
  ls.set("state_pokemon", currentState);
});
