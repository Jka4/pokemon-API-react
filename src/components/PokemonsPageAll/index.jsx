/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { Provider, connect } from "react-redux";
import PropTypes from "prop-types";

import store from "@Store";

import ListView from "@ListView";
import CatalogView from "@CatalogView";

import AppsIcon from "@material-ui/icons/Apps";
import BlurOnOutlinedIcon from "@material-ui/icons/BlurOnOutlined";

const PokemonsPageAll = ({ pokemonDataArray = [] }) => {
  const [viewTypeIsCatalog, setViewTypeIsCatalog] = useState(false);

  return (
    <>
      <div className="viewType">
        <div className="viewTypeInner">
          <div
            className="innerBlock"
            onClick={() => setViewTypeIsCatalog(!viewTypeIsCatalog)}
          >
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

const ConnectedPokemonsPageAll = connect((store) => {
  return {
    pokemonDataArray: store.pokemonsArr,
  };
})(PokemonsPageAll);

export default (props) => (
  <Provider store={store}>
    <ConnectedPokemonsPageAll {...props} />
  </Provider>
);

PokemonsPageAll.propTypes = {
  pokemonDataArray: PropTypes.array,
};
