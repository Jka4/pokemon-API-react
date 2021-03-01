/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Button } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import CasinoIcon from '@material-ui/icons/Casino';

import { PokesTypes } from 'types/index';
import styled from 'styled-components';

interface GetButtonProps {
  randomPokemon: PokesTypes[];
  pokemonArr: PokesTypes[];
}

const GetButton: React.FC = () => {
  const randomPokemon = useSelector((state: GetButtonProps) => state.randomPokemon);
  const pokemonArr = useSelector((state: GetButtonProps) => state.pokemonArr);

  const dispatch = useDispatch();

  const getRandomPokemon = () => {
    const randomPokemon = pokemonArr[Math.floor(1 + Math.random() * pokemonArr.length)];
    dispatch({ type: 'ADD_RANDOM_POKEMON', payload: randomPokemon });

    console.log('beep');
  };

  return (
    <>
      <Badge color="secondary" badgeContent={randomPokemon.length}>
        <ButtonStyled onClick={getRandomPokemon} variant="contained" color="secondary" endIcon={<CasinoIcon />}>
          GET A RANDOM POKEMON
        </ButtonStyled>
      </Badge>
    </>
  );
};

const ButtonStyled = styled(Button)`
  margin: 5px;
  margin-left: 10px !important;
  margin-right: 10px;
  font-size: 16px;
`;

export default GetButton;
