import React, { Suspense } from 'react';
import Loader from 'react-loader-spinner'

import Tilt from "react-tilt";
import GetButton from "../GetButton/GetButton";
import store from "../../store";
import { NavLink } from "react-router-dom";
import { setDelailedPageData } from "../utils/API";
import PokemonImage from '../utils/Image'
class MainContainer extends React.Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  render() {
    let dataToRender = store.getState().randomPokemons;

    return (
      <section className='main'>
        <Logo />
        <GetButton />
        <List />

        <div className='itemList'>
          <div className='cardsContainer'>
            {dataToRender && dataToRender.lenght !== 0 &&
              dataToRender.map((i, key) => (
                <PokemonCard
                  key={i.id}
                  id={i.id}
                  src={i.sprites.front_default}
                  name={i.name}
                  order={i.order}
                  base_experience={i.base_experience}
                  onClick={setDelailedPageData}
                />
              ))}
          </div>
        </div>
      </section>
    );
  }
}

export default MainContainer;

const PokemonCard = (props) => {
  const { src, name, order, base_experience, id, onClick } = props;

  return (
    <NavLink to={`/detailedPage/pokemon/${name}`} className='pokemonCard_Outher'>
      <div
        className='pokemonCard'
        onClick={onClick}
        key={id}
        data-pokemon_id={id}>
        <Suspense fallback={<Loader type="TailSpin" height={50}
          width={50} color={"red"}
        />}>
          <PokemonImage url={src} />
        </Suspense>
        <span>{name}</span>
        <span>{order}</span>
        <span>{base_experience}</span>
      </div>
    </NavLink>
  );
}

let List = () => {
  return (
    <h2 className='titles' >
      <ul className='titlesList' >
        <li>photo</li>
        <li>name</li>
        <li>order</li>
        <li>exp</li>
      </ul>
    </h2>
  );
};

let Logo = () => {
  return (
    <div className='getButtonLine'>
      <Tilt
        className='Tilt'
        options={{
          easing: "cubic-bezier(.03,.98,.52,.99)",
          scale: 1.2,
          max: 35
        }}>
        <div className='Tilt-inner'>
          <img src='./images/pokemon.gif' alt='logo_gif' />
        </div>
      </Tilt>
    </div>
  );
};



// const PokemonImage = (props) => {
//   const { src } = useImage({
//     srcList: props.url,
//   })

//   return <img src={src} alt='pokemon' />
// }