import React, { lazy, Suspense, useState, useEffect } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from 'react-loader-spinner'
import { Link } from "react-router-dom";

import HeaderLine from "@HeaderLine";
import { setDelailedPageData } from "@APIutils";
import { NavLink } from "react-router-dom";

import { Provider, connect } from 'react-redux';
import store from "@Store";

import './styles/style.scss';

const ImageContainer = lazy(() => import('@ImageContainer'));

const AllPokemonsPage = (props) => {
  const { pokemonDataArray } = props

  const [pokemons, setPokemons] = useState([]);
  const [pokemonCount, setPokemonCount] = useState(0);

  useEffect(() => {
    fetchAllPokemons();
  }, []);

  const fetchAllPokemons = () => {
    const howMuchToDownload = 70;
    let arr = [];

    for (let i = pokemonCount + 1; i <= pokemonCount + howMuchToDownload; i++) {
      arr.push(pokemonDataArray[i + 1])
    }

    setPokemons(pokemons => [...pokemons, ...arr]);
    setPokemonCount(pokemons.length + howMuchToDownload)
  }

  return (
    <React.Fragment>
      <HeaderLine />
      <Link to='/' className='backToMainPage' > Back </Link>
      <section className='main'>
        <InfiniteScroll
          pageStart={1}
          dataLength={pokemons.length}
          next={fetchAllPokemons}
          hasMore={pokemons.length < 806}
          loader={<h4>Loading...</h4>}
          className='allPokemonsWrapper'
          endMessage={<p className="pokemon-end">No more pokemons :(</p>}
        >
          {pokemons.map((index, key) => (
            <NavLink to={`/detailedPage/pokemon/${index?.name}`} className='smallPokemonCard' data-pokemon_id={index?.id} onClick={setDelailedPageData}
              key={index + Math.floor(1 + Math.random() * 9999999999)}>
              <div className="pokemonLogo">
                <Suspense fallback={<Loader type="TailSpin" height={90}
                  width={110} color={"red"}
                />}>
                  <ImageContainer url={index?.image} />
                </Suspense>
              </div>
              <div className="pokemonName">{index?.name}</div>
            </NavLink>
          ))}
        </InfiniteScroll>
      </section>
    </React.Fragment>
  )
}


const ConnectedAllPokemonsPage = connect(store => {
  return {
    pokemonDataArray: store.pokemonsArr,
  };
})(AllPokemonsPage);

export default props => (
  <Provider store={store}>
    <ConnectedAllPokemonsPage {...props} />
  </Provider>
);
