import React from "react";
import Tilt from "react-tilt";
import GetButton from "../GetButton/GetButton";
import store from "../../store";

class MainContainer extends React.Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  getRandomPokemon = event => {
    let pokemon_id = event.target.dataset.pokemon_id;

    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon_id}/`;
    fetch(URL)
      .then(res => res.json())
      .then(json => {
        let page = json;

        store.dispatch({ type: "set_detailsPage", page });
      });
  };

  render() {
    // let dataToRender = this.props.randomPokemons;
    let dataToRender = store.getState().randomPokemons;

    return (
      <section className='main'>
        <Img />
        <GetButton />
        <List />

        <div className='itemList'>
          <div className='cardsContainer'>
            {dataToRender.lenght !== 0 &&
              dataToRender.map((i, key) => (
                <PokemonCard
                  key={i.id}
                  id={i.id}
                  src={i.sprites.front_default}
                  name={i.name}
                  order={i.order}
                  base_experience={i.base_experience}
                  click={this.getRandomPokemon}
                />
              ))}
          </div>
        </div>
      </section>
    );
  }
}

export default MainContainer;

class PokemonCard extends React.Component {
  render() {
    const { src, name, order, base_experience, id, click } = this.props;

    return (
      <div
        className='pokemonCard'
        onClick={click}
        key={id}
        data-pokemon_id={id}
        data-aos='fade-up'
        data-aos-delay='120'>
        {src && <img src={src} alt='img' />}
        <span>{name}</span>
        <span>{order}</span>
        <span>{base_experience}</span>
      </div>
    );
  }
}

let List = () => {
  return (
    <h2 data-aos='fade-up' data-aos-delay='400'>
      <ul>
        <li>photo</li>
        <li>name</li>
        <li>order</li>
        <li>exp</li>
      </ul>
    </h2>
  );
};

let Img = () => {
  return (
    <div className='getButtonLine'>
      <Tilt
        className='Tilt'
        options={{
          easing: "cubic-bezier(.03,.98,.52,.99)",
          scale: 1.2,
          max: 35
        }}>
        <div className='Tilt-inner' data-aos='fade-up' data-aos-delay='200'>
          <img src='../../images/pokemon.gif' alt='logo_gif' />
        </div>
      </Tilt>
    </div>
  );
};
