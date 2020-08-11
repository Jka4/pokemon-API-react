import React, { lazy, Suspense, useEffect, useState } from "react";
import store from "@Store";
import { Provider, connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import Loader from 'react-loader-spinner'
import HeaderLine from "@HeaderLine";
import axios from 'axios';
import { setDelailedPageData } from "@APIutils";

import './styles/style.scss';

const ImageContainer = lazy(() => import('@ImageContainer'));

const DetailedPage = props => {
  const data = props.detailsPageTest || props.detailsPage;
  const { sprites, name } = data;
  const { bigImage, smallImageCount } = props;
  const [evolutionChain, setEvolutionChain] = useState([]);

  const clearDetailPageData = () => {
    store.dispatch({ type: "clear_detailsPage" });
    store.dispatch({ type: "clear_bigImage" });
  }

  useEffect(async () => {
    let solo = await getEvolutionsChain(data.id);
    console.log("solo", solo)
  }, [data])

  const getEvolutionsChain = async (ID) => {
    setEvolutionChain([])
    const URL = `https://pokeapi.co/api/v2/evolution-chain/${ID}/`;
    await axios.get(URL)
      .then(async (response) => {
        let evoChain = [];
        let evoData = response.data.chain;

        do {
          evoChain.push({
            "species_name": evoData.species.name,
          });

          evoData = evoData['evolves_to'][0];
        } while (!!evoData && evoData.hasOwnProperty('evolves_to'));

        // setEvolutionChain((evolutionChain) => [...evolutionChain, ...evoChain]);
        return evoChain;
      })
  }

  return (
    <React.Fragment>
      <HeaderLine />
      <div className='detailedPage' data-testid="detailedPageTest">
        <NavLink to='/' className='backToMainPage' onClick={clearDetailPageData} > Back </NavLink>
        <div className='name'>{name}</div>
        <div className={smallImageCount <= 4 ? 'imagesLineSmall' : 'imagesLine'}>
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

        {/* <div className="mainInformations">
          <div className='skills'>
            <Stats props={props} />
            <Abilities props={props} />
          </div>
          <div className="bigImage">
            {bigImage && <Suspense fallback={<Loader type="TailSpin" height={320}
              width={320} color={"red"}
            />}>
              <ImageContainer url={bigImage} cn={'bigImage'} />
            </Suspense>}
          </div>
        </div> */}



        {/* <EvolutionForms evolutionChain={evolutionChain} /> */}
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
  const { evolutionChain } = props;

  return (
    <React.Fragment>
      <div className="evolutionForms">
        {evolutionChain.map((index, key) => (
          <NavLink to={`/detailedPage/pokemon/${index.species_name}`} data-testid="testId" className="evoForm" data-pokemon_id={'id'} onClick={setDelailedPageData}
            key={key}>
            <div >{index.species_name}</div>
          </NavLink>
        ))}
      </div>
    </React.Fragment >
  )
}


const ConnectedDetailedPage = connect(store => {
  return {
    detailsPage: store.detailsPage,
    bigImage: store.bigImage,
    smallImageCount: store.smallImageCount
  };
})(DetailedPage);

export default props => (
  <Provider store={store}>
    <ConnectedDetailedPage {...props} />
  </Provider>
);
