import React, { lazy, Suspense, useEffect, useState } from "react";
import { Provider, connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import Stats from '@Stats';
import Abilities from '@Abilities';
import EvolutionForms from '@EvolutionForms';

import pokemonDataArray from '@pokemonDataArray';

import store from "@Store";
import * as _ from 'lodash';

import './styles/style.scss';

const ImageContainer = lazy(() => import('@ImageContainer'));


const DetailedPage = props => {
  const data = props.detailsPageTest || props.detailsPage;
  const { abilities, stats, weight } = props.detailsPage;
  const { sprites, name } = data;
  const [evolutionChain, setEvolutionChain] = useState();

  useEffect(() => {
    let pokemonObj = _.find(pokemonDataArray, (o) => o.name === data.name);
    pokemonObj && setEvolutionChain(pokemonObj);
  }, [data])


  return (
    <React.Fragment>
      <div className='detailedPage' data-testid="detailedPageTest">
        <div className='name'>{name}</div>
        <div className='imagesLine'>
          {sprites && Object.keys(sprites).map(
            spriteName =>
              sprites[spriteName] && (
                <div className='block' key={spriteName}>
                  <Suspense fallback={<Loader type="TailSpin" height={50}
                    width={50} color={"red"}
                  />}>
                    <ImageContainer url={sprites[spriteName]} />
                  </Suspense>
                  <div className='title'>{spriteName}</div>
                </div>
              )
          )}
        </div>
        <div className="mainInformations">
          <div className='skills'>
            <Stats weight={weight} stats={stats} />
            <Abilities abilities={abilities} />
          </div>
          <div className="bigImage">
            {evolutionChain?.imageHQ && <Suspense fallback={<Loader type="TailSpin" height={320}
              width={320} color={"red"}
            />}>
              <ImageContainer url={evolutionChain.imageHQ} cn={'bigImage'} />
            </Suspense>}
          </div>
        </div>
        <EvolutionForms evolutionChain={evolutionChain} currentPokemon={name} />
      </div>
    </React.Fragment>
  );
}


const ConnectedDetailedPage = connect(store => {
  return {
    detailsPage: store.detailsPage,
  };
})(DetailedPage);

export default props => (
  <Provider store={store}>
    <ConnectedDetailedPage {...props} />
  </Provider>
);
