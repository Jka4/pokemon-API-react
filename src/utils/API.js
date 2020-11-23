import store from "@Store";
import axios from "axios";

export let getRandomPokemon = async (amount = 806) => {
  const randomNumber = Math.floor(1 + Math.random() * amount);
  const URL = `https://pokeapi.co/api/v2/pokemon/${randomNumber}/`;

  store.dispatch({ type: "RANDOM_POKEMON_FETCHING_START" });

  await axios
    .get(URL)
    .then(async (response) => {
      let randomPokemons = response.data;

      await store.dispatch({ type: "ADD_RANDOM_POKEMON", randomPokemons });
      await store.dispatch({ type: "RANDOM_POKEMON_FETCHING_END" });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const setDelailedPageData = async (event, isSearch) => {
  let pokemon_id;

  if (typeof event === "number") {
    pokemon_id = event;
  } else {
    if (isSearch === true) {
      pokemon_id = event.currentTarget.closest("LI").dataset.id;
    } else {
      pokemon_id = event.currentTarget.dataset.pokemon_id;
    }
  }

  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon_id}/`;
  await axios.get(URL).then(async (response) => {
    const page = response.data;

    delete page.sprites.other;
    delete page.sprites.versions;

    await store.dispatch({ type: "SET_DETAILS_PAGE", page });
  });
};
