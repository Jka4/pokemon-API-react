import React, { useState, useEffect, useCallback } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import { ImageContainer } from 'components/ImageContainer/ImageContainer';

import { PokesTypes } from 'types/index';

import styled from 'styled-components';
import { pokemonArrSelector } from 'selectors';
import useInfiniteScroll, { UseInfiniteScrollProps } from 'hooks/useInfiniteScroll';
import { PAGINATION_LIMIT } from 'constants/index';

const BigGrid: React.FC = () => {
  // const [pokemon, setPokemon] = useState<PokesTypes[]>([]);
  // const [pokemonCount, setPokemonCount] = useState<number>(0);
  const pokemonArr = useSelector(pokemonArrSelector);
  // console.log('🚀 ~ pokemonArr', pokemonArr.length);
  // console.log('🚀 ~ pokemonArr', pokemonArr);

  // useEffect(() => {
  //   fetchPokemon();

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const fetchPokemon = () => {
  //   const howMuchToDownload = 34;
  //   let arr: PokesTypes[] = [];

  //   for (let i = pokemonCount; i <= pokemonCount + howMuchToDownload; i++) {
  //     pokemonCount <= 713 && arr.push(pokemonArr[i]);
  //   }
  //   setPokemon((pokemon: PokesTypes[]) => [...pokemon, ...arr]);
  //   setPokemonCount(pokemon.length + 1 + howMuchToDownload);
  // };

  const fallback = (placeholderBase64: string) => {
    return <img src={placeholderBase64} alt="placeholderBase64as" />;
  };

  const fetchList: UseInfiniteScrollProps['fetchList'] = useCallback(
    async (params: any) => {
      const page = Number(params.$skip) / params.$limit;
      console.log('🚀 ~ params', params);

      const skip = String(Math.max(page * PAGINATION_LIMIT || 0, 0));
      const solo = pokemonArr.slice(skip, PAGINATION_LIMIT);

      return solo;

      // const { result: assetsResult } = await getAssetList({
      //   params: {
      //     ...params,
      //     search: tagsArr,
      //     $sort: { [sortType]: sortOrder ? 1 : -1 },
      //     $skip: String(Math.max(page * ASSETS_PAGINATION_LIMIT || 0, 0)),
      //     $limit: ASSETS_PAGINATION_LIMIT,
      //   },
      // });
      // return [assetsResult];
    },
    [pokemonArr],
  );

  const { InfiniteScroll, entitys, loading, loaded, total } = useInfiniteScroll({
    limit: PAGINATION_LIMIT,
    fetchList,
    dependencies: [],
    resetDependencies: [],
  });

  console.log('🚀 ~ entitys 1', entitys);

  const pokemons: any = [];

  return (
    <>
      <ScrollStyled
      // dataLength={pokemon.length}
      // next={fetchPokemon}
      // hasMore={pokemonCount <= pokemon.length}
      // loader={null}
      // endMessage={<End>Don't have more pokemon :(</End>}
      >
        {entitys?.map((pokemon: PokesTypes) => (
          <NavLink to={`/detailedPage/${pokemon.name}`} key={pokemon.name}>
            <Card elevation={3}>
              <Logo>
                <ImageContainer url={pokemon.imageHQ || pokemon.image} fallback={fallback(pokemon.placeholderBase64)} />
              </Logo>
              <Name>{pokemon?.name}</Name>
            </Card>
          </NavLink>
        ))}

        <InfiniteScroll />
      </ScrollStyled>
    </>
  );
};

const ScrollStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;
  max-width: 900px;
  width: 100%;
`;

// const ScrollStyled = styled(InfiniteScroll)`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   align-items: flex-start;
//   justify-content: center;
//   min-height: 100vh;
//   max-width: 900px;
//   width: 100%;
// `;

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

const Card = styled(Paper)`
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

export default BigGrid;
