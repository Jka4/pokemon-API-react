import React from 'react';
import { NavLink } from "react-router-dom";

import store from "@Store";

import Search from "@Search";
import Player from "@Player";

import './styles/style.scss';


const HeaderLine = (props) => {
  console.log("HeaderLine -> props", props)

  const clearDetailPageData = () => {
    store.dispatch({ type: "CLEAR_DETAILS_PAGE" });
  }

  return (
    <div className='topLine'>
      <NavLink to='/' className='backToMainPage' onClick={clearDetailPageData} > Back </NavLink>

      <Player />
      <Search />
    </div>
  );
}

export default HeaderLine;
