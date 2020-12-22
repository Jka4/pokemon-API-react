/* eslint-disable import/no-anonymous-default-export */
import React, { lazy, Suspense, useEffect, useState } from "react";
import { Provider, connect } from "react-redux";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";

import Stats from "@Stats";
import Abilities from "@Abilities";
import EvolutionForms from "@EvolutionForms";
import Paper from "@material-ui/core/Paper";

import store from "@Store";
import find from "lodash.find";

import "./styles/style.scss";

const ImageContainer = lazy(() => import("@ImageContainer"));

const DetailedPage = ({
  pokemonsArr,
  detailsPage,
  detailsPage: { abilities, stats, weight, sprites, name },
}) => {
  const [evolutionChain = [], setEvolutionChain] = useState();

  useEffect(() => {
    let pokemonObj = find(pokemonsArr, (o) => o.name === detailsPage.name);
    pokemonObj && setEvolutionChain(pokemonObj);
  }, [detailsPage, pokemonsArr]);

  return (
    <>
      <div className="detailedPage" data-testid="detailedPageTest">
        <div className="name">{name}</div>
        <div className="imagesLine">
          {sprites ? (
            Object.keys(sprites).map(
              (spriteName) =>
                sprites[spriteName] && (
                  <Paper elevation={3} className="block" key={spriteName}>
                    <Suspense
                      fallback={
                        <Loader
                          type="TailSpin"
                          height={50}
                          width={50}
                          color={"red"}
                        />
                      }
                    >
                      <ImageContainer url={sprites[spriteName]} />
                    </Suspense>
                    {/* <div className="title">{spriteName}</div> */}
                  </Paper>
                )
            )
          ) : (
            <>
              {[1, 2, 3, 4].map((
                n // trashcode just for generate placeholder
              ) => (
                <Paper elevation={3} key={n} className="block">
                  <Loader
                    type="TailSpin"
                    height={50}
                    width={50}
                    color={"red"}
                  />
                </Paper>
              ))}
            </>
          )}
        </div>
        <div className="mainInformations">
          <div className="skills">
            <Stats weight={weight} stats={stats} />
            <Abilities abilities={abilities} />
          </div>

          {evolutionChain?.imageHQ && (
            <Paper elevation={3} className="bigImage">
              {evolutionChain?.imageHQ && (
                <Suspense
                  fallback={
                    <img
                      src={evolutionChain?.placeholderBase64}
                      className="placeholderBase64 bigImage"
                      alt=""
                    />
                  }
                >
                  <ImageContainer
                    url={evolutionChain.imageHQ}
                    cn={"bigImage"}
                  />
                </Suspense>
              )}
            </Paper>
          )}
        </div>

        <EvolutionForms
          evolutionChain={evolutionChain}
          currentPokemon={name}
          pokemonsArr={pokemonsArr}
        />
      </div>
    </>
  );
};

DetailedPage.propTypes = {
  detailsPage: PropTypes.any,
  pokemonsArr: PropTypes.any,
};

const ConnectedDetailedPage = connect((store) => {
  return {
    detailsPage: store.detailsPage,
    pokemonsArr: store.pokemonsArr,
  };
})(DetailedPage);

export default (props) => (
  <Provider store={store}>
    <ConnectedDetailedPage {...props} />
  </Provider>
);
