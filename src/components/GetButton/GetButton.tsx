/* eslint-disable import/no-anonymous-default-export */
import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { Button } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import CasinoIcon from '@material-ui/icons/Casino';

import './styles/style.scss';

import { PokesTypes } from 'types/index';

interface GetButtonProps {
  randomPokemon: PokesTypes[];
  pokemonArr: PokesTypes[];
}

const GetButton: React.FC = () => {
  const randomPokemon = useSelector((state: GetButtonProps) => state.randomPokemon);
  const pokemonArr = useSelector((state: GetButtonProps) => state.pokemonArr);

  const dispatch = useDispatch()


  const clearRandomPokemon = () => dispatch({ type: 'CLEAR_RANDOM_POKEMON' });

  const getRandomPokemon = useCallback(() => {
    const randomPokemonFromArr = pokemonArr[Math.floor(1 + Math.random() * pokemonArr.length)];
    dispatch({ type: 'ADD_RANDOM_POKEMON', randomPokemonFromArr })
  },
    [dispatch, pokemonArr]
  )

  return (
    <div className="Button">
      <NavLink to={`/allPokemon/`}>
        <Button variant="contained" color="secondary">
          SHOW ALL POKEMON
        </Button>
      </NavLink>

      <Button onClick={clearRandomPokemon} className="clearBtn" variant="contained" color="secondary">
        CLEAR
      </Button>

      <Badge color="secondary" badgeContent={randomPokemon.length}>
        <Button
          onClick={getRandomPokemon}
          id="getPokemon"
          className="getPokemon"
          variant="contained"
          color="secondary"
          endIcon={<CasinoIcon />}
        >
          GET A RANDOM POKEMON
        </Button>
      </Badge>
    </div>
  );
};

export default GetButton;
