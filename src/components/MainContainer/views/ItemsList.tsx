import React from 'react';

import { useSelector } from 'react-redux';

import Heading from 'components/MainContainer/views/Heading';
import PokemonCard from 'components/MainContainer/views/PokemonCard';

import { pokemonCardType } from 'types/index';

import styled from 'styled-components';
import { randomPokemonsSelector } from 'selectors';

const ItemsList: React.FC = () => {
  const randomPokemons = useSelector(randomPokemonsSelector);

  const haveData = randomPokemons.length !== 0;

  return (
    <>
      {haveData && <Heading />}

      <CardsContainer>
        {randomPokemons?.map((el: pokemonCardType, key: number) => (
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
