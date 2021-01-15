/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Provider, connect } from 'react-redux';
import Heading from './Heading';
import PokemonCard from './PokemonCard';
import store from 'Store/store';

type ItemsListType = {
  randomPokemon: randomPokemonType[];
};

type randomPokemonType = {
  id: number;
  sprites: {
    front_default: string;
  };
  name: string;
  order: number;
  base_experience: number;
  placeholderBase64?: string;
};

const ItemsList: React.FC<ItemsListType> = ({ randomPokemon }: ItemsListType) => {
  const haveData = randomPokemon.length !== 0;

  return (
    <>
      {haveData && <Heading />}

      <div className="itemList">
        <div className="cardsContainer">
          {randomPokemon.map((el: any, key: number) => (
            <PokemonCard
              key={key}
              id={el?.id}
              src={el?.image}
              name={el?.name}
              order={el?.order}
              base_experience={el?.base_experience}
              placeholderBase64={el?.placeholderBase64}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const ConnectedItemsList = connect((store: ItemsListType) => {
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
