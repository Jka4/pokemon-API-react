/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import { Provider, connect } from "react-redux";
import Heading from "./Heading";
import PokemonCard from "./PokemonCard";
import { setDelailedPageData } from "utils/API";
import store from "Store/store";
import POKEMON from "utils/pokemonDataArray";

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
  const [dataForRender, setDataForRender] = useState<randomPokemonsType[]>(null || randomPokemons)

  const handleClick = (id: number) => {
    setDelailedPageData(id);
  }

  useEffect(() => {
    let arr: any[] = [];

    // find image placeholder fro fetched pokemon object
    randomPokemons.forEach(el => {
      const placeholder = POKEMON.find((pokes: any) => pokes.id === el.id)?.placeholderBase64;
      el.placeholderBase64 = placeholder
      arr.push(el)
    })

    setDataForRender(arr);
  }, [randomPokemons])

  return (
    <>
      {haveData && <Heading />}

      <div className="itemList">
        <div className="cardsContainer">
          {dataForRender.map((el: any, key: number) => (
            <PokemonCard
              key={randomPokemons[key]?.id}
              id={randomPokemons[key]?.id}
              src={randomPokemons[key]?.sprites.front_default}
              name={randomPokemons[key]?.name}
              order={randomPokemons[key]?.order}
              base_experience={randomPokemons[key]?.base_experience}
              onClick={() => handleClick(randomPokemons[key]?.id)}
              placeholderBase64={el.placeholderBase64}
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
