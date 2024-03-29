/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import styled from 'styled-components';

import AppsIcon from '@material-ui/icons/Apps';
import BlurOnOutlinedIcon from '@material-ui/icons/BlurOnOutlined';
import { Button } from '@material-ui/core';

import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const CatalogHeader: React.FC = () => {
  const location = useLocation().pathname.split('/').pop();
  const typeIsBig = location === 'small';

  const url = `/catalog/${typeIsBig ? 'big' : 'small'}`;
  const icon = typeIsBig ? <BlurOnOutlinedIcon /> : <AppsIcon />;
  const title = !typeIsBig ? 'Big grid' : 'Small grid';

  return (
    <ViewTypeInner>
      <NavLink to={url}>
        <ButtonStyled variant="contained" color="secondary" endIcon={icon}>
          <Title>{title}</Title>
        </ButtonStyled>
      </NavLink>
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
