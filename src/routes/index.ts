// export const baseURL = '/pokemon-API-react';

export const pageRoutes = {
  baseUrl: '/',
  blank404: '/404',
  home: '/home',
  detailedPage: (pokemonId = ':pokemonId'): string => `/detailedPage/${pokemonId}`,
  catalogBig: '/catalog/big',
  catalogSmall: '/catalog/small',
  catalog: '/catalog',
};

export const APIRoutes = {
  detailedPokemon: (name: string) => `https://pokeapi.co/api/v2/pokemon/${name}`,
};
