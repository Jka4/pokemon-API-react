import React from 'react';
import { Provider, connect } from 'react-redux';
import store from "@Store";

import GetButton from "@GetButton";
import { setDelailedPageData } from "@APIutils";
import PokemonCard from '@PokemonCard';
import Heading from '@Heading';
import Logo from '@Logo';
import HeaderLine from "@HeaderLine";

import './styles/style.scss';

const MainContainer = props => {
  const dataToRender = props.randomPokemons;
  const hasDataForRender = dataToRender && dataToRender.length >= 1;

  return (
    <section className='main'>
      <HeaderLine />

      <Logo />
      <GetButton />
      {hasDataForRender && < Heading />}

      <div className='itemList'>
        <div className='cardsContainer'>
          {dataToRender &&
            dataToRender.map((i, key) => (
              <PokemonCard
                key={dataToRender[key].id + key + Math.floor(1 + Math.random() * 9999999999)}
                id={dataToRender[key]?.id}
                src={dataToRender[key]?.sprites?.front_default}
                name={dataToRender[key]?.name}
                order={dataToRender[key]?.order}
                base_experience={dataToRender[key]?.base_experience}
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
    randomPokemons: store.randomPokemons
  };
})(MainContainer);

export default props => (
  <Provider store={store}>
    <ConnectedMainContainer {...props} />
  </Provider>
);
