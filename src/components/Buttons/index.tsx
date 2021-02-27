/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import GetButton from './views/GetButton';
import ClearButton from './views/ClearButton';
import AllPokesPageButton from './views/AllPokesPageButton';
import styled from 'styled-components';

const Buttons: React.FC = () => {
  return (
    <ButtonsStyled>
      <AllPokesPageButton />
      <ClearButton />
      <GetButton />
    </ButtonsStyled>
  );
};

const ButtonsStyled = styled.div`
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    button {
      margin: 10px;
    }

    .MuiBadge-badge {
      top: 10px;
      right: 5px;
    }
  }
`;

export default Buttons;
