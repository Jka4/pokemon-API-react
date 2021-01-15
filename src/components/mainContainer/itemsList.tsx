/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Provider, connect } from 'react-redux';
import Heading from './Heading';
import PokemonCard from './PokemonCard';
import store from 'Store/store';

import { IStoreType, pokemonCardType } from 'commonTypes';

interface Props {
  randomPokemon: pokemonCardType[];
}

const ItemsList: React.FC<Props> = ({ randomPokemon }: Props) => {
  const haveData = randomPokemon.length !== 0;

  return (
    <>
      {haveData && <Heading />}

      <div className="itemList">
        <div className="cardsContainer">
          {randomPokemon.map((el: pokemonCardType, key: number) => (
            <PokemonCard
              key={key}
              id={el.id}
              src={el.image}
              name={el.name}
              order={el.order}
              base_experience={el.base_experience}
              placeholderBase64={el.placeholderBase64}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const ConnectedItemsList = connect((store: IStoreType) => {
  return {
    randomPokemon: store.randomPokemon,
  };
})(ItemsList);

export default (props = {}) => (
  <Provider store={store}>
    <ConnectedItemsList {...props} />
  </Provider>
);

ItemsList.defaultProps = {
  randomPokemon: [],
};
