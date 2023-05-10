/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

import Stats from './views/Stats';
import Abilities from './views/Abilities';
import Sprites from './views/Sprites';
import EvolutionForms from './views/EvolutionForms';
import BigImage from './views/BigImage';

import { PokesTypes } from 'types/index';

import styled from 'styled-components';
import { detailedPageSelector, pokemonArrSelector } from 'selectors';
import getDetailedPokemon from 'ac/getDetailedPokemon';

interface DetailedPageType {
  pokemonArr: PokesTypes[];
  detailedPage: PokesTypes;
}

const DetailedPage: React.FC = () => {
  const {
    params: { pokemonId: currentName },
  } = useRouteMatch<any>();

  const dispatch = useDispatch();

  const pokemonArr = useSelector(pokemonArrSelector);
  const detailedPage = useSelector(detailedPageSelector);

  const [bigImageProps, setBigImageProps] = useState<any>({});

  const { abilities = [], stats = [], weight = 0, sprites = {} } = detailedPage;
  const { imageHQ = '', placeholderBase64 = '' } = bigImageProps;

  useEffect(() => {
    dispatch(getDetailedPokemon(currentName));
  }, [currentName, pokemonArr]);

  useEffect(() => {
    const pokemon: any = pokemonArr.find((el: any) => el.name === currentName);
    setBigImageProps(pokemon);
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
