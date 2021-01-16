/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Provider, connect } from 'react-redux';
import store from 'Store/store';

import Stats from './Stats';
import Abilities from './Abilities';
import Sprites from './Sprites';
import EvolutionForms from './EvolutionForms';
import BigImage from './BigImage';

import axios from 'axios';

import './styles/style.scss';

import { Pokes, IStoreType } from 'types/index';

interface DetailedPageType {
  pokemonArr: Pokes[];
}

const DetailedPage: React.FC<DetailedPageType> = ({ pokemonArr = [] }: DetailedPageType) => {
  const [bigImage, setBigImage] = useState<Pokes>();
  const [detailedPage, setDetailedPage] = useState<any>({});

  const { abilities, stats, weight, sprites } = detailedPage;

  const currentPokemon = useLocation().pathname.split('/').pop();

  useEffect(() => {
    setDetailedPage({});
    let isSubscribed: boolean = true;

    const URL = `https://pokeapi.co/api/v2/pokemon/${currentPokemon}/`;
    axios.get(URL).then(async (response) => {
      const poke = response.data;

      delete poke.sprites.other;
      delete poke.sprites.versions;

      isSubscribed && setDetailedPage(poke);
    });

    return (): void => {
      isSubscribed = false;
    };
  }, [currentPokemon]);

  useEffect(() => {
    const pokemon: Pokes | undefined = pokemonArr.find((el) => el.name === currentPokemon);
    pokemon && setBigImage(pokemon);
  }, [currentPokemon, pokemonArr]);

  return (
    <>
      <div className="detailedPage">
        <div className="name">{currentPokemon || 'POKEMON'}</div>

        <EvolutionForms currentPokemon={currentPokemon} pokemonArr={pokemonArr} />
        <div className="mainInformation">
          <div className="skills">
            <Stats weight={weight} stats={stats} />
            <Abilities abilities={abilities} />
          </div>
          <BigImage bigImage={bigImage} />
        </div>

        <Sprites sprites={sprites} />
      </div>
    </>
  );
};

// export default DetailedPage;

const ConnectedDetailedPage = connect((store: IStoreType) => {
  return {
    pokemonArr: store.pokemonArr,
  };
})(DetailedPage);

export default (props = {}) => (
  <Provider store={store}>
    <ConnectedDetailedPage {...props} />
  </Provider>
);
