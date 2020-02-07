import React from "react";
import store from "../../store";
import { getRandomPokemon } from "../utils/API";

store.subscribe(() => {});

class GetButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomPokemons: []
    };
  }

  clearState = () => {
    store.dispatch({ type: "clear_random_pokemons" });
  };

  render() {
    return (
      <div className='Button'>
        <button id='getPokemon' onClick={getRandomPokemon}>
          GET A RANDOM POKEMON
        </button>

        <button id='clear' onClick={this.clearState}>
          Clear
        </button>
      </div>
    );
  }
}

export default GetButton;
