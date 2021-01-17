import React from 'react';

export interface JSXElement extends React.ReactElement<any> {}

export interface ChainElements {
  species_name: string;
  id?: number | string;
  image?: string;
  placeholderBase64?: string;
  [key: string]: any;
}

export interface Pokes {
  id: number;
  name: string;
  weight: number;
  image: string;
  imageHQ: string;
  chain: ChainElements[];
  placeholderBase64: string;
  order: number;
  base_experience: number;
  [key: string]: any;
}

export interface spritesType {
  back_default?: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default?: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
  [key: string]: any;
}

export interface IStoreType {
  playing: boolean;
  pokemonArr: Pokes[];
  randomPokemon: Pokes[];
}

export interface pokemonCardType {
  name?: string;
  weight?: number;
  image?: string;
  order?: number;
  placeholderBase64?: string;
  base_experience?: number;
  [key: string]: any;
}