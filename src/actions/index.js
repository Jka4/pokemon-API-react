import axios from 'axios';
import { ls } from 'utils/localStorage';

function getDetailedPokemon(currentPokemon) {
  return (dispatch) => {
    if (ls.cache[currentPokemon] !== undefined) {
      dispatch({ type: 'SET_DETAILED_PAGE', payload: ls.cache[currentPokemon] });
      return;
    }

    dispatch({ type: 'SET_DETAILED_PAGE', payload: {} });

    const URL = `https://pokeapi.co/api/v2/pokemon/${currentPokemon}/`;
    return axios.get(URL).then((response) => {
      const poke = response.data;

      delete poke.sprites.other;
      delete poke.sprites.versions;

      dispatch({ type: 'SET_DETAILED_PAGE', payload: poke });
      ls.cache[currentPokemon] = poke;
      ls.save(ls.cache, 'API');
    });
  };
}

export { getDetailedPokemon };
