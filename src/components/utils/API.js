import store from "@Store";
import * as _ from 'lodash';
import axios from 'axios';


export let getRandomPokemon = (amount = 806) => {
  const randomNumber = Math.floor(1 + Math.random() * amount);
  const URL = `https://pokeapi.co/api/v2/pokemon/${randomNumber}/`;
  store.dispatch({ type: "add_counter" });

  axios.get(URL)
    .then((response) => {
      let randomPokemons = response.data;
      store.dispatch({ type: "add_random_pokemons", randomPokemons });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const setDelailedPageData = async (event, isSearch) => {
  let pokemon_id;

  if (typeof event === 'number') {
    pokemon_id = event
  } else {
    if (isSearch === true) {
      pokemon_id = event.currentTarget.closest("LI").dataset.id;
    } else {
      pokemon_id = event.currentTarget.dataset.pokemon_id;
    }
  }

  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon_id}/`;
  await axios.get(URL)
    .then((response) => {
      const page = response.data;

      delete page.sprites.other;
      delete page.sprites.versions;

      findBigImage(page);
      findSmallImagesLength(page);
      store.dispatch({ type: "set_detailsPage", page });
    });
};

const findBigImage = async (sprites) => {
  let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${sprites.id}.png`;
  await axios.get(url) && store.dispatch({ type: "set_bigImage", url });
}

const findSmallImagesLength = (data) => {
  let count = _.countBy(data.sprites, (el) => el !== null).true;
  store.dispatch({ type: "set_smallImageCount", count });
}