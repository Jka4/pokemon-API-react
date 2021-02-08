/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import ListView from './views/ListView';
import CatalogView from './views/CatalogView';

import AppsIcon from '@material-ui/icons/Apps';
import BlurOnOutlinedIcon from '@material-ui/icons/BlurOnOutlined';

import { PokesTypes } from 'types/index';

import './styles/style.scss';

const PokemonPageAll: React.FC = () => {
  const pokemonArr = useSelector((state: PokesTypes) => state.pokemonArr);

  const [viewTypeIsCatalog, setViewTypeIsCatalog] = useState<boolean>(false);

  return (
    <>
      <div className="viewType">
        <div className="viewTypeInner">
          <div className="innerBlock" onClick={() => setViewTypeIsCatalog(!viewTypeIsCatalog)}>
            <span>{!viewTypeIsCatalog ? 'List view:' : 'Catalog view:'}</span>
            <span className="separator">|</span>
            <div className="viewTypeIcon">{!viewTypeIsCatalog ? <BlurOnOutlinedIcon /> : <AppsIcon />}</div>
          </div>
        </div>
      </div>

      {!viewTypeIsCatalog ? <ListView pokemonArr={pokemonArr} /> : <CatalogView pokemonArr={pokemonArr} />}
    </>
  );
};

export default PokemonPageAll;
