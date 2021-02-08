/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '@material-ui/core';

const ClearButton: React.FC = () => {
  const dispatch = useDispatch();

  const clearRandomPokemon = () => dispatch({ type: 'CLEAR_RANDOM_POKEMON' });

  return (
    <>
      <Button onClick={clearRandomPokemon} className="clearBtn" variant="contained" color="secondary">
        CLEAR
      </Button>
    </>
  );
};

export default ClearButton;
