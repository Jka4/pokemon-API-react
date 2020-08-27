import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import store from "@Store";

import Search from "@Search";
import Player from "@Player";

import AppBar from "@material-ui/core/AppBar";
import { Button } from "@material-ui/core";
import SvgIcon from "@material-ui/core/SvgIcon";

import "./styles/style.scss";

const HeaderLine = (props) => {
  const isMainPage = props?.props?.location?.pathname === "/";

  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

  return (
    <>
      <AppBar position="static" className="topLine">
        <div className="buttonsRow">
          <Player />

          {!isMainPage && (
            <NavLink
              to="/"
              onClick={() => store.dispatch({ type: "CLEAR_DETAILS_PAGE" })}
            >
              <Button variant="contained" className="toHome" color="secondary">
                <HomeIcon />
              </Button>
            </NavLink>
          )}
        </div>
        <Search />
        <span></span>
      </AppBar>
    </>
  );
};

export default HeaderLine;

HeaderLine.propTypes = {
  isMainPage: PropTypes.string,
};