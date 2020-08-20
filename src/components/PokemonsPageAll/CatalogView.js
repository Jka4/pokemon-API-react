import React, { Suspense, lazy } from "react";
import "react-tippy/dist/tippy.css";
import { setDelailedPageData } from "@APIutils";
import { NavLink } from "react-router-dom";

import "./styles/style.scss";

const ImageContainer = lazy(() => import("@ImageContainer"));

const CatalogView = (props) => {
  const { pokemonDataArray } = props;

  return (
    <div className="wrapper">
      {pokemonDataArray.map((index, key) => (
        <React.Fragment key={key}>
          <NavLink
            to={`/detailedPage/pokemon/${index?.name}`}
            data-pokemon_id={index?.id}
            onClick={setDelailedPageData}
            key={key}
          >
            <Suspense
              fallback={
                <img
                  loading="lazy"
                  src={index?.placeholderBase64 || index?.image}
                  className="placeholderBase64"
                  alt="placeholderBase64"
                />
              }
            >
              <ImageContainer url={index?.image} cn="pokemonImageCard" />
            </Suspense>
          </NavLink>
        </React.Fragment>
      ))}
    </div>
  );
};

export default React.memo(CatalogView);
