import store from "../../store";
import * as _ from 'lodash';
import axios from 'axios';


export let getRandomPokemon = () => {
  const randomNumber = Math.floor(1 + Math.random() * 806);
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

export const setDelailedPageData = (event, isSearch) => {
  let pokemon_id;

  if (isSearch === true) {
    pokemon_id = event.currentTarget.closest("LI").dataset.id;
  } else {
    pokemon_id = event.currentTarget.dataset.pokemon_id;
  }

  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon_id}/`;
  axios.get(URL)
    .then((response) => {
      const page = response.data;

      delete page.sprites.other;
      delete page.sprites.versions;

      findBigImage(page);
      findSmallImagesLength(page);
      store.dispatch({ type: "set_detailsPage", page });
    })
    .catch((error) => {
      console.log(error);
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