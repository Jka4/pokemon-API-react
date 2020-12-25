/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Provider, connect } from "react-redux";
import Heading from "./Heading";
import PokemonCard from "./PokemonCard";
import { setDelailedPageData } from "../../utils/API";
import store from "../../Store/store";

interface ItemsListProps {
  randomPokemons: any[];
}

const ItemsList: React.FC<ItemsListProps> = ({
  randomPokemons,
}: ItemsListProps) => {
  const haveData = randomPokemons.length !== 0;

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

const ConnectedItemsList = connect((store: { randomPokemons: any[] }) => {
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
