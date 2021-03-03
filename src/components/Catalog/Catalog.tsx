/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';

import { BigGrid } from './views/BigGrid';
import SmallGrid from './views/SmallGrid';

import styled from 'styled-components';

import AppsIcon from '@material-ui/icons/Apps';
import BlurOnOutlinedIcon from '@material-ui/icons/BlurOnOutlined';

const Catalog: React.FC = () => {
  const [typeIsBig, setTypeIsBig] = useState(true);

  return (
    <Wrapper>
      <ViewTypeInner>
        <InnerBlock onClick={() => setTypeIsBig(!typeIsBig)}>
          <Title>{typeIsBig ? 'Big grid' : 'Small grid'}</Title>
          <Separator>|</Separator>
          <Icon>{typeIsBig ? <BlurOnOutlinedIcon /> : <AppsIcon />}</Icon>
        </InnerBlock>
      </ViewTypeInner>

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

export const Title = styled.span`
  font-size: 24px;
  margin-right: 5px;
`;

const Separator = styled.span`
  margin-top: 2px;
  margin-right: 10px;
  font-size: 24px;
`;

const ViewTypeInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 90%;
`;

export const InnerBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 15px 5px 15px;
  min-width: 200px;
  color: black;
  text-decoration: none

  &:hover {
    box-shadow: 5px 3px 11px 1px #000000;
  }

  &:active {
    box-shadow: 0 1px 0 #00823f;
  }
`;

const Icon = styled.div`
  margin-top: 4px;
  cursor: pointer;
  width: 20px;
`;

export default Catalog;
