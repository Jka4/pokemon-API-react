import React, { Suspense, useState, useEffect } from 'react';
import store from "../../store";
import { Provider, connect } from 'react-redux';
import { Link } from "react-router-dom";

import './style.scss';

import PokemonImage from '../utils/Image'
import Loader from 'react-loader-spinner'


const DetailedPage = props => {
  const [pokemonUrl, setPokemonUrl] = useState();
  const [smallImages, setSmallImages] = useState([]);

  useEffect(() => {
    findBigImage(sprites);
  });

  useEffect(() => {
    // setAllUniqSmallImagesUrl(sprites);
  }, [props.detailsPage]);

  const findBigImage = async (sprites) => {
    let name;
    let counter;

    Object.keys(sprites).map((i) => {
      if (sprites[i] !== null && counter !== 1) {
        name = sprites[i].replace(/\D+/g, "");
        counter++;
      }
    });

    let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/${name}.png`;
    let response = await fetch(url);
    response.ok && setPokemonUrl(url);
  }



  const setAllUniqSmallImagesUrl = (sprites) => {
    let imgArr = [];
    Object.keys(sprites).map(spriteName => {
      !!sprites[spriteName] && imgArr.push(sprites[spriteName]);
    })
    setSmallImages(imgArr);
  }

  let data = props.detailsPage;
  let { sprites, name } = data;

  return (
    <div className='detailedPage'>
      <Link to='/' className='backToMainPage'>
        Back
        </Link>

      <div className='name'>{name}</div>

      <div className={smallImages.length <= 4 ? 'imagesLineSmall' : 'imagesLine'}>
        {smallImages && Object.keys(sprites).map(
          spriteName =>
            sprites[spriteName] && (
              <div className='block' key={spriteName}>
                <Suspense fallback={<Loader type="TailSpin" height={50}
                  width={50} color={"red"}
                />}>
                  <PokemonImage url={sprites[spriteName]} />
                </Suspense>
                <div className='title'>{spriteName}</div>
              </div>
            )
        )}
      </div>
      <div className='skills'>
        <Stats props={props} />
        <Abilities props={props} />
      </div>
      <div className="bigImage">
        {pokemonUrl && <Suspense fallback={<Loader type="TailSpin" height={250}
          width={250} color={"red"}
        />}>
          <PokemonImage url={pokemonUrl} />
        </Suspense>}
      </div>
    </div>
  );

}

let Stats = (props) => {
  let { stats, weight } = props.props.detailsPage;

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

let Abilities = (props) => {
  let { abilities } = props.props.detailsPage;

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
