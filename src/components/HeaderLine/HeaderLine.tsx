import React from "react";
import { NavLink } from "react-router-dom";

import store from "../../Store/store";

import Search from "../Search/Search";
import Player from "../Player/Player";

import AppBar from "@material-ui/core/AppBar";
import { Button } from "@material-ui/core";
import SvgIcon from "@material-ui/core/SvgIcon";

import "./styles/style.scss";

interface HeaderLineProps {
  pathname?: string;
  isMainPage?: any;
}

const HeaderLine: React.FC<HeaderLineProps> = ({
  pathname,
}: HeaderLineProps) => {
  const isMainPage = pathname === "/";

  function HomeIcon({ props }: any) {
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
      </AppBar>
    </>
  );
};

export default HeaderLine;
