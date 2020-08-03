import React from 'react';
import Loader from 'react-loader-spinner'
import { Provider, connect } from 'react-redux';
import { FixedSizeList as List } from 'react-window';

import GetButton from "../GetButton/GetButton";
import store from "../../store";
import { setDelailedPageData } from "../utils/API";
import './styles/style.scss';
import PokemonCard from './PokemonCard';
import Heading from './Heading';
import Logo from './Logo';

const MainContainer = props => {
  const dataToRender = props.randomPokemons;
  const hasDataForRender = dataToRender && dataToRender.length >= 1;

  // *** This code is needed for the fastest rendering of the interface,
  // *** the PokemonCard will appear even before the API gives the data, 
  // *** and until the data arrives, the spinner will be shown 
  // *** plus there are fuses in case of a broken img link

  const arrSkeletons = Array.from(Array(props.counter).keys());
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
      {hasDataForRender && < Heading />}

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
