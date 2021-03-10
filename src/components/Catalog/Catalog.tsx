/* eslint-disable import/no-anonymous-default-export */
import React, { useState, lazy } from 'react';

import styled from 'styled-components';

import { CatalogHeader } from './views/CatalogHeader';
import { Route, Switch } from 'react-router-dom';

const BigGrid = lazy(() => import('components/Catalog/views/BigGrid'));
const SmallGrid = lazy(() => import('components/Catalog/views/SmallGrid'));

const Catalog: React.FC = () => {
  const [typeIsBig, setTypeIsBig] = useState(true);

  const changePageType = () => setTypeIsBig(!typeIsBig);

  return (
    <Wrapper>
      <CatalogHeader typeIsBig={typeIsBig} changePageType={changePageType} />

      <Content>
        <Switch>
          <Route path="/catalog/big/" component={BigGrid} />
          <Route path="/catalog/small/" component={SmallGrid} />
        </Switch>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  width: 100%;
  user-select: none;
`;

const Content = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;
  max-width: 900px;
  margin: 50px auto 100px;
`;

export default React.memo(Catalog);
