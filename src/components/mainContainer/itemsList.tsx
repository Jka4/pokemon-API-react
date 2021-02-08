/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { useSelector } from 'react-redux';

import Heading from 'components/MainContainer/Heading';
import PokemonCard from 'components/MainContainer/PokemonCard';

import { pokemonCardType } from 'types/index';

interface ItemsListTypes {
  randomPokemon: pokemonCardType[];
}

const ItemsList: React.FC = () => {
  const randomPokemon = useSelector((state: ItemsListTypes) => state.randomPokemon);

  const haveData = randomPokemon.length !== 0;

  return (
    <>
      {haveData && <Heading />}

      <div className="itemList">
        <div className="cardsContainer">
          {randomPokemon.map((el: pokemonCardType, key: number) => (
            <PokemonCard pokeCard={el} key={key} />
          ))}
        </div>
      </div>
    </>
  );
};


export default ItemsList;

ItemsList.defaultProps = {
  randomPokemon: [],
};
