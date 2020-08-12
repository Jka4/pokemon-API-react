import React, { lazy, Suspense, useState, useEffect } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from 'react-loader-spinner'

import { setDelailedPageData } from "@APIutils";
import { NavLink } from "react-router-dom";

import './styles/style.scss';

const ImageContainer = lazy(() => import('@ImageContainer'));

const ListView = (props) => {
  const { pokemonDataArray } = props

  const [pokemons, setPokemons] = useState([]);
  const [pokemonCount, setPokemonCount] = useState(0);

  useEffect(() => {
    fetchPokemons();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchPokemons = () => {
    const howMuchToDownload = 70;
    let arr = [];

    for (let i = pokemonCount; i <= pokemonCount + howMuchToDownload; i++) {
      arr.push(pokemonDataArray[i])
    }

    setPokemons(pokemons => [...pokemons, ...arr]);
    setPokemonCount(pokemons.length + howMuchToDownload)
  }

  return (
    <React.Fragment>
      <section className='main'>
        <InfiniteScroll
          pageStart={1}
          dataLength={pokemons.length}
          next={fetchPokemons}
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
                  <ImageContainer url={index?.imageHQ} />
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


export default ListView;
