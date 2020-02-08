import React from "react";
import Tilt from "react-tilt";
import GetButton from "../GetButton/GetButton";
import store from "../../store";
import { Link } from "react-router-dom";
import { setDelailedPageData } from "../utils/API";

class MainContainer extends React.Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  render() {
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
                  click={setDelailedPageData}
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
      <Link to={`/detailedPage/pokemon/${name}`} className='pokemonCard_Outher'>
        <div
          className='pokemonCard'
          onClick={click}
          key={id}
          data-pokemon_id={id}>
          {src && <img src={src} alt='img' />}
          <span>{name}</span>
          <span>{order}</span>
          <span>{base_experience}</span>
        </div>
      </Link>
    );
  }
}

let List = () => {
  return (
    <h2>
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
        <div className='Tilt-inner'>
          <img src='./images/pokemon.gif' alt='logo_gif' />
        </div>
      </Tilt>
    </div>
  );
};
