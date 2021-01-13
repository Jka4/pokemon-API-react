/* eslint-disable import/no-anonymous-default-export */
import React, { lazy, useEffect, useState } from 'react';
import { Provider, connect } from 'react-redux';
// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import Stats from './Stats';
import Abilities from './Abilities';
import EvolutionForms from './EvolutionForms';
import Paper from '@material-ui/core/Paper';
import Sprites from './Sprites';

import store from 'Store/store';
import find from 'lodash.find';

import POKEMON from 'utils/pokemonDataArray';
import { setDelailedPageData } from 'utils/API';

import './styles/style.scss';

const ImageContainer = lazy(() => import('components/ImageContainer/ImageContainer'));

type PropsType = {
  pokemonArr: DetailsPageTypes[] | null;
  detailsPage: null | any;
  pathname: string;
};

type evolutionChainTypes = {
  placeholderBase64: string;
  imageHQ: string;
};

type DetailsPageTypes = {
  weight: number;
  abilities: {
    ability: {
      url: string;
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  sprites: any[string];
  name: string;
};

const DetailedPage: React.FC<PropsType> = ({ detailsPage, pathname }: PropsType) => {
  const [evolutionChain, setEvolutionChain] = useState<evolutionChainTypes>();
  const { abilities, stats, weight, sprites, name }: DetailsPageTypes = detailsPage || {};

  useEffect(() => {
    if (detailsPage) {
      let pokemonObj = find(POKEMON, (o) => o.name === detailsPage.name);
      pokemonObj && setEvolutionChain(pokemonObj);
    }
  }, [detailsPage]);

  useEffect(() => {
    if (detailsPage === null) {
      const pokemonName = pathname.split('/').pop();
      const pokemon: any = POKEMON.find((el) => el.name === pokemonName);

      setDelailedPageData(pokemon.id);
    }
  });

  const fallbackEvo = (placeholderBase64: string) => {
    return (
      <>
        <img src={placeholderBase64} className="placeholderBase64 bigImage" loading='lazy' alt="" />
      </>
    );
  };

  return (
    <>
      <div className="detailedPage">
        <div className="name">{name || 'POKEMON'}</div>

        <Sprites sprites={sprites} />
        <div className="mainInformation">
          <div className="skills">
            <Stats weight={weight} stats={stats} />
            <Abilities abilities={abilities} />
          </div>

          <Paper elevation={3} className="bigImage">
            {evolutionChain && (
              <ImageContainer
                url={evolutionChain.imageHQ}
                cn={'bigImage'}
                fallback={fallbackEvo(evolutionChain.placeholderBase64)}
              />
            )}
          </Paper>
        </div>

        <EvolutionForms evolutionChain={evolutionChain} currentPokemon={name} pokemonsArr={POKEMON} />
      </div>
    </>
  );
};

const ConnectedDetailedPage = connect((store: PropsType) => {
  return {
    detailsPage: store.detailsPage,
  };
})(DetailedPage);

export default (props: any) => (
  <Provider store={store}>
    <ConnectedDetailedPage {...props} />
  </Provider>
);
