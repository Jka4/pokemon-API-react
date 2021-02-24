/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import ListView from './views/ListView';
import CatalogView from './views/CatalogView';

import AppsIcon from '@material-ui/icons/Apps';
import BlurOnOutlinedIcon from '@material-ui/icons/BlurOnOutlined';

import { PokesTypes } from 'types/index';

import styled from 'styled-components/macro';

const PokemonPageAll: React.FC = () => {
  const pokemonArr = useSelector((state: PokesTypes) => state.pokemonArr);

  const [viewTypeIsCatalog, setViewTypeIsCatalog] = useState<boolean>(!false);

  return (
    <>
      <ViewType>
        <ViewTypeInner>
          <InnerBlock onClick={() => setViewTypeIsCatalog(!viewTypeIsCatalog)}>
            <Title>{!viewTypeIsCatalog ? 'List view' : 'Catalog view'}</Title>
            <Separator>|</Separator>
            <Icon>{!viewTypeIsCatalog ? <BlurOnOutlinedIcon /> : <AppsIcon />}</Icon>
          </InnerBlock>
        </ViewTypeInner>
      </ViewType>

      {!viewTypeIsCatalog ? <ListView pokemonArr={pokemonArr} /> : <CatalogView pokemonArr={pokemonArr} />}
    </>
  );
};

const ViewType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  width: 100%;
`;

const Title = styled.span`
  font-size: 24px;
  margin-right: 5px;
`;

const Separator = styled.span`
  margin-top: 2px;
  margin-right: 10px;
  font-size: 24px;
`;

const Icon = styled.div`
  margin-top: 4px;
  cursor: pointer;
  width: 20px;
`;

const ViewTypeInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 90%;
`;

const InnerBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 15px 5px 15px;

  &:hover {
    box-shadow: 5px 3px 11px 1px #000000;
  }

  &:active {
    box-shadow: 0 1px 0 #00823f;
  }
`;

export default PokemonPageAll;
