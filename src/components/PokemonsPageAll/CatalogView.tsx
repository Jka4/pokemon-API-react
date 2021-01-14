import React, { lazy } from "react";
import { NavLink } from "react-router-dom";

import "react-tippy/dist/tippy.css";
import "./styles/style.scss";

const ImageContainer = lazy(() => import("components/ImageContainer/ImageContainer"));

type Props = {
  pokemonDataArray: {
    chain: {
      species_name: string;
    }[];
    id: 0;
    image: string;
    imageHQ: string;
    name: string;
    placeholderBase64: string;
    weight: number;
  }[];
}

const CatalogView: React.FC<Props> = ({ pokemonDataArray = [] }: Props) => {
  const fallback = (placeholderBase64: string) => {
    return (
      <>
        <img loading="lazy" src={placeholderBase64} className="placeholderBase64" alt="placeholderBase64" />
      </>
    );
  };

  return (
    <div className="wrapper">
      {pokemonDataArray.map((index, key) => (
        <React.Fragment key={key}>
          <NavLink to={`/detailedPage/pokemon/${index?.name}`} data-pokemon_id={index?.id} key={key} >
            <ImageContainer url={index?.image} cn="pokemonImageCard" fallback={fallback(index?.placeholderBase64)} />
          </NavLink>
        </React.Fragment>
      ))}
    </div>
  );
};

export default CatalogView;



