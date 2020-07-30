import store from "../../store";
import * as _ from 'lodash';



export let getRandomPokemon = () => {
  const randomNumber = Math.floor(1 + Math.random() * 806);
  const URL = `https://pokeapi.co/api/v2/pokemon/${randomNumber}/`;
  store.dispatch({ type: "add_counter" });

  fetch(URL)
    .then(res => res.json())
    .then(json => {
      let randomPokemons = json;
      store.dispatch({ type: "add_random_pokemons", randomPokemons });
    });
};

export const setDelailedPageData = event => {
  const pokemon_id = event.currentTarget.dataset.pokemon_id;

  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon_id}/`;
  fetch(URL)
    .then(res => res.json())
    .then(json => {
      const page = json;

      delete page.sprites.other;
      delete page.sprites.versions;

      findBigImage(page);
      findSmallImagesLength(page);
      store.dispatch({ type: "set_detailsPage", page });
    });
};

const findBigImage = async (sprites) => {
  let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${sprites.id}.png`;
  let response = await fetch(url);

  response.ok && store.dispatch({ type: "set_bigImage", url });
}

const findSmallImagesLength = (data) => {
  let count = _.countBy(data.sprites, (el) => el !== null).true;
  store.dispatch({ type: "set_smallImageCount", count });
}