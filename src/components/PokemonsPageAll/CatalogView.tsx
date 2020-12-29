import React, { Suspense, lazy } from "react";
import { NavLink } from "react-router-dom";

import { setDelailedPageData } from "utils/API";

import "react-tippy/dist/tippy.css";
import "./styles/style.scss";

const ImageContainer = lazy(() => import("components/ImageContainer/ImageContainer"));

interface Props {
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

  const handleClick = (id: number) => {
    setDelailedPageData(id);
  }

  return (
    <div className="wrapper">
      {pokemonDataArray.map((index, key) => (
        <React.Fragment key={key}>
          <NavLink
            to={`/detailedPage/pokemon/${index?.name}`}
            data-pokemon_id={index?.id}
            onClick={() => handleClick(index.id)}
            key={key}
          >
            <Suspense
              fallback={
                <img
                  loading="lazy"
                  src={index?.placeholderBase64}
                  className="placeholderBase64"
                  alt="placeholderBase64"
                />
              }
            >
              <ImageContainer url={index?.image} cn="pokemonImageCard" />
            </Suspense>
          </NavLink>
        </React.Fragment>
      ))
      }
    </div >
  );
};

export default CatalogView;