import React from 'react';
import { NavLink } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

import Search from 'components/Search/Search';
import Player from 'components/Player/Player';

import AppBar from '@material-ui/core/AppBar';
import { Button } from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';

import styled from 'styled-components';
import { pageRoutes } from 'routes';

const HeaderLine: React.FC = () => {
  const isMainPage = useLocation().pathname === pageRoutes.home;

  return (
    <>
      <AppBarStyled position="static">
        <BtnRow>
          <Player />

          {!isMainPage && (
            <NavLink to="/">
              <Button variant="contained" color="secondary">
                <SvgIcon>
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </SvgIcon>
              </Button>
            </NavLink>
          )}
        </BtnRow>
        <Search />
      </AppBarStyled>
    </>
  );
};

const AppBarStyled = styled(AppBar)`
  display: flex;
  flex-direction: row !important;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 70px;
  padding-left: 20px;

  position: fixed !important;
  top: 0;
`;

const BtnRow = styled.div`
  display: flex;

  button {
    margin-right: 10px;
    font-size: 16px;
  }
`;

export default HeaderLine;
