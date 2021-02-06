import axios from 'axios';

export const getDetailedPokemon = (currentPokemon?: string) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${currentPokemon}/`;

  return axios.get(URL).then((response) => {
    const poke = response.data;

    delete poke.sprites.other;
    delete poke.sprites.versions;

    return poke;
  });
};
