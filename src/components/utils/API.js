import store from "../../store";

export let setDelailedPageData = event => {
  let pokemon_id = event.target.dataset.pokemon_id;

  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon_id}/`;
  fetch(URL)
    .then(res => res.json())
    .then(json => {
      let page = json;

      store.dispatch({ type: "set_detailsPage", page });
    });
};

export let getRandomPokemon = () => {
  store.dispatch({ type: "fetching_random_pokemon" });

  const URL = `https://pokeapi.co/api/v2/pokemon/${Math.floor(
    Math.random() * 807
  )}/`;
  fetch(URL)
    .then(res => res.json())
    .then(json => {
      let randomPokemons = json;

      store.dispatch({ type: "add_random_pokemons", randomPokemons });
      store.dispatch({ type: "fetching_random_pokemon" });
    });
};
