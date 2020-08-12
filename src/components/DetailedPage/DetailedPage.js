import React, { lazy, Suspense, useEffect, useState } from "react";
import { Provider, connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import Loader from 'react-loader-spinner'

import HeaderLine from "@HeaderLine";
import { setDelailedPageData } from "@APIutils";
import pokemonDataArray from '@pokemonDataArray';

import store from "@Store";
import * as _ from 'lodash';

import './styles/style.scss';

const ImageContainer = lazy(() => import('@ImageContainer'));


const DetailedPage = props => {
  const data = props.detailsPageTest || props.detailsPage;
  const { sprites, name } = data;
  const [evolutionChain, setEvolutionChain] = useState();

  const clearDetailPageData = () => {
    store.dispatch({ type: "CLEAR_DETAILS_PAGE" });
  }

  useEffect(() => {
    let pokemonObj = _.find(pokemonDataArray, (o) => o.name === data.name);
    pokemonObj && setEvolutionChain(pokemonObj);

  }, [data])


  return (
    <React.Fragment>
      <HeaderLine />
      <div className='detailedPage' data-testid="detailedPageTest">
        <NavLink to='/' className='backToMainPage' onClick={clearDetailPageData} > Back </NavLink>
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
            <Stats props={props} />
            <Abilities props={props} />
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

const Stats = (props) => {
  const { stats, weight } = props.props.detailsPage;

  return (
    <div className='stats'>
      <ul className='statsUL'>
        <div className='skills_title'>Stats</div>

        {stats && stats.map((i, key) => (
          <li className='statsLI' key={key}>
            {i.stat.name} {i.base_stat}
          </li>
        ))}
        <li className='statsLI'>weight {weight}kg</li>
      </ul>
    </div>
  );
};

const Abilities = (props) => {
  const { abilities } = props.props.detailsPage;

  return (
    <div className='abilities'>
      <ul className='abilitiesUL'>
        <div className='skills_title'>Abilities</div>

        {abilities && abilities.map((i, key) => (
          <li className='abilitiesLI' key={key}>
            {key + 1}: {i.ability.name}
          </li>
        ))}
      </ul>
    </div>
  );
};


const EvolutionForms = (props) => {
  const chainNames = props.evolutionChain?.chain;
  const currentPokemon = props?.currentPokemon
  const [chain, setChain] = useState();

  useEffect(() => {
    let arr = [];

    chainNames && chainNames.forEach((index) => {
      index.image = _.find(pokemonDataArray, (o) => o.name === index.species_name).image;
      index.id = _.find(pokemonDataArray, (o) => o.name === index.species_name).id;
      arr.push(index);
    })
    setChain(arr);
  }, [chainNames])


  return (
    <React.Fragment>
      <div className="evolutionForms">
        {chain && chain.map((index, key) => (
          <NavLink to={`/detailedPage/pokemon/${index.id}`} data-testid="testId"
            className={currentPokemon === index.species_name ? 'evoForm currentPokemon' : 'evoForm'}
            data-pokemon_id={index.id} onClick={setDelailedPageData} key={key}>

            <Suspense fallback={<Loader type="TailSpin" height={96}
              width={96} color={"red"}
            />}>
              <ImageContainer url={index.image} />
            </Suspense>

            <div className='pokemonName' >{index.species_name}</div>
          </NavLink>
        ))}
      </div>
    </React.Fragment >
  )
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
