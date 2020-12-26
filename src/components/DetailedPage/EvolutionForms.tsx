import React, { lazy, Suspense, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import find from "lodash.find";
import Paper from "@material-ui/core/Paper";

import { setDelailedPageData } from "@APIutils";

const ImageContainer = lazy(() => import("@ImageContainer"));

type Props = {
  pokemonsArr: any[];
  evolutionChain: ChainElements;
  currentPokemon: any;
};

interface ChainElements {
  image: string;
  species_name: string;
  placeholderBase64: string;
  id: number | string;
  [key: string]: any;
}

const EvolutionForms: React.FC<Props> = ({
  pokemonsArr,
  evolutionChain,
  currentPokemon,
}: Props) => {
  const chainNames = evolutionChain?.chain;
  const [chain, setChain] = useState<any[]>([]);

  useEffect(() => {
    let arr: any[] = [];
    chainNames &&
      chainNames.forEach((index: ChainElements) => {
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

  const FormTitle = () => {
    return (
      <div className="formsTitle">
        {chain.length >= 2 ? <span>All forms:</span> : <span>Form:</span>}
      </div>
    );
  };

  return (
    <>
      <FormTitle />

      <div className="evolutionForms">
        {chain.map((index: ChainElements) => (
          <NavLink
            to={`/detailedPage/pokemon/${index.id}`}
            data-pokemon_id={index.id}
            onClick={setDelailedPageData}
            key={index.id}
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
