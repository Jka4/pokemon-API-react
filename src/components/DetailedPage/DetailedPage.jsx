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

const DetailedPage = (props) => {
  const data = props.detailsPageTest || props.detailsPage;
  const { sprites, name } = data;
  const {
    detailsPage: { abilities, stats, weight },
    pokemonsArr,
  } = props;
  const [evolutionChain, setEvolutionChain] = useState();

  useEffect(() => {
    let pokemonObj = find(pokemonsArr, (o) => o.name === data.name);
    pokemonObj && setEvolutionChain(pokemonObj);
  }, [data, pokemonsArr]);

  return (
    <>
      <div className="detailedPage" data-testid="detailedPageTest">
        <div className="name">{name}</div>
        <div className="imagesLine">
          {sprites &&
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
                    <div className="title">{spriteName}</div>
                  </Paper>
                )
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

DetailedPage.propTypes = {
  detailsPage: PropTypes.object,
  pokemonsArr: PropTypes.array,
};
