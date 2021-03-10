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

  const [poke, setPoke] = useState<PokesTypes>();
  const currentName = useLocation().pathname.split('/').pop();
  const dispatch = useDispatch();

  const { abilities = [], stats = [], weight = 0, sprites = {} } = detailedPage;
  const { imageHQ = '', placeholderBase64 = '' } = { ...poke };

  useEffect(() => {
    let isSubscribed: boolean = true;
    if (isSubscribed) {
      dispatch(getDetailedPokemon(currentName));
    }
    return (): void => {
      isSubscribed = false;
      dispatch({ type: 'CLEAR_DETAILED_PAGE' });
    };
  }, [currentName, dispatch]);

  useEffect(() => {
    const pokemon: PokesTypes | undefined = pokemonArr.find((el) => el.name === currentName);
    pokemon && setPoke(pokemon);
  }, [currentName, pokemonArr]);

  return (
    <>
      <DetailedPageWrapper>
        <Name>{currentName || '...'}</Name>

        <EvolutionForms currentPokemon={currentName} pokemonArr={pokemonArr} />

        <MainInformation>
          <Skills>
            <Stats weight={weight} stats={stats} />
            <Abilities abilities={abilities} />
          </Skills>
          <BigImage imageHQ={imageHQ} placeholderBase64={placeholderBase64} />
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
