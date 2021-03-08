/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { useSelector } from 'react-redux';

import Heading from 'components/MainContainer/views/Heading';
import PokemonCard from 'components/MainContainer/views/PokemonCard';

import { pokemonCardType } from 'types/index';

import styled from 'styled-components';

interface ItemsListTypes {
  randomPokemon: pokemonCardType[];
}

const ItemsList: React.FC = () => {
  const randomPokemon = useSelector((state: ItemsListTypes) => state.randomPokemon);

  const haveData = randomPokemon.length !== 0;

  return (
    <>
      {haveData && <Heading />}

      <CardsContainer>
        {randomPokemon.map((el: pokemonCardType, key: number) => (
          <PokemonCard pokeCard={el} key={key} />
        ))}
      </CardsContainer>
    </>
  );
};

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
  width: 100%;
  height: auto;
`;

ItemsList.defaultProps = {
  randomPokemon: [],
};

export default ItemsList;
