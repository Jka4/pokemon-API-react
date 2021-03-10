import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { PokesTypes } from 'types/index';

import styled from 'styled-components';

import { ImageContainer } from 'components/ImageContainer/ImageContainer';

type Props = {
  pokemonArr: PokesTypes[];
};

const SmallGrid: React.FC = () => {
  const pokemonArr = useSelector((state: Props) => state.pokemonArr);

  const fallback = (placeholderBase64: string) => {
    return <img src={placeholderBase64} alt="placeholderBase64" />;
  };

  return (
    <Wrapper>
      {pokemonArr.map((index, key) => (
        <StyledLink to={`/detailedPage/pokemon/${index?.name}`} key={key}>
          <ImageContainer url={index.image} fallback={fallback(index.placeholderBase64)} />
        </StyledLink>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 100px;
  width: 100%;
  max-width: 100vw;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;

    &:hover {
      background: #ff000099;
      transform: scale(1.2);
    }
  }
`;

const StyledLink = styled(NavLink)`
  box-shadow: 0.5px 0 0 0 red, 0 0.5px 0 0 red, 0.5px 0.5px 0 0 red, 0.5px 0 0 0 red inset, 0 0.5px 0 0 red inset;
  overflow: hidden;
  width: 60px;
  height: 60px;
`;

export default SmallGrid;
