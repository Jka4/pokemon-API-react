/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import styled from 'styled-components';

import AppsIcon from '@material-ui/icons/Apps';
import BlurOnOutlinedIcon from '@material-ui/icons/BlurOnOutlined';
import { Button } from '@material-ui/core';

type PropsType = {
  changePageType: () => void;
  typeIsBig: boolean;
};

const CatalogHeader: React.FC<PropsType> = ({ changePageType, typeIsBig }: PropsType) => {
  return (
    <ViewTypeInner>
      <ButtonStyled
        onClick={() => changePageType()}
        variant="contained"
        color="secondary"
        endIcon={typeIsBig ? <BlurOnOutlinedIcon /> : <AppsIcon />}
      >
        <Title>{typeIsBig ? 'Big grid' : 'Small grid'}</Title>
      </ButtonStyled>
    </ViewTypeInner>
  );
};

const ButtonStyled = styled(Button)`
  background: red;
  width: 200px;
  height: 40px;

  &:hover {
    box-shadow: 5px 3px 11px 1px #000000;
  }

  &:active {
    box-shadow: 0 1px 0 #00823f;
  }
`;

const Title = styled.span`
  font-size: 24px;
  margin-right: 5px;
`;

const ViewTypeInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 90%;
`;

export { CatalogHeader };
