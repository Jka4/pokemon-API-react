import React from "react";
import store from "@Store";
import { getRandomPokemon } from "@APIutils";

import './styles/style.scss';


const GetButton = (props) => {
  const clearState = () => {
    store.dispatch({ type: "clear_random_pokemons" });
  };

  return (
    <div className='Button'>
      <button id='getPokemon' onClick={() => getRandomPokemon(806)}>
        GET A RANDOM POKEMON
        </button>

      <button id='clear' onClick={clearState}>
        Clear
        </button>
    </div>
  );
}

export default GetButton;
