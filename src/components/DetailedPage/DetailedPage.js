import React from "react";
import store from "../../store";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

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
          {Object.keys(sprites).map(
            spriteName =>
              sprites[spriteName] && (
                <div className='block' key={spriteName}>
                  <img src={sprites[spriteName]} alt='' />
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

        {statka.map((i, key) => (
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

        {abilities.map((i, key) => (
          <li className='abilitiesLI' key={key}>
            {key + 1}: {i.ability.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
