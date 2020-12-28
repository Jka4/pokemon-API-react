import React, { lazy, Suspense, useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { NavLink } from "react-router-dom";

import { setDelailedPageData } from "utils/API";

import Paper from "@material-ui/core/Paper";

import "./styles/style.scss";

const ImageContainer = lazy(() => import("components/ImageContainer/ImageContainer"));

interface Props {
  pokemonDataArray: {
    chain: {
      species_name: string;
    }[];
    id: 0;
    image: string;
    imageHQ: string;
    name: string;
    placeholderBase64: string;
    weight: number;
  }[];
}

interface Pokes {
  pokemon: {
    id: number;
    name: string;
    imageHQ: string;
    image: string;
    placeholderBase64: string;
  };
  [index: string]: any;
}

const ListView: React.FC<Props> = ({ pokemonDataArray = [] }: Props) => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [pokemonCount, setPokemonCount] = useState<number>(0);

  useEffect(() => {
    fetchPokemons();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchPokemons = () => {
    const howMuchToDownload = 70;
    let arr: any[] = [];

    for (let i = pokemonCount; i <= pokemonCount + howMuchToDownload; i++) {
      arr.push(pokemonDataArray[i]);
    }
    setPokemons((pokemons: any[]) => [...pokemons, ...arr]);
    setPokemonCount(pokemons.length + howMuchToDownload);
  };

  const handleClick = (id: number) => {
    setDelailedPageData(id, false);
  }

  return (
    <>
      <section className="main">
        <InfiniteScroll
          dataLength={pokemons.length}
          next={fetchPokemons}
          hasMore={pokemons.length < 758}
          loader={<h4>Loading...</h4>}
          className="allPokemonsWrapper"
          endMessage={<p className="pokemon-end">No more pokemons :(</p>}
        >
          {pokemons.map((pokemon: Pokes) => (
            <NavLink
              to={`/detailedPage/pokemon/${pokemon.name}`}
              data-pokemon_id={pokemon.id}
              onClick={() => handleClick(pokemon.id)}
              key={pokemon.id + Math.floor(1 + Math.random() * 9999999999)}
            >
              <Paper elevation={3} className="smallPokemonCard">
                <div className="pokemonLogo">
                  <Suspense
                    fallback={
                      <img
                        src={pokemon.placeholderBase64 || pokemon.image}
                        className="placeholderBase64"
                        alt="placeholderBase64"
                      />
                    }
                  >
                    <ImageContainer
                      url={pokemon.imageHQ || pokemon.image}
                      cn="pokemonImageCard"
                    />
                  </Suspense>
                </div>
                <div className="pokemonName">{pokemon.name}</div>
              </Paper>
            </NavLink>
          ))}
        </InfiniteScroll>
      </section>
    </>
  );
};

export default ListView;
