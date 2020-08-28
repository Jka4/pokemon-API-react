import React from "react";
import { Provider, connect } from "react-redux";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { Button } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import CasinoIcon from "@material-ui/icons/Casino";

import { getRandomPokemon } from "@APIutils";
import store from "@Store";

import "./styles/style.scss";

const GetButton = (props) => {
  const clearState = () => {
    store.dispatch({ type: "CLEAR_RANDOM_POKEMON" });
  };

  const { randomPokemons } = props;

  return (
    <div className="Button">
      <NavLink to={`/allPokemons/`}>
        <Button variant="contained" color="secondary">
          {" "}
          GET ALL POKEMON{" "}
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
          onClick={() => getRandomPokemon(806)}
          id="getPokemons"
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

const ConnectedGetButton = connect((store) => {
  return {
    randomPokemons: store.randomPokemons,
  };
})(GetButton);

export default (props) => (
  <Provider store={store}>
    <ConnectedGetButton {...props} />
  </Provider>
);

GetButton.propTypes = {
  randomPokemons: PropTypes.array,
};
