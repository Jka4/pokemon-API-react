import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Button } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import CasinoIcon from '@material-ui/icons/Casino';

import styled from 'styled-components';

import { pokemonArrSelector, randomPokemonsSelector } from 'selectors';
import { getRandomPokemon } from 'ac/getRandomPokemon';

const GetButton: React.FC = () => {
  const randomPokemons = useSelector(randomPokemonsSelector);
  const pokemonArr = useSelector(pokemonArrSelector);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getRandomPokemon(pokemonArr));
  };

  return (
    <>
      <Badge color="secondary" badgeContent={randomPokemons.length}>
        <ButtonStyled onClick={handleClick} variant="contained" color="secondary" endIcon={<CasinoIcon />}>
          GET A RANDOM POKEMON
        </ButtonStyled>
      </Badge>
    </>
  );
};

export const ButtonStyled = styled(Button)`
  margin: 5px;
  margin-left: 10px !important;
  margin-right: 10px;
  font-size: 16px;
`;

export default GetButton;
