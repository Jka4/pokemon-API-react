/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { NavLink } from 'react-router-dom';

import { Provider, connect } from 'react-redux';
import store from 'Store/store';

import { Button } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import CasinoIcon from '@material-ui/icons/Casino';

import './styles/style.scss';

import { Pokes, IStoreType } from 'types';

interface GetButtonProps {
  randomPokemon: Pokes[];
  pokemonArr: Pokes[];
}

const GetButton: React.FC<GetButtonProps> = ({ randomPokemon = [], pokemonArr = [] }: GetButtonProps) => {
  const clearState = () => {
    store.dispatch({ type: 'CLEAR_RANDOM_POKEMON' });
  };

  const handleClick = () => {
    const randomPokemonFromArr = pokemonArr[Math.floor(1 + Math.random() * pokemonArr.length)];
    store.dispatch({ type: 'ADD_RANDOM_POKEMON', randomPokemonFromArr });
  };

  return (
    <div className="Button">
      <NavLink to={`/allPokemon/`}>
        <Button variant="contained" color="secondary">
          {' '}
          SHOW ALL POKEMON{' '}
        </Button>
      </NavLink>

      <Button onClick={clearState} className="clearBtn" variant="contained" color="secondary">
        CLEAR
      </Button>

      <Badge color="secondary" badgeContent={randomPokemon.length}>
        <Button
          onClick={handleClick}
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

const ConnectedGetButton = connect((store: IStoreType) => {
  return {
    randomPokemon: store.randomPokemon,
    pokemonArr: store.pokemonArr,
  };
})(GetButton);

export default (props = {}) => (
  <Provider store={store}>
    <ConnectedGetButton {...props} />
  </Provider>
);
