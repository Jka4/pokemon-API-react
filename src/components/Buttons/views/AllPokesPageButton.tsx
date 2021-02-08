/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from '@material-ui/core';

const AllPokesPageButton: React.FC = () => {
  return (
    <>
      <NavLink to={`/allPokemon/`}>
        <Button variant="contained" color="secondary">
          SHOW ALL POKEMON
        </Button>
      </NavLink>
    </>
  );
};

export default AllPokesPageButton;
