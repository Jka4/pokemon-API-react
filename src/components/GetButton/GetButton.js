import React from "react";
import store from "../../store";

store.subscribe(() => {});

class GetButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomPokemons: []
    };
  }

  getRandomPokemon = () => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${Math.floor(
      Math.random() * 807
    )}/`;
    fetch(URL)
      .then(res => res.json())
      .then(json => {
        let randomPokemons = json;

        store.dispatch({ type: "add_random_pokemons", randomPokemons });
      });
  };

  clearState = () => {
    store.dispatch({ type: "clear_random_pokemons" });
  };

  render() {
    return (
      <div className='Button' data-aos='fade-up' data-aos-delay='300'>
        <button id='getPokemon' onClick={this.getRandomPokemon}>
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
