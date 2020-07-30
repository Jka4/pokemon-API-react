import React, { Suspense } from 'react';
import Loader from 'react-loader-spinner'
import { Provider, connect } from 'react-redux';

import Tilt from "react-tilt";
import GetButton from "../GetButton/GetButton";
import store from "../../store";
import { NavLink } from "react-router-dom";
import { setDelailedPageData } from "../utils/API";
import PokemonImage from '../utils/Image';
import './styles/style.scss';


const MainContainer = props => {
  const dataToRender = props.randomPokemons;
  const hasDataForRender = dataToRender && dataToRender.length >= 1;


  // *** This code is needed for the fastest rendering of the interface,
  // *** the PokemonCard will appear even before the API gives the data, 
  // *** and until the data arrives, the spinner will be shown 
  // *** plus there are fuses in case of a broken img link

  const arrSkeletons = Array.from(Array(props.counter).keys());
  console.log("arrSkeletons", arrSkeletons.length !== 0)
  let keys = (key) => (dataToRender[key] && dataToRender[key].id) + key + Math.floor(1 + Math.random() * 9999999999);
  let id = (key) => dataToRender[key] && dataToRender[key].id;
  let name = (key) => dataToRender[key] && dataToRender[key].name;
  let src = (key) => dataToRender[key] && dataToRender[key].sprites && dataToRender[key].sprites.front_default;
  let order = (key) => dataToRender[key] && dataToRender[key].order;
  let base_experience = (key) => dataToRender[key] && dataToRender[key].base_experience;
  let loader = <Loader type="ThreeDots" height={20} width={40} color={"red"} />;

  return (
    <section className='main'>
      <Logo />
      <GetButton />
      {hasDataForRender && < List />}

      <div className='itemList'>
        <div className='cardsContainer'>
          {hasDataForRender &&
            arrSkeletons.map((i, key) => (
              <PokemonCard
                key={keys(key)}
                id={id(key)}
                src={src(key)}
                name={name(key) || loader}
                order={order(key) || loader}
                base_experience={base_experience(key) || loader}
                onClick={setDelailedPageData}
              />
            ))}
        </div>
      </div>
    </section>
  );

}

const PokemonCard = (props) => {
  const { src, name, order, base_experience, id, onClick } = props;

  return (
    <NavLink to={`/detailedPage/pokemon/${name}`} className='pokemonCard_Outher' data-pokemon_id={id} onClick={onClick}
      key={id}>
      <div className='pokemonCard'>
        <div className="imageWrapper">
          {src ? (<Suspense fallback={<Loader type="TailSpin" height={50}
            width={50} color={"red"}
          />}>
            <PokemonImage url={src} />
          </Suspense>) : (
              (<Loader type="TailSpin" height={50}
                width={50} color={"red"}
              />)
            )}

        </div>
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
          <Suspense fallback={<Loader type="TailSpin" height={120}
            width={150} color={"red"}
          />}>
            <PokemonImage url={'/images/pokemon.gif'} />
          </Suspense>
        </div>
      </Tilt>
    </div>
  );
};


const ConnectedMainContainer = connect(store => {
  return {
    randomPokemons: store.randomPokemons,
    counter: store.counter,
  };
})(MainContainer);

export default props => (
  <Provider store={store}>
    <ConnectedMainContainer {...props} />
  </Provider>
);
