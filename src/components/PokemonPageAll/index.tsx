/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import ListView from './views/ListView';
import CatalogView from './views/CatalogView';

import AppsIcon from '@material-ui/icons/Apps';
import BlurOnOutlinedIcon from '@material-ui/icons/BlurOnOutlined';

import { PokesTypes } from 'types/index';

import './styles/style.scss';

import styled from 'styled-components/macro';

const PokemonPageAll: React.FC = () => {
  const pokemonArr = useSelector((state: PokesTypes) => state.pokemonArr);

  const [viewTypeIsCatalog, setViewTypeIsCatalog] = useState<boolean>(!false);

  return (
    <>
      <ViewType>
        <ViewTypeInner>
          <InnerBlock onClick={() => setViewTypeIsCatalog(!viewTypeIsCatalog)}>
            <span>{!viewTypeIsCatalog ? 'List view:' : 'Catalog view:'}</span>
            <span className="separator">|</span>
            <div className="viewTypeIcon">{!viewTypeIsCatalog ? <BlurOnOutlinedIcon /> : <AppsIcon />}</div>
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

  span {
    margin-right: 10px;
    font-size: 24px;
  }

  .separator {
    margin-top: 2px;
  }

  .viewTypeIcon {
    margin-top: 4px;
    cursor: pointer;
    width: 20px;
  }
`;

export default PokemonPageAll;
