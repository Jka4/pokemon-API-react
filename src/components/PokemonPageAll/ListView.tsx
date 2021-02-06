import React, { lazy, useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { NavLink } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';

import './styles/style.scss';

import { PokesTypes } from 'types/index';

const ImageContainer = lazy(() => import('components/ImageContainer/ImageContainer'));

type Props = {
  pokemonArr: PokesTypes[];
};

const ListView: React.FC<Props> = ({ pokemonArr = [] }: Props) => {
  const [pokemon, setPokemon] = useState<PokesTypes[]>([]);
  const [pokemonCount, setPokemonCount] = useState<number>(0);

  useEffect(() => {
    fetchPokemon();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchPokemon = () => {
    const howMuchToDownload = 25;
    let arr: PokesTypes[] = [];

    for (let i = pokemonCount; i <= pokemonCount + howMuchToDownload; i++) {
      pokemonCount <= 713 && arr.push(pokemonArr[i]);
    }
    setPokemon((pokemon: PokesTypes[]) => [...pokemon, ...arr]);
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
          hasMore={pokemonCount <= pokemon.length}
          loader={<h4>Loading...</h4>}
          className="allPokemonWrapper"
          endMessage={<p className="pokemon-end">Don't have more pokemon :(</p>}
        >
          {pokemon.map((pokemon: PokesTypes) => (
            <NavLink to={`/detailedPage/pokemon/${pokemon.name}`} key={pokemon.id}>
              <Paper elevation={3} className="smallPokemonCard">
                <div className="pokemonLogo">
                  <ImageContainer
                    url={pokemon.imageHQ || pokemon.image}
                    cn={'pokemonImageCard deBlur'}
                    fallback={fallback(pokemon.placeholderBase64)}
                  />
                </div>
                <div className="pokemonName">{pokemon?.name}</div>
              </Paper>
            </NavLink>
          ))}
        </InfiniteScroll>
      </section>
    </>
  );
};

export default ListView;
