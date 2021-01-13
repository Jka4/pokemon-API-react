/* eslint-disable import/no-anonymous-default-export */
import React, { lazy, useEffect, useState } from 'react';
import { Provider, connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Stats from './Stats';
import Abilities from './Abilities';
import EvolutionForms from './EvolutionForms';
import Paper from '@material-ui/core/Paper';
import Sprites from './Sprites';

import store from 'Store/store';

import POKEMON from 'utils/pokemonDataArray';
import { setDelailedPageData } from 'utils/API';

import './styles/style.scss';

const ImageContainer = lazy(() => import('components/ImageContainer/ImageContainer'));

type PropsType = {
  pokemonArr: DetailsPageTypes[] | null;
  detailsPage: null | any;
};

type bigImageTypes = {
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

const DetailedPage: React.FC<PropsType> = ({ detailsPage }: PropsType) => {
  const { abilities, stats, weight, sprites, name }: DetailsPageTypes = detailsPage || {};
  let [bigImage, setBigImage] = useState<bigImageTypes>();
  let currentPokemon = useLocation().pathname.split('/').pop();

  useEffect(() => {
    const pokemon: any = POKEMON.find((el) => el.name === currentPokemon);
    setBigImage(pokemon)

  }, [currentPokemon])


  useEffect(() => {
    if (detailsPage === null) {
      const pokemon: any = POKEMON.find((el) => el.name === currentPokemon);

      setDelailedPageData(pokemon.id);

      // setTimeout(() => {
      //   setDelailedPageData(pokemon.id);

      // }, 2000);
    }
  }, [detailsPage, currentPokemon]);


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

        <EvolutionForms currentPokemon={currentPokemon} />
        <div className="mainInformation">
          <div className="skills">
            <Stats weight={weight} stats={stats} />
            <Abilities abilities={abilities} />
          </div>

          <Paper elevation={3} className="bigImage">
            {bigImage && (
              <ImageContainer
                url={bigImage.imageHQ}
                cn={'bigImage'}
                fallback={fallbackEvo(bigImage.placeholderBase64)}
              />
            )}
          </Paper>
        </div>

        <Sprites sprites={sprites} />
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
