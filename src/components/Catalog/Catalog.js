import React, { lazy, Suspense, useState, useEffect } from "react";
import { Provider, connect } from 'react-redux';
import store from "@Store";

import './styles/style.scss';
import 'react-tippy/dist/tippy.css'
import { Tooltip } from 'react-tippy';

const ImageContainer = lazy(() => import('@ImageContainer'));

const Catalog = (props) => {
  const { pokemonDataArray } = props
  const [pokemons, setPokemons] = useState([]);


  useEffect(() => {
    for (let i = 1; i <= 50; i++) {
      setPokemons(pokemons => [...pokemons, pokemonDataArray[i]]);
    }
  }, []);

  return (
    <div className="wrapper">
      {pokemonDataArray.map((index, key) => (
        <React.Fragment key={key}>
          <Tooltip
            title={index?.name}
            position="top"
            trigger="mouseenter"
            arrow={true}
          >
            <Suspense fallback={''}>
              <ImageContainer url={index?.image} />
            </Suspense>
          </Tooltip>
        </React.Fragment>
      ))
      }
    </div >
  )
}

const ConnectedCatalog = connect(store => {
  return {
    pokemonDataArray: store.pokemonsArr,
  };
})(Catalog);

export default props => (
  <Provider store={store}>
    <ConnectedCatalog {...props} />
  </Provider>
);
