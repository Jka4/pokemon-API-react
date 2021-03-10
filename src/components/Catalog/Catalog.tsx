/* eslint-disable import/no-anonymous-default-export */
import React, { useState, lazy, Suspense } from 'react';

import styled from 'styled-components';
import Skeleton from '@material-ui/lab/Skeleton';

import { CatalogHeader } from './views/CatalogHeader';

const BigGrid = lazy(() => import('components/Catalog/views/BigGrid'));
const SmallGrid = lazy(() => import('components/Catalog/views/SmallGrid'));

const Catalog: React.FC = () => {
  const [typeIsBig, setTypeIsBig] = useState(true);

  const changePageType = () => setTypeIsBig(!typeIsBig);

  return (
    <Wrapper>
      <CatalogHeader typeIsBig={typeIsBig} changePageType={changePageType} />

      <Content>
        <Suspense fallback={<Fallback />}>{typeIsBig ? <BigGrid /> : <SmallGrid />}</Suspense>
      </Content>
    </Wrapper>
  );
};
const Fallback = () => {
  return (
    <>
      <Skeleton variant="rect">{<BigGrid />}</Skeleton>
    </>
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
