import React, { useEffect, useState } from 'react';
import Search from "@Search";
import Player from "@Player";
import { Provider, connect } from 'react-redux';
import store from "@Store";

import './styles/style.scss';

const HeaderLine = (props) => {
  const [pokemonDataArray, setPokemonDataArray] = useState();

  useEffect(() => {
    setPokemonDataArray(props.pokemonDataArray);
  }, [props]);

  return (
    <div className='topLine'>
      <Player />
      <Search pokemonDataArray={pokemonDataArray} />
    </div>
  );
}

const ConnectedHeaderLine = connect(store => {
  return {
    pokemonDataArray: store.pokemonsArr,
  };
})(HeaderLine);

export default props => (
  <Provider store={store}>
    <ConnectedHeaderLine {...props} />
  </Provider>
);