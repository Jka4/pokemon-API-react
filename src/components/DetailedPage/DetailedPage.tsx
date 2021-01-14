/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Stats from './Stats';
import Abilities from './Abilities';
import EvolutionForms from './EvolutionForms';
import Sprites from './Sprites';
import BigImage from './BigImage';

import POKEMON from 'utils/pokemonDataArray';
import axios from 'axios';

import './styles/style.scss';

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

const DetailedPage: React.FC<PropsType> = () => {
  let [bigImage, setBigImage] = useState<bigImageTypes>();
  let [detailsPage, setDetailsPage] = useState<any>();

  const currentPokemon = useLocation().pathname.split('/').pop();
  const { abilities, stats, weight, sprites }: DetailsPageTypes = detailsPage || {};

  useEffect(() => {
    setDetailsPage({});

    const URL = `https://pokeapi.co/api/v2/pokemon/${currentPokemon}/`;
    axios.get(URL).then(async (response) => {
      const poke = response.data;

      delete poke.sprites.other;
      delete poke.sprites.versions;

      setDetailsPage(poke);
    });
  }, [currentPokemon]);

  useEffect(() => {
    const pokemon: any = POKEMON.find((el) => el.name === currentPokemon);
    setBigImage(pokemon);
  }, [currentPokemon]);

  return (
    <>
      <div className="detailedPage">
        <div className="name">{currentPokemon || 'POKEMON'}</div>

        <EvolutionForms currentPokemon={currentPokemon} />
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
