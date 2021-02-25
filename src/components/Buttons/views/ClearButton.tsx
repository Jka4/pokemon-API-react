/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '@material-ui/core';
import styled from 'styled-components/macro';

const ClearButton: React.FC = () => {
  const dispatch = useDispatch();

  const clearRandomPokemon = () => dispatch({ type: 'CLEAR_RANDOM_POKEMON' });

  return (
    <>
      <ButtonStyled onClick={clearRandomPokemon} variant="contained" color="secondary">
        CLEAR
      </ButtonStyled>
    </>
  );
};

const ButtonStyled = styled(Button)`
  margin: 5px;
  margin-left: 10px !important;
  font-size: 16px;
  margin-right: 10px;
`;

export default ClearButton;
