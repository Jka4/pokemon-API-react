import React from "react";
import { Provider, connect } from "react-redux";
import store from "@Store";

import GetButton from "@GetButton";
import { setDelailedPageData } from "@APIutils";
import PokemonCard from "@PokemonCard";
import Heading from "@Heading";
import Logo from "@Logo";

import "./styles/style.scss";

const MainContainer = (props) => {
  const { randomPokemons } = props;

  return (
    <section className="main">
      <Logo />
      <GetButton />
      {randomPokemons.length >= 1 && <Heading />}

      <div className="itemList">
        <div className="cardsContainer">
          {randomPokemons &&
            randomPokemons.map((i, key) => (
              <PokemonCard
                key={
                  randomPokemons[key].id +
                  key +
                  Math.floor(1 + Math.random() * 9999999999)
                }
                id={randomPokemons[key]?.id}
                src={randomPokemons[key]?.sprites?.front_default}
                name={randomPokemons[key]?.name}
                order={randomPokemons[key]?.order}
                base_experience={randomPokemons[key]?.base_experience}
                onClick={setDelailedPageData}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

const ConnectedMainContainer = connect((store) => {
  return {
    randomPokemons: store.randomPokemons,
  };
})(MainContainer);

export default (props) => (
  <Provider store={store}>
    <ConnectedMainContainer {...props} />
  </Provider>
);
