import React, { Suspense } from 'react';
import store from "../../store";
import { Link } from "react-router-dom";

import PokemonImage from '../utils/Image'
import Loader from 'react-loader-spinner'

class DetailedPage extends React.Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  render() {
    let data = store.getState().detailsPage;
    let sprites = data.sprites;
    let name = data.name;

    return (
      <div className='detailedPage'>
        <Link to='/' className='backToMainPage'>
          Back
        </Link>

        <div className='name'>{name}</div>
        <div className='imagesLine'>
          {sprites && Object.keys(sprites).map(
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
          <Stats />
          <Abilities />
        </div>
      </div>
    );
  }
}

export default DetailedPage;

let Stats = () => {
  let statka = store.getState().detailsPage.stats;
  let weight = store.getState().detailsPage.weight;

  return (
    <div className='stats'>
      <ul className='statsUL'>
        <div className='skills_title'>Stats</div>

        {statka && statka.map((i, key) => (
          <li className='statsLI' key={key}>
            {i.stat.name} {i.base_stat}
          </li>
        ))}
        <li className='statsLI'>weight {weight}kg</li>
      </ul>
    </div>
  );
};

let Abilities = () => {
  let abilities = store.getState().detailsPage.abilities;

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
