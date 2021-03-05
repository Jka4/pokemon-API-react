/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import styled from 'styled-components';

import AppsIcon from '@material-ui/icons/Apps';
import BlurOnOutlinedIcon from '@material-ui/icons/BlurOnOutlined';

type PropsType = {
  changePageType: () => void;
  typeIsBig: boolean;
};

const CatalogHeader: React.FC<PropsType> = ({ changePageType, typeIsBig }: PropsType) => {
  return (
    <ViewTypeInner>
      <InnerBlock onClick={() => changePageType()}>
        <Title>{typeIsBig ? 'Big grid' : 'Small grid'}</Title>
        <Separator>|</Separator>
        <Icon>{typeIsBig ? <BlurOnOutlinedIcon /> : <AppsIcon />}</Icon>
      </InnerBlock>
    </ViewTypeInner>
  );
};

const Title = styled.span`
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

const InnerBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 15px 5px 15px;
  min-width: 200px;
  color: black;
  text-decoration: none;

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

export { CatalogHeader };
