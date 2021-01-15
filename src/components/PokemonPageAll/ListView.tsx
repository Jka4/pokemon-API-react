import React, { lazy, useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { NavLink } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';

import './styles/style.scss';

const ImageContainer = lazy(() => import('components/ImageContainer/ImageContainer'));

type Props = {
  pokemonDataArray: PokemonType[];
};

type PokemonType = {
  chain: {
    species_name: string;
  }[];
  id: 0;
  image: string;
  imageHQ: string;
  name: string;
  placeholderBase64: string;
  weight: number;
};

const ListView: React.FC<Props> = ({ pokemonDataArray = [] }: Props) => {
  const [pokemon, setPokemon] = useState<any[]>([]);
  const [pokemonCount, setPokemonCount] = useState<number>(0);

  useEffect(() => {
    fetchPokemon();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchPokemon = () => {
    const howMuchToDownload = 20;
    let arr: any[] = [];

    for (let i = pokemonCount; i <= pokemonCount + howMuchToDownload; i++) {
      arr.push(pokemonDataArray[i]);
    }
    setPokemon((pokemon: any[]) => [...pokemon, ...arr]);
    setPokemonCount(pokemon.length + 1 + howMuchToDownload);
  };

  const fallback = (placeholderBase64: string) => {
    return (
      <>
        <img src={placeholderBase64} className="placeholderBase64 deBlur" alt="placeholderBase64" />
      </>
    );
  };

  return (
    <>
      <section className="main">
        <InfiniteScroll
          dataLength={pokemon.length}
          next={fetchPokemon}
          hasMore={pokemon.length < 758}
          loader={<h4>Loading...</h4>}
          className="allPokemonWrapper"
          endMessage={<p className="pokemon-end">No more pokemon :(</p>}
        >
          {pokemon.map((pokemon: PokemonType) => (
            <NavLink to={`/detailedPage/pokemon/${pokemon.name}`} data-pokemon_id={pokemon.id} key={pokemon.id}>
              <Paper elevation={3} className="smallPokemonCard">
                <div className="pokemonLogo">
                  <ImageContainer
                    url={pokemon.imageHQ || pokemon.image}
                    cn={'pokemonImageCard'}
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
