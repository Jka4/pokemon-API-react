/* eslint-disable import/no-anonymous-default-export */
import React, { useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Button } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import CasinoIcon from '@material-ui/icons/Casino';

import { PokesTypes } from 'types/index';

interface GetButtonProps {
  randomPokemon: PokesTypes[];
  pokemonArr: PokesTypes[];
}

const GetButton: React.FC = () => {
  const randomPokemon = useSelector((state: GetButtonProps) => state.randomPokemon);
  const pokemonArr = useSelector((state: GetButtonProps) => state.pokemonArr);

  const dispatch = useDispatch();

  const getRandomPokemon = useCallback(() => {
    const randomPokemon = pokemonArr[Math.floor(1 + Math.random() * pokemonArr.length)];
    dispatch({ type: 'ADD_RANDOM_POKEMON', payload: randomPokemon });
  }, [dispatch, pokemonArr]);

  return (
    <>
      <Badge color="secondary" badgeContent={randomPokemon.length}>
        <Button
          onClick={getRandomPokemon}
          className="getPokemon"
          variant="contained"
          color="secondary"
          endIcon={<CasinoIcon />}
        >
          GET A RANDOM POKEMON
        </Button>
      </Badge>
    </>
  );
};

export default GetButton;
