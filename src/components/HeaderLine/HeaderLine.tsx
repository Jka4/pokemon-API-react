import React from 'react';
import { NavLink } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

import Search from 'components/Search/Search';
import Player from 'components/Player/Player';

import AppBar from '@material-ui/core/AppBar';
import { Button } from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';

import './styles/style.scss';

const HeaderLine: React.FC = () => {
  const isMainPage = useLocation().pathname === '/';

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
            <NavLink to="/">
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
