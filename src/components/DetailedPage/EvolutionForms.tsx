import React, { lazy, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import find from "lodash.find";
import Paper from "@material-ui/core/Paper";

import { setDelailedPageData } from "utils/API";

const ImageContainer = lazy(() => import("components/ImageContainer/ImageContainer"));

type Props = {
  pokemonsArr: any;
  evolutionChain: any;
  currentPokemon: any;

};

interface ChainElements {
  image: string;
  species_name: string;
  placeholderBase64: string;
  id: number | string;
  [key: string]: any;
}

const EvolutionForms: React.FC<Props> = ({ pokemonsArr, evolutionChain, currentPokemon }: Props) => {
  const chainNames: ChainElements[] = evolutionChain?.chain;
  let [chain, setChain] = useState<any[]>([]);

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

  const handleClick = (id: number) => {
    setDelailedPageData(id);
  }

  const fallback = (placeholderBase64: string) => {
    return (
      <>
        <img
          src={placeholderBase64}
          className="evoFormImg placeholderBase64"
          alt="placeholderBase64"
        />
      </>
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
            onClick={() => handleClick(Number(index.id))}
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
              <ImageContainer url={index.image} cn={"evoFormImg"} fallback={fallback(index.placeholderBase64)} />

              <div className="pokemonName">{index.species_name}</div>
            </Paper>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default EvolutionForms;
