/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';

import Stats from './views/Stats';
import Abilities from './views/Abilities';
import Sprites from './views/Sprites';
import EvolutionForms from './views/EvolutionForms';
import BigImage from './views/BigImage';

import './styles/style.scss';

import { PokesTypes } from 'types/index';

import { getDetailedPokemon } from 'utils/API';

interface DetailedPageType {
  pokemonArr: PokesTypes[];
}

const DetailedPage: React.FC = () => {
  let pokemonArr = useSelector((state: DetailedPageType) => state.pokemonArr);

  const [bigImage, setBigImage] = useState<PokesTypes>();
  const [detailedPage, setDetailedPage] = useState<any>({});

  const currentPokemon = useLocation().pathname.split('/').pop();
  const { abilities, stats, weight, sprites } = detailedPage;

  useEffect(() => {
    setDetailedPage({});

    let isSubscribed: boolean = true;

    if (isSubscribed) {
      getDetailedPokemon(currentPokemon).then((response) => {
        setDetailedPage(response);
      });
    }

    return (): void => {
      isSubscribed = false;
      // pokemonArr = [];
    };
  }, [currentPokemon]);

  useEffect(() => {
    const pokemon: PokesTypes | undefined = pokemonArr.find((el) => el.name === currentPokemon);
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

export default DetailedPage;
