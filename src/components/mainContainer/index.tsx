import React from 'react';

import Buttons from 'components/Buttons';
import Logo from 'components/MainContainer/views/Logo';
import ItemsList from 'components/MainContainer/views/ItemsList';

import styled from 'styled-components/macro';

const MainContainer: React.FC = () => {
  return (
    <Main>
      <Logo />
      <Buttons />
      <ItemsList />
    </Main>
  );
};

const Main = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
  height: auto;
  padding: 20px;
  padding-bottom: 50px;
`;

export default MainContainer;
