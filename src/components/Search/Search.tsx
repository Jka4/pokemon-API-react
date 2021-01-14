/* eslint-disable import/no-anonymous-default-export */
import React, { lazy, useState } from 'react';
import { Provider, connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Fuse from 'fuse.js';
import { useDebounce } from 'ahooks';

import store from 'Store/store';

import './styles/style.scss';

const ImageContainer = lazy(() => import('components/ImageContainer/ImageContainer'));

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

type SearchProps = {
  pokemonDataArray: Pokes[];
};

type Pokes = {
  id: number;
  name: string;
  weight: number;
  image: string;
  imageHQ: string;
  placeholderBase64: string;
  chain: {
    species_name: string;
  }[];
};

const Search: React.FC<SearchProps> = ({ pokemonDataArray }: SearchProps) => {
  const [showResult, setShowResult] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<any[]>([]);
  const debouncedSearchResult = useDebounce(searchResult, { wait: 300 });

  const handleChange = (event: any) => {
    const value: string = event.target.value;

    let fuse = new Fuse(pokemonDataArray, fuseOptions);
    let result = fuse.search(value).slice(0, 11);
    setSearchResult(result);
  };

  const handleFocus = () => {
    setShowResult(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowResult(false);
    }, 400);
  };

  const fallback = (placeholderBase64: string) => {
    return (
      <>
        <img src={placeholderBase64} className="placeholderBase64 deBlur" alt="placeholderBase64" />
      </>
    );
  };

  return (
    <div className="search">
      <input
        type="search"
        name="searchInput"
        id="searchInput"
        placeholder="Pikachu, 25, 900g"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoComplete="off"
        aria-label="Search"
      />

      <div className="searchResults">
        {showResult && (
          <ul className="searchList">
            {debouncedSearchResult.map((i, key) => (
              <NavLink key={(i.item.id, key)} to={`/detailedPage/pokemon/${i.item.name}`} className="searchItem_outer">
                <li data-id={i.item.id} className="searchItem">
                  <span className="item_name">NAME: {i.item.name}</span>
                  <span className="item_id">ID: {i.item.id}</span>
                  <span className="item_weight">WEIGHT: {i.item.weight}</span>
                  <ImageContainer
                    url={i.item.image}
                    cn={'searchItem__image'}
                    fallback={fallback(i.item.placeholderBase64)}
                  />
                </li>
              </NavLink>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const ConnectedSearch = connect((store: { pokemonsArr: Pokes[] }) => {
  return {
    pokemonDataArray: store.pokemonsArr,
  };
})(Search);

export default (props = {}) => (
  <Provider store={store}>
    <ConnectedSearch {...props} />
  </Provider>
);
