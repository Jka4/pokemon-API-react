import React from "react";
import store from "../../store";
import { getRandomPokemon } from "../utils/API";
import './style.scss';


const GetButton = (props) => {
  const clearState = () => {
    store.dispatch({ type: "clear_random_pokemons" });
  };

  return (
    <div className='Button'>
      <button id='getPokemon' onClick={getRandomPokemon}>
        GET A RANDOM POKEMON
        </button>

      <button id='clear' onClick={clearState}>
        Clear
        </button>
    </div>
  );
}

export default GetButton;
