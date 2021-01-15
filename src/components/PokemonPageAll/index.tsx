/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import { Provider, connect } from 'react-redux';

import store from 'Store/store';

import ListView from './ListView';
import CatalogView from './CatalogView';

import AppsIcon from '@material-ui/icons/Apps';
import BlurOnOutlinedIcon from '@material-ui/icons/BlurOnOutlined';

type PokemonPageAllType = {
  pokemonDataArray: {
    chain: {
      species_name: string;
    }[];
    id: 0;
    image: string;
    imageHQ: string;
    name: string;
    placeholderBase64: string;
    weight: number;
  }[];
};

const PokemonPageAll: React.FC<PokemonPageAllType> = ({ pokemonDataArray = [] }: PokemonPageAllType) => {
  const [viewTypeIsCatalog, setViewTypeIsCatalog] = useState<boolean>(true);

  return (
    <>
      <div className="viewType">
        <div className="viewTypeInner">
          <div className="innerBlock" onClick={() => setViewTypeIsCatalog(!viewTypeIsCatalog)}>
            {!viewTypeIsCatalog ? (
              <>
                <span>List view:</span>
                <span className="separator">|</span>
                <div className="list">
                  <BlurOnOutlinedIcon />
                </div>
              </>
            ) : (
              <>
                <span>Catalog view:</span>
                <span className="separator">|</span>
                <div className="catalog">
                  <AppsIcon />
                </div>
              </>
            )}
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

const ConnectedPokemonPageAll = connect((store: { pokemonArr: any[] }) => {
  return {
    pokemonDataArray: store.pokemonArr,
  };
})(PokemonPageAll);

export default (props = {}) => (
  <Provider store={store}>
    <ConnectedPokemonPageAll {...props} />
  </Provider>
);
