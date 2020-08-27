import React, { lazy, Suspense, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import find from "lodash.find";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";

import { setDelailedPageData } from "@APIutils";

const ImageContainer = lazy(() => import("@ImageContainer"));

const EvolutionForms = (props) => {
  const { pokemonsArr } = props;
  const chainNames = props?.evolutionChain?.chain;
  const currentPokemon = props?.currentPokemon;
  const [chain, setChain] = useState([]);

  useEffect(() => {
    let arr = [];

    chainNames &&
      chainNames.forEach((index) => {
        index.image = find(
          pokemonsArr,
          (o) => o.name === index.species_name
        ).image;
        index.id = find(pokemonsArr, (o) => o.name === index.species_name).id;
        index.placeholderBase64 = find(
          pokemonsArr,
          (o) => o.name === index.species_name
        ).placeholderBase64;
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
              data-pokemon_id={index.id}
              onClick={setDelailedPageData}
              key={key}
            >
              <Paper
                elevation={3}
                className={
                  currentPokemon === index.species_name
                    ? "evoForm currentPokemon"
                    : "evoForm"
                }
              >
                <Suspense
                  fallback={
                    <img
                      src={index.placeholderBase64}
                      className="evoFormImg placeholderBase64"
                      alt="placeholderBase64"
                    />
                  }
                >
                  <ImageContainer url={index.image} cn={"evoFormImg"} />
                </Suspense>
                <div className="pokemonName">{index.species_name}</div>
              </Paper>
            </NavLink>
          ))}
      </div>
    </>
  );
};

export default EvolutionForms;

EvolutionForms.propTypes = {
  pokemonsArr: PropTypes.array,
  chainNames: PropTypes.array,
  currentPokemon: PropTypes.string,
};