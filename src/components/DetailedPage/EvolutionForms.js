import React, { lazy, Suspense, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "react-loader-spinner";
import * as _ from "lodash";

import { setDelailedPageData } from "@APIutils";
import pokemonDataArray from "@pokemonDataArray";

const ImageContainer = lazy(() => import("@ImageContainer"));

const EvolutionForms = (props) => {
  const chainNames = props?.evolutionChain?.chain;
  const currentPokemon = props?.currentPokemon;
  const [chain, setChain] = useState();

  useEffect(() => {
    let arr = [];

    chainNames &&
      chainNames.forEach((index) => {
        index.image = _.find(
          pokemonDataArray,
          (o) => o.name === index.species_name
        ).image;
        index.id = _.find(
          pokemonDataArray,
          (o) => o.name === index.species_name
        ).id;
        arr.push(index);
      });
    setChain(arr);
  }, [chainNames]);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default EvolutionForms;
