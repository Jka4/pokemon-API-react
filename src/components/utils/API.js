import store from "../../store";
import * as _ from 'lodash';

export const setDelailedPageData = event => {
  const pokemon_id = event.currentTarget.dataset.pokemon_id;

  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon_id}/`;
  fetch(URL)
    .then(res => res.json())
    .then(json => {
      const page = json;

      store.dispatch({ type: "set_detailsPage", page });
    });
};

export let getRandomPokemon = () => {
  const randomNumber = Math.floor(1 + Math.random() * 806);
  const URL = `https://pokeapi.co/api/v2/pokemon/${randomNumber}/`;

  fetch(URL)
    .then(res => res.json())
    .then(json => {
      let randomPokemons = json;
      store.dispatch({ type: "add_random_pokemons", randomPokemons });
    });
};
