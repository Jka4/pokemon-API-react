/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Provider, connect } from "react-redux";
import Heading from "./Heading";
import PokemonCard from "./PokemonCard";
import store from "Store/store";
import { NavLink } from "react-router-dom";

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
  base_experience: number,
  placeholderBase64?: string;
}

const ItemsList: React.FC<ItemsListType> = ({ randomPokemons }: ItemsListType) => {
  const haveData = randomPokemons.length !== 0;



  return (
    <>
      {haveData && <Heading />}

      <div className="itemList">
        <div className="cardsContainer">
          {randomPokemons.map((el: any, key: number) => (
            <NavLink
              key={(el?.name, key)}
              to={`/detailedPage/pokemon/${el?.name}`}
              className="searchItem_outer"
            >
              <PokemonCard
                key={key}
                id={el?.id}
                src={el?.image}
                name={el?.name}
                order={el?.order}
                base_experience={el?.base_experience}
                placeholderBase64={el?.placeholderBase64}
              />
            </NavLink>
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
