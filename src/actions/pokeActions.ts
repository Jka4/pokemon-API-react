import axios from 'axios';

function getDetailedPokemon(currentPokemon?: string) {
  return (dispatch: any) => {
    dispatch({ type: 'SET_DETAILED_PAGE', payload: {} });

    const URL = `https://pokeapi.co/api/v2/pokemon/${currentPokemon}/`;
    return axios.get(URL).then((response) => {
      const poke = response.data;

      delete poke.sprites.other;
      delete poke.sprites.versions;

      dispatch({ type: 'SET_DETAILED_PAGE', payload: poke });
    });
  };
}

export { getDetailedPokemon };
