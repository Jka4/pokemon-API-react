import React, { lazy, Suspense } from "react";
import { Provider, connect } from 'react-redux';
import Loader from 'react-loader-spinner'
import { NavLink } from "react-router-dom";
import store from "@Store";

import Fuse from "fuse.js";
import { setDelailedPageData } from '@APIutils';

import './styles/style.scss';

const ImageContainer = lazy(() => import('@ImageContainer'));

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
  keys: ["name", "weight", "id"]
};

const SearchInput = (props) => {
  const { pokemonDataArray, showResult, searchResult } = props;

  const handleChange = event => {
    let value = event.currentTarget.value;
    store.dispatch({ type: "set_input_value", value });

    let fuse = new Fuse(pokemonDataArray, fuseOptions);
    let result = fuse.search(value).slice(0, 11);

    store.dispatch({ type: "set_searchResult", result });
  };

  const handleFocus = () => {
    let show = true;
    store.dispatch({ type: "SHOW_RESULT", show });
  };


  return (
    <div className='search'>
      <input
        type='search'
        name='searchInput'
        id='searchInput'
        placeholder='Pickachu, 123, 900g'
        onChange={handleChange}
        onFocus={handleFocus}
        autoComplete='off'
        aria-label="Search"
      />
      {showResult && <SearchResults searchResult={searchResult} />}
    </div>
  );
}


let SearchResults = (props) => {
  const { searchResult } = props;

  let handleClick = event => {
    let show = false;

    setDelailedPageData(event, true);
    store.dispatch({ type: "SHOW_RESULT", show });
  };

  return (
    <div className='searchResults'>
      <ul className='searchList'>
        {searchResult.map((i, key) => (
          <NavLink key={(i.item.id, key)}
            to={`/detailedPage/pokemon/${i.item.name}`} className='searchItem_outer' >
            <li
              data-id={i.item.id}
              className='searchItem'
              onClick={handleClick}>
              <span className='item_name'>NAME: {i.item.name}</span>
              <span className='item_id'>ID: {i.item.id}</span>
              <span className='item_weight'>WEIGHT: {i.item.weight}</span>
              <Suspense fallback={<Loader type="TailSpin" height={30}
                width={30} color={"red"}
              />}>
                <ImageContainer url={i.item.image} cn={'searchItem__image'} />
              </Suspense>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

const ConnectedSearchInput = connect(store => {
  return {
    showResult: store.showResult,
    searchResult: store.searchResult,
    pokemonDataArray: store.pokemonsArr,
  };
})(SearchInput);

export default props => (
  <Provider store={store}>
    <ConnectedSearchInput {...props} />
  </Provider>
);
