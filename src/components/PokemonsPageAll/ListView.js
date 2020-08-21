import React, { lazy, Suspense, useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { setDelailedPageData } from "@APIutils";
import { NavLink } from "react-router-dom";
import Paper from "@material-ui/core/Paper";

import "./styles/style.scss";

const ImageContainer = lazy(() => import("@ImageContainer"));

const ListView = (props) => {
  const { pokemonDataArray } = props;

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
      arr.push(pokemonDataArray[i]);
    }
    setPokemons((pokemons) => [...pokemons, ...arr]);
    setPokemonCount(pokemons.length + howMuchToDownload);
  };

  return (
    <>
      <section className="main">
        <InfiniteScroll
          pageStart={1}
          dataLength={pokemons.length}
          next={fetchPokemons}
          hasMore={pokemons.length < 758}
          loader={<h4>Loading...</h4>}
          className="allPokemonsWrapper"
          endMessage={<p className="pokemon-end">No more pokemons :(</p>}
        >
          {pokemons.map((index, key) => (
            <NavLink
              to={`/detailedPage/pokemon/${index?.name}`}
              data-pokemon_id={index?.id}
              onClick={setDelailedPageData}
              key={index + Math.floor(1 + Math.random() * 9999999999)}
            >
              <Paper elevation={3} className="smallPokemonCard">
                <div className="pokemonLogo">
                  <Suspense
                    fallback={
                      <img
                        src={index?.placeholderBase64 || index?.image}
                        className="placeholderBase64"
                        alt="placeholderBase64"
                      />
                    }
                  >
                    <ImageContainer
                      url={index?.imageHQ || index?.image}
                      cn="pokemonImageCard"
                    />
                  </Suspense>
                </div>
                <div className="pokemonName">{index?.name}</div>
              </Paper>
            </NavLink>
          ))}
        </InfiniteScroll>
      </section>
    </>
  );
};

export default React.memo(ListView);
