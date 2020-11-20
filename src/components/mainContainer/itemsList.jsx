import React from "react";
import { Provider, connect } from "react-redux";
import PropTypes from "prop-types";
import Heading from "@Heading";
import PokemonCard from "@PokemonCard";
import { setDelailedPageData } from "@APIutils";
import store from "@Store";

const ItemsList = (props) => {
  const randomPokemons = props.randomPokemons;
  const haveData = randomPokemons.length !== 0;

  return (
    <>
      {haveData && <Heading />}

      <div className="itemList">
        <div className="cardsContainer">
          {haveData &&
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
    </>
  );
};

const ConnectedItemsList = connect((store) => {
  return {
    randomPokemons: store.randomPokemons,
  };
})(ItemsList);

export default (props) => (
  <Provider store={store}>
    <ConnectedItemsList {...props} />
  </Provider>
);

ItemsList.propTypes = {
  randomPokemons: PropTypes.array,
};
