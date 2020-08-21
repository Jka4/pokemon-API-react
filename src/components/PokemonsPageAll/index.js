import React, { useState } from "react";
import { Provider, connect } from "react-redux";

import store from "@Store";
import ListView from "@ListView";
import CatalogView from "@CatalogView";
import AppsIcon from "@material-ui/icons/Apps";
import BlurOnOutlinedIcon from "@material-ui/icons/BlurOnOutlined";

const PokemonsPageAll = (props) => {
  const { pokemonDataArray } = props;
  const [viewTypeIsCatalog, setViewTypeIsCatalog] = useState(false);

  return (
    <>
      <div className="viewType">
        <div className="viewTypeInner">
          <div
            className="innerBlock"
            onClick={() => setViewTypeIsCatalog(!viewTypeIsCatalog)}
          >
            <span>View type </span>
            <span className="separator">|</span>

            {!viewTypeIsCatalog ? (
              <div className="list">
                <BlurOnOutlinedIcon />
              </div>
            ) : (
              <div className="catalog">
                <AppsIcon />
              </div>
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
