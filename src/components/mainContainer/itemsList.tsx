/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Provider, connect } from "react-redux";
import Heading from "./Heading";
import PokemonCard from "./PokemonCard";
import { setDelailedPageData } from "utils/API";
import store from "Store/store";

type ItemsListType = {
  randomPokemons: randomPokemonsType[];
}

type randomPokemonsType = {
  id: number;
  sprites: {
    front_default: string
  };
  name: string;
  order: number;
  base_experience: number
}

const ItemsList: React.FC<ItemsListType> = ({ randomPokemons }: ItemsListType) => {
  const haveData = randomPokemons.length !== 0;

  const handleClick = (id: number) => {
    setDelailedPageData(id, false);
  }


  return (
    <>
      {haveData && <Heading />}

      <div className="itemList">
        <div className="cardsContainer">
          {randomPokemons.map((el: any, key: number) => (
            <PokemonCard
              key={
                randomPokemons[key].id +
                key +
                Math.floor(1 + Math.random() * 9999999999)
              }
              id={randomPokemons[key].id}
              src={randomPokemons[key].sprites.front_default}
              name={randomPokemons[key].name}
              order={randomPokemons[key].order}
              base_experience={randomPokemons[key].base_experience}
              onClick={handleClick(randomPokemons[key].id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const ConnectedItemsList = connect((store: ItemsListType) => {
  return {
    randomPokemons: store.randomPokemons,
  };
})(ItemsList);

export default (props = {}) => (
  <Provider store={store}>
    <ConnectedItemsList {...props} />
  </Provider>
);

ItemsList.defaultProps = {
  randomPokemons: [],
};
