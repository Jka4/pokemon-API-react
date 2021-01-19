/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import { Provider, connect } from 'react-redux';

import store from 'Store/store';

import ListView from './ListView';
import CatalogView from './CatalogView';

import AppsIcon from '@material-ui/icons/Apps';
import BlurOnOutlinedIcon from '@material-ui/icons/BlurOnOutlined';

import { Pokes, IStoreType } from 'types/index';

const PokemonPageAll: React.FC<Pokes> = ({ pokemonDataArray }: Pokes) => {
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

      {!viewTypeIsCatalog ? (
        <ListView pokemonDataArray={pokemonDataArray} />
      ) : (
        <CatalogView pokemonDataArray={pokemonDataArray} />
      )}
    </>
  );
};

const ConnectedPokemonPageAll = connect((store: IStoreType) => {
  return {
    pokemonDataArray: store.pokemonArr,
  };
})(PokemonPageAll);

export default (props = {}) => (
  <Provider store={store}>
    <ConnectedPokemonPageAll {...props} />
  </Provider>
);
