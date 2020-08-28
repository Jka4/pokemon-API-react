import React, { lazy, Suspense, useState } from "react";
import { Provider, connect } from "react-redux";
import Loader from "react-loader-spinner";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Fuse from "fuse.js";

import store from "@Store";
import { setDelailedPageData } from "@APIutils";

import "./styles/style.scss";

const ImageContainer = lazy(() => import("@ImageContainer"));

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
  keys: ["name", "weight", "id"],
};

const Search = (props) => {
  const [showResult, setShowResult] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const { pokemonDataArray } = props;

  const handleChange = (event) => {
    const value = event.target.value;

    let fuse = new Fuse(pokemonDataArray, fuseOptions);
    let result = fuse.search(value).slice(0, 11);
    setSearchResult(result);
  };

  const handleFocus = () => {
    setShowResult(true);
  };

  const handleBlur = () => {
    const debounce = () => {
      setShowResult(false);
    };
    setTimeout(debounce, 100);
  };

  let handleClick = (value) => {
    setDelailedPageData(value, true);
  };

  return (
    <div className="search">
      <input
        type="search"
        name="searchInput"
        id="searchInput"
        placeholder="Pickachu, 123, 900g"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoComplete="off"
        aria-label="Search"
      />

      <div className="searchResults">
        {showResult && (
          <ul className="searchList">
            {searchResult.map((i, key) => (
              <NavLink
                key={(i.item.id, key)}
                to={`/detailedPage/pokemon/${i.item.name}`}
                className="searchItem_outer"
              >
                <li
                  data-id={i.item.id}
                  className="searchItem"
                  onClick={() => handleClick(i.item.id)}
                >
                  <span className="item_name">NAME: {i.item.name}</span>
                  <span className="item_id">ID: {i.item.id}</span>
                  <span className="item_weight">WEIGHT: {i.item.weight}</span>
                  <Suspense
                    fallback={
                      <Loader
                        type="TailSpin"
                        height={30}
                        width={30}
                        color={"red"}
                      />
                    }
                  >
                    <ImageContainer
                      url={i.item.image}
                      cn={"searchItem__image"}
                    />
                  </Suspense>
                </li>
              </NavLink>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const ConnectedSearch = connect((store) => {
  return {
    pokemonDataArray: store.pokemonsArr,
  };
})(Search);

export default (props) => (
  <Provider store={store}>
    <ConnectedSearch {...props} />
  </Provider>
);

Search.propTypes = {
  pokemonDataArray: PropTypes.array,
};
