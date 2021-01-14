/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Provider, connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { Button } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import CasinoIcon from "@material-ui/icons/Casino";

import store from "Store/store";
import POKEMON from "utils/pokemonDataArray";

import "./styles/style.scss";

type GetButtonProps = {
  randomPokemons: any[];
  randomPokemonsFetching: boolean;
}

const GetButton: React.FC<GetButtonProps> = ({ randomPokemons = [], randomPokemonsFetching = false, }) => {
  const randomPokemonsLength: number = randomPokemons.length;

  const clearState = () => {
    store.dispatch({ type: "CLEAR_RANDOM_POKEMON" });
  };

  const handleClick = () => {
    const randomPokemon = POKEMON[Math.floor(1 + Math.random() * POKEMON.length)]
    store.dispatch({ type: 'ADD_RANDOM_POKEMON', randomPokemon });
  }

  return (
    <div className="Button">
      <NavLink to={`/allPokemons/`}>
        <Button variant="contained" color="secondary">
          {" "}
          SHOW ALL POKEMON{" "}
        </Button>
      </NavLink>

      <Button
        onClick={clearState}
        className="clearBtn"
        variant="contained"
        color="secondary"
      >
        CLEAR
      </Button>

      <Badge color="secondary" badgeContent={randomPokemonsLength}>
        <Button
          onClick={handleClick}
          id="getPokemons"
          className="getPokemons"
          variant="contained"
          color="secondary"
          endIcon={!randomPokemonsFetching && <CasinoIcon />}
        >
          {randomPokemonsFetching ? "Loading..." : "GET A RANDOM POKEMON"}
        </Button>
      </Badge>
    </div>
  );
};

const ConnectedGetButton = connect(
  (store: GetButtonProps) => {
    return {
      randomPokemons: store.randomPokemons,
      randomPokemonsFetching: store.randomPokemonsFetching,
    };
  }
)(GetButton);

export default (props = {}) => (
  <Provider store={store}>
    <ConnectedGetButton {...props} />
  </Provider>
);
