/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { pageRoutes } from 'routes';

const CatalogButton: React.FC = () => {
  return (
    <NavLink to={pageRoutes.catalog}>
      <ButtonStyled variant="contained" color="secondary">
        SHOW ALL POKEMON
      </ButtonStyled>
    </NavLink>
  );
};

const ButtonStyled = styled(Button)`
  margin: 5px 5px 5px 10px;
  font-size: 16px;
`;

export default CatalogButton;
