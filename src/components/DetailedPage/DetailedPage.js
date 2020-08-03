import React, { lazy, Suspense } from "react";
import store from "../../store";
import { Provider, connect } from 'react-redux';
import { Link } from "react-router-dom";
import Loader from 'react-loader-spinner'

import './styles/style.scss';

const ImageContainer = lazy(() => import('../ImageContainer/ImageContainer.js'));

const DetailedPage = props => {
  const data = props.detailsPage;
  const { sprites, name } = data;
  const { bigImage, smallImageCount } = props;

  const clearDetailPageData = () => {
    store.dispatch({ type: "clear_detailsPage" })
    store.dispatch({ type: "clear_bigImage" })
  }

  return (
    <div className='detailedPage'>
      <Link to='/' className='backToMainPage' onClick={clearDetailPageData} > Back </Link>
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
      <div className='skills'>
        <Stats props={props} />
        <Abilities props={props} />
      </div>
      <div className="bigImage">
        {bigImage && <Suspense fallback={<Loader type="TailSpin" height={250}
          width={250} color={"red"}
        />}>
          <ImageContainer url={bigImage} />
        </Suspense>}
      </div>
    </div >
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
    bigImage: store.bigImage,
    smallImageCount: store.smallImageCount
  };
})(DetailedPage);

export default props => (
  <Provider store={store}>
    <ConnectedDetailedPage {...props} />
  </Provider>
);
