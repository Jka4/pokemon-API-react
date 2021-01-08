/* eslint-disable import/no-anonymous-default-export */
import React, { lazy, Suspense, useEffect, useState } from "react";
import { Provider, connect } from "react-redux";
import Loader from "react-loader-spinner";

import Stats from "./Stats";
import Abilities from "./Abilities";
import EvolutionForms from "./EvolutionForms";
import Paper from "@material-ui/core/Paper";

import store from "Store/store";
import find from "lodash.find";

import POKEMONS from "utils/pokemonDataArray";

import "./styles/style.scss";

const ImageContainer = lazy(() => import("components/ImageContainer/ImageContainer"));

type Props = {
  pokemonArr: DetailsPageTypes[] | null;
  detailsPage: null | any;
};

type evolutionChainTypes = {
  placeholderBase64: string;
  imageHQ: string;
};

type DetailsPageTypes = {
  weight: number;
  abilities: {
    ability: {
      url: string;
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  sprites: any[string];
  name: string;
};


const DetailedPage: React.FC<Props> = ({ detailsPage }: Props) => {
  const [evolutionChain, setEvolutionChain] = useState<evolutionChainTypes>();
  const { abilities, stats, weight, sprites, name }: DetailsPageTypes = detailsPage || {};

  useEffect(() => {
    if (detailsPage) {
      let pokemonObj = find(POKEMONS, (o) => o.name === detailsPage.name);
      pokemonObj && setEvolutionChain(pokemonObj);
    }
  }, [detailsPage]);


  const fallbackSprites = () => {
    return (<> <Loader type="TailSpin" height={50} width={50} color={"red"} /> </>
    );
  };

  const fallbackEvo = (placeholderBase64: string) => {
    return (
      <>
        <img
          src={placeholderBase64}
          className="placeholderBase64 bigImage"
          alt=""
        />
      </>
    );
  };

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
                    <ImageContainer
                      url={sprites[spriteName]}
                      cn={sprites[spriteName]}
                      fallback={fallbackSprites}
                    />
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
            {evolutionChain && <ImageContainer url={evolutionChain.imageHQ} cn={"bigImage"} fallback={fallbackEvo(evolutionChain.placeholderBase64)} />}
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

const ConnectedDetailedPage = connect((store: Props) => {
  return {
    detailsPage: store.detailsPage,
  };
})(DetailedPage);

export default (props: any) => (
  <Provider store={store}>
    <ConnectedDetailedPage {...props} />
  </Provider>
);
