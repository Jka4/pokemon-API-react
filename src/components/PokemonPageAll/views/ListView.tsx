import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { NavLink } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';

import { PokesTypes } from 'types/index';
import styled from 'styled-components';
import ImageContainer from 'components/ImageContainer/ImageContainer';

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
    return <img src={placeholderBase64} className="placeholderBase64 deBlur" alt="placeholderBase64" />;
  };

  return (
    <>
      <ScrollStyled
        dataLength={pokemon.length}
        next={fetchPokemon}
        hasMore={pokemonCount <= pokemon.length}
        loader={<h4>Loading...</h4>}
        endMessage={<End>Don't have more pokemon :(</End>}
      >
        {pokemon.map((pokemon: PokesTypes) => (
          <NavLink to={`/detailedPage/pokemon/${pokemon.name}`} key={pokemon.id}>
            <SmallCard elevation={3}>
              <Logo>
                <ImageContainer
                  url={pokemon.imageHQ || pokemon.image}
                  cn={'pokemonImageCard deBlur'}
                  fallback={fallback(pokemon.placeholderBase64)}
                />
              </Logo>
              <Name>{pokemon?.name}</Name>
            </SmallCard>
          </NavLink>
        ))}
      </ScrollStyled>
    </>
  );
};

const ScrollStyled = styled(InfiniteScroll)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 100px;
  min-height: 100vh;
`;

const Logo = styled.div`
  width: 100%;
  min-height: 160px;
  text-align: center;

  img,
  svg {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const SmallCard = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 10px;
  border-radius: 10px;
  background: #4c4cffd9 !important;
  cursor: pointer;
  width: 160px;
  min-height: 240px;
  object-fit: cover;

  &:hover {
    transform: scale(1.02);
  }
`;

const End = styled.p`
  margin-top: 40px;
  width: 100%;
  text-align: center;
  font-size: 26px;
`;

const Name = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: black;
  font-size: 24px;
`;

export default ListView;
