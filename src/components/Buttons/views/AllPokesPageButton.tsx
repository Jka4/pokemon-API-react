/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from '@material-ui/core';
import styled from 'styled-components/macro';

const AllPokesPageButton: React.FC = () => {
  return (
    <>
      <NavLink to={`/allPokemon/`}>
        <ButtonStyled variant="contained" color="secondary">
          SHOW ALL POKEMON
        </ButtonStyled>
      </NavLink>
    </>
  );
};

const ButtonStyled = styled(Button)`
  margin: 5px;
  margin-left: 10px;
  font-size: 16px;
`;

export default AllPokesPageButton;
