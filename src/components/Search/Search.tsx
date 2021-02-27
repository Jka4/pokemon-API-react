/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

import Fuse from 'fuse.js';
import { useClickAway } from 'ahooks';

import { PokesTypes } from 'types/index';

import styled from 'styled-components';

import ImageContainer from 'components/ImageContainer/ImageContainer';

let fuseOptions = {
  shouldSort: true,
  tokenize: true,
  matchAllTokens: false,
  findAllMatches: false,
  includeScore: true,
  includeMatches: true,
  threshold: 0.3,
  location: 0,
  distance: 10,
  maxPatternLength: 20,
  minMatchCharLength: 2,
  keys: ['name', 'weight', 'id'],
};

interface SearchTypes {
  pokemonArr: PokesTypes[];
}

const Search: React.FC = () => {
  const pokemonArr = useSelector((state: SearchTypes) => state.pokemonArr);

  const [showResult, setShowResult] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<any[]>([]);

  const handleChange = (event: React.SyntheticEvent): void => {
    const value = (event.target as HTMLInputElement).value;
    const fuse = new Fuse(pokemonArr, fuseOptions);
    const result = fuse.search(value).slice(0, 11);
    setSearchResult(result);
  };

  const handleFocus = () => {
    setShowResult(true);
  };

  const ref: any = useRef<HTMLSpanElement>();
  useClickAway(() => {
    setShowResult(false);
  }, ref);

  const fallback = (placeholderBase64: string) => {
    return <img src={placeholderBase64} className="placeholderBase64 deBlur" alt="placeholderBase64" />;
  };

  return (
    <SearchStyled>
      <SearchInput
        type="search"
        name="searchInput"
        id="searchInput"
        placeholder="Pikachu, 25, 900g"
        onChange={handleChange}
        onFocus={handleFocus}
        autoComplete="off"
        aria-label="Search"
        ref={ref}
      />

      <Results>
        {showResult && (
          <SearchList data-qa="results">
            {searchResult.map((i, key) => (
              <StyledLink key={(i.item.id, key)} to={`/detailedPage/pokemon/${i.item.name}`}>
                <SearchItem>
                  <Name>NAME: {i.item.name}</Name>
                  <Id>ID: {i.item.id}</Id>
                  <Weight>WEIGHT: {i.item.weight}</Weight>
                  <ImageWrapper>
                    <ImageContainer url={i.item.image} fallback={fallback(i.item.placeholderBase64)} />
                  </ImageWrapper>
                </SearchItem>
              </StyledLink>
            ))}
          </SearchList>
        )}
      </Results>
    </SearchStyled>
  );
};

const SearchStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 30rem;
  max-width: 450px;
  position: absolute;
  top: 15px;
  left: calc(50% - 220px);

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    position: static;
    margin-right: 15px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding-left: 15px;
  position: relative;
  height: 40px;
  border-radius: 6px;
  font-size: 18px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100%;
    padding-left: 15px;
  }
`;

const Results = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 10;
  margin-top: 0;
  box-shadow: 0 1.2px 2.1px rgba(0, 0, 0, 0.07), 0 2.9px 5.1px rgba(0, 0, 0, 0.101), 0 5.4px 9.6px rgba(0, 0, 0, 0.125),
    0 9.6px 17.2px rgba(0, 0, 0, 0.149), 0 18px 32.2px rgba(0, 0, 0, 0.18), 0 43px 77px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: auto;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    position: absolute;
    top: 70px;
    left: 15px;
    right: 15px;
    width: calc(100% - 30px);
  }
`;

const StyledLink = styled(NavLink)`
  width: 100%;
  border-bottom: 1px grey solid;
  color: black;
`;

const SearchList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  background: white;
  padding: 0;
  width: 100%;
  margin-top: 5px;
`;

const SearchItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 3rem;
  text-decoration: none;
  font-size: 1.1rem;

  &:hover {
    transform: scale(1.02);
    background: rgb(238, 238, 238);
    cursor: pointer;
  }

  &:last-child {
    border-bottom: 1px transparent solid;
  }
`;

const Name = styled.div`
  width: 35%;
`;

const Id = styled.div`
  width: 13%;
  text-align: left;
`;

const Weight = styled.div`
  position: relative;
  right: 0;
  width: 22%;
  text-align: left;
`;

const ImageWrapper = styled.div`
  height: 100%;
  img {
    height: 100%;
  }
`;

export default Search;
