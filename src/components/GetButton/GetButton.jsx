/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Provider, connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { Button } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import CasinoIcon from "@material-ui/icons/Casino";

import { getRandomPokemon } from "@APIutils";
import store from "@Store";

import "./styles/style.scss";

const GetButton = ({
  randomPokemons = [],
  randomPokemonsFetching = Boolean,
}) => {
  const clearState = () => {
    store.dispatch({ type: "CLEAR_RANDOM_POKEMON" });
  };

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

      <Badge color="secondary" badgeContent={randomPokemons.length}>
        <Button
          onClick={() => getRandomPokemon()}
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

const ConnectedGetButton = connect((store) => {
  return {
    randomPokemons: store.randomPokemons,
    randomPokemonsFetching: store.randomPokemonsFetching,
  };
})(GetButton);

export default (props = {}) => (
  <Provider store={store}>
    <ConnectedGetButton {...props} />
  </Provider>
);
