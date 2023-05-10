import { ACTION_TYPE } from 'constants/actionType';
import { APIRoutes } from 'routes';
import { fetch } from 'utils/apiCaching';

const getDetailedPokemon = (name: any) => {
  const url = APIRoutes.detailedPokemon(name);

  return (dispatch: any) => {
    fetch()
      .then(async (api) => {
        const pokemon = (await api.get(url)).data;

        delete pokemon.sprites.other;
        delete pokemon.sprites.versions;

        return pokemon;
      })
      .then((res) => {
        dispatch({ type: ACTION_TYPE.SET_DETAILED_PAGE, payload: res });
      })
      .catch((error) => {
        console.log('🚀 ~ error', error);
      });
  };
};

export default getDetailedPokemon;
