/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';

import { BigGrid } from './views/BigGrid';
import { SmallGrid } from './views/SmallGrid';

import styled from 'styled-components';

import { CatalogHeader } from './views/CatalogHeader';

const Catalog: React.FC = () => {
  const [typeIsBig, setTypeIsBig] = useState(true);

  const changePageType = () => setTypeIsBig(!typeIsBig);

  return (
    <Wrapper>
      <CatalogHeader typeIsBig={typeIsBig} changePageType={changePageType} />

      {typeIsBig ? <BigGrid /> : <SmallGrid />}
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

export default React.memo(Catalog);
