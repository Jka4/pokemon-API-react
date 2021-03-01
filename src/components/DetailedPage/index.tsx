/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Stats from './views/Stats';
import Abilities from './views/Abilities';
import Sprites from './views/Sprites';
import EvolutionForms from './views/EvolutionForms';
import BigImage from './views/BigImage';

import { PokesTypes } from 'types/index';

import { getDetailedPokemon } from 'actions';

import styled from 'styled-components';

interface DetailedPageType {
  pokemonArr: PokesTypes[];
  detailedPage: PokesTypes;
}

const DetailedPage: React.FC = () => {
  let pokemonArr = useSelector((state: DetailedPageType) => state.pokemonArr);
  let detailedPage = useSelector((state: DetailedPageType) => state.detailedPage);

  const [bigImage, setBigImage] = useState<PokesTypes>();
  const currentPokemon = useLocation().pathname.split('/').pop();
  const { abilities, stats, weight, sprites } = detailedPage;
  const dispatch = useDispatch();

  useEffect(() => {
    let isSubscribed: boolean = true;
    if (isSubscribed) {
      dispatch(getDetailedPokemon(currentPokemon));
    }
    return (): void => {
      isSubscribed = false;
    };
  }, [currentPokemon, dispatch]);

  useEffect(() => {
    const pokemon: PokesTypes | undefined = pokemonArr.find((el) => el.name === currentPokemon);
    pokemon && setBigImage(pokemon);
  }, [currentPokemon, pokemonArr]);

  return (
    <>
      <DetailedPageWrapper>
        <Name>{currentPokemon || 'POKEMON'}</Name>

        <EvolutionForms currentPokemon={currentPokemon} pokemonArr={pokemonArr} />

        <MainInformation>
          <Skills>
            <Stats weight={weight} stats={stats} />
            <Abilities abilities={abilities} />
          </Skills>
          <BigImage bigImage={bigImage} />
        </MainInformation>

        <Sprites sprites={sprites} />
      </DetailedPageWrapper>
    </>
  );
};

const DetailedPageWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: auto;
`;

const Name = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  font-size: 4rem;

  &::first-letter {
    text-transform: uppercase;
  }
`;

const MainInformation = styled.div`
  min-height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
  margin-bottom: 100px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
    width: 100%;
    padding: 20px;
    margin-bottom: 10px;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 30px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    order: 2;
    margin-top: 20px;
    width: 100%;
  }

  height: auto;
`;

export default DetailedPage;