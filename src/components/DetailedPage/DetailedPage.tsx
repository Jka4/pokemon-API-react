/* eslint-disable import/no-anonymous-default-export */
import React, { lazy, Suspense, useEffect, useState } from "react";
import { Provider, connect } from "react-redux";
import Loader from "react-loader-spinner";

import Stats from "@Stats";
import Abilities from "@Abilities";
import EvolutionForms from "@EvolutionForms";
import Paper from "@material-ui/core/Paper";

import store from "@Store";
import find from "lodash.find";

import POKEMONS from "@pokemonDataArray";

import "./styles/style.scss";

const ImageContainer = lazy(() => import("@ImageContainer"));

type Props = {
  pokemonArr: any;
  detailsPage: any;
};

type evolutionChainProps = {
  placeholderBase64: string;
  imageHQ: string;
};

type DetailsPage = {
  weight: number;
  abilities: any[];
  stats: any[];
  sprites: any;
  name: string;
};

const DetailedPage: React.FC<Props> = ({ detailsPage }: Props) => {
  const { abilities, stats, weight, sprites, name }: DetailsPage = detailsPage;
  const [evolutionChain, setEvolutionChain] = useState<evolutionChainProps>();

  useEffect(() => {
    let pokemonObj = find(POKEMONS, (o) => o.name === detailsPage.name);
    pokemonObj && setEvolutionChain(pokemonObj);
  }, [detailsPage]);

  const randomNum: number = Math.round(0 - 0.5 + Math.random() * (3000 + 1));

  return (
    <>
      <div className="detailedPage">
        <div className="name">{name}</div>
        <div className="imagesLine">
          {sprites ? (
            Object.keys(sprites).map((spriteName: string) => (
              <div key={spriteName}>
                {sprites[spriteName] && (
                  <Paper elevation={3} className="block" key={randomNum}>
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
                      <ImageContainer
                        url={sprites[spriteName]}
                        cn={sprites[spriteName]}
                      />
                    </Suspense>
                    {/* <div className="title">{spriteName}</div> */}
                  </Paper>
                )}
              </div>
            ))
          ) : (
            <>
              {[1, 2, 3, 4].map((
                n: number // trash code just for generate placeholder
              ) => (
                <Paper elevation={3} key={randomNum + n} className="block">
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

          <Paper elevation={3} className="bigImage">
            <Suspense
              fallback={
                <img
                  src={evolutionChain?.placeholderBase64}
                  className="placeholderBase64 bigImage"
                  alt=""
                />
              }
            >
              <ImageContainer url={evolutionChain?.imageHQ} cn={"bigImage"} />
            </Suspense>
          </Paper>
        </div>

        <EvolutionForms
          evolutionChain={evolutionChain}
          currentPokemon={name}
          pokemonsArr={POKEMONS}
        />
      </div>
    </>
  );
};

const ConnectedDetailedPage = connect((store: any) => {
  return {
    detailsPage: store.detailsPage,
  };
})(DetailedPage);

export default (props: any) => (
  <Provider store={store}>
    <ConnectedDetailedPage {...props} />
  </Provider>
);
