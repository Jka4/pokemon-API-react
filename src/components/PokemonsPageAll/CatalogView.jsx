import React, { Suspense, lazy } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { setDelailedPageData } from "@APIutils";

import "react-tippy/dist/tippy.css";
import "./styles/style.scss";

const ImageContainer = lazy(() => import("@ImageContainer"));

const CatalogView = ({ pokemonDataArray = [] }) => {
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

export default CatalogView;

CatalogView.propTypes = {
  pokemonDataArray: PropTypes.array,
};
