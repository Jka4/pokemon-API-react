import React from "react";
import POKEMONS from "../../pokemonDataArray";
import Fuse from "fuse.js";
import store from "../../store";
import { NavLink } from "react-router-dom";

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

class SearchInput extends React.Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  handleChange = event => {
    let value = event.target.value;
    store.dispatch({ type: "set_input_value", value });

    let fuse = new Fuse(POKEMONS, fuseOptions);
    let result = fuse.search(value).slice(0, 11);

    store.dispatch({ type: "set_searchResult", result });
  };

  showResult = () => {
    let show = true;
    store.dispatch({ type: "SHOW_RESULT", show });
  };

  render() {
    let SHOW_RESULT = store.getState().SHOW_RESULT;

    return (
      <div className='search'>
        <input
          type='text'
          name='searchInput'
          id='searchInput'
          placeholder='type name, id or weight'
          onChange={this.handleChange}
          onFocus={this.showResult}
          autoComplete='off'
        />

        {SHOW_RESULT && <SearchResults />}
      </div>
    );
  }
}

export default SearchInput;

let SearchResults = () => {
  let handleClick = event => {
    let clickedPokemonInSeacrh = event.target.closest("LI").dataset.id;
    let show = false;
    store.dispatch({ type: "SHOW_RESULT", show });

    const URL = `https://pokeapi.co/api/v2/pokemon/${clickedPokemonInSeacrh}`;
    fetch(URL)
      .then(res => res.json())
      .then(json => {
        let page = json;

        store.dispatch({ type: "set_detailsPage", page });
      });
  };

  let res = store.getState().searchResult;

  return (
    <div className='searchResults'>
      <ul className='searchList'>
        {res.map((i, key) => (
          <NavLink key={(i.item.id, key)}
            to={`/detailedPage/pokemon/${i.item.name}`} className='searchItem_outer' >
            <li
              data-id={i.item.id}
              className='searchItem'
              onClick={handleClick}>
              <span className='item_name'>NAME: {i.item.name}</span>
              <span className='item_id'>ID: {i.item.id}</span>
              <span className='item_weight'>WEIGHT: {i.item.weight}</span>
              <img src={i.item.image} alt='img' className='searchItem__image' />
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};
