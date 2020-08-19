import React, { lazy, Suspense, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "react-loader-spinner";
import find from "lodash.find";

import { setDelailedPageData } from "@APIutils";

const ImageContainer = lazy(() => import("@ImageContainer"));

const EvolutionForms = (props) => {
  const { pokemonsArr } = props;
  const chainNames = props?.evolutionChain?.chain;
  const currentPokemon = props?.currentPokemon;
  const [chain, setChain] = useState();

  useEffect(() => {
    let arr = [];

    chainNames &&
      chainNames.forEach((index) => {
        index.image = find(
          pokemonsArr,
          (o) => o.name === index.species_name
        ).image;
        index.id = find(pokemonsArr, (o) => o.name === index.species_name).id;
        arr.push(index);
      });
    setChain(arr);
  }, [chainNames, pokemonsArr]);

  return (
    <>
      <div className="evolutionForms">
        {chain &&
          chain.map((index, key) => (
            <NavLink
              to={`/detailedPage/pokemon/${index.id}`}
              className={
                currentPokemon === index.species_name
                  ? "evoForm currentPokemon"
                  : "evoForm"
              }
              data-pokemon_id={index.id}
              onClick={setDelailedPageData}
              key={key}
            >
              <Suspense
                fallback={
                  <Loader
                    type="TailSpin"
                    height={96}
                    width={96}
                    color={"red"}
                  />
                }
              >
                <ImageContainer url={index.image} />
              </Suspense>

              <div className="pokemonName">{index.species_name}</div>
            </NavLink>
          ))}
      </div>
    </>
  );
};

export default EvolutionForms;
