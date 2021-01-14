import React, { lazy, useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { NavLink } from "react-router-dom";

import Paper from "@material-ui/core/Paper";

import "./styles/style.scss";

const ImageContainer = lazy(() => import("components/ImageContainer/ImageContainer"));

interface Props {
  pokemonDataArray: PokemonsType[];
}

interface PokemonsType {
  chain: {
    species_name: string;
  }[];
  id: 0;
  image: string;
  imageHQ: string;
  name: string;
  placeholderBase64: string;
  weight: number;
}

const ListView: React.FC<Props> = ({ pokemonDataArray = [] }: Props) => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [pokemonCount, setPokemonCount] = useState<number>(0);

  useEffect(() => {
    fetchPokemons();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchPokemons = () => {
    const howMuchToDownload = 20;
    let arr: any[] = [];

    for (let i = pokemonCount; i <= pokemonCount + howMuchToDownload; i++) {
      arr.push(pokemonDataArray[i]);
    }
    setPokemons((pokemons: any[]) => [...pokemons, ...arr]);
    setPokemonCount(pokemons.length + 1 + howMuchToDownload);
  };



  const fallback = (placeholderBase64: string) => {
    return (<><img src={placeholderBase64} className="placeholderBase64" alt="placeholderBase64" /></>)
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
          {pokemons.map((pokemon: PokemonsType) => (
            <NavLink
              to={`/detailedPage/pokemon/${pokemon.name}`}
              data-pokemon_id={pokemon.id}
              key={pokemon.id}
            >
              <Paper elevation={3} className="smallPokemonCard">
                <div className="pokemonLogo">

                  <ImageContainer
                    url={pokemon.imageHQ || pokemon.image}
                    cn={"pokemonImageCard"}
                    fallback={fallback(pokemon.placeholderBase64)}
                  />

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
