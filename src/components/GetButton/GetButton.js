import React from "react";
import store from "@Store";
import { getRandomPokemon } from "@APIutils";
import { NavLink } from "react-router-dom";

import './styles/style.scss';


const GetButton = () => {
  const clearState = () => {
    store.dispatch({ type: "CLEAR_RANDOM_POKEMON" });
  };

  return (
    <div className='Button'>
      <button id='getPokemon' onClick={() => getRandomPokemon(806)}>
        GET A RANDOM POKEMON
        </button>

      <button id='clear' onClick={clearState}>
        CLEAR
        </button>

      <NavLink to={`/allPokemons/`} >
        <button id='getAllPokemon' >
          GET ALL POKEMON
        </button>
      </NavLink>
    </div>
  );
}

export default GetButton;
