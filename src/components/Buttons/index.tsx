/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import GetButton from './views/GetButton';
import ClearButton from './views/ClearButton';
import CatalogButton from './views/CatalogButton';
import styled from 'styled-components';

const Buttons: React.FC = () => {
  return (
    <ButtonsStyled>
      <CatalogButton />
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
