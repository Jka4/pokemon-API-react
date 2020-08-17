import React from 'react';
import { NavLink } from "react-router-dom";

import store from "@Store";

import Search from "@Search";
import Player from "@Player";

import './styles/style.scss';


const HeaderLine = (props) => {
  const isMainPage = props?.props?.location?.pathname === '/';
  console.log("HeaderLine -> isMainPage", isMainPage)

  const clearDetailPageData = () => {
    store.dispatch({ type: "CLEAR_DETAILS_PAGE" });
  }

  return (
    <div className='topLine'>
      {!isMainPage && <NavLink to='/' className='backToMainPage' onClick={clearDetailPageData} > Back </NavLink>}

      <Player />
      <Search />
    </div>
  );
}

export default HeaderLine;
