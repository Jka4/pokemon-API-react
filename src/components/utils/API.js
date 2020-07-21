import store from "../../store";

export const setDelailedPageData = event => {
  const pokemon_id = event.currentTarget.dataset.pokemon_id;

  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon_id}/`;
  fetch(URL)
    .then(res => res.json())
    .then(json => {
      const page = json;

      findBigImage(page);
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

export const findBigImage = async (sprites) => {
  let name;
  let counter = 0;

  sprites.sprites !== undefined && Object.keys(sprites.sprites).forEach((i) => {
    if (sprites.sprites[i] !== null) {
      name = sprites.sprites[i].replace(/\D+/g, "");
      counter++;
    }
  });

  let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/${name}.png`;
  let response = await fetch(url);

  if (response.ok) {
    store.dispatch({ type: "set_bigImage", url });
  }
}