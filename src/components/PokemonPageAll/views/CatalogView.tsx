import React from 'react';
import { NavLink } from 'react-router-dom';

import 'react-tippy/dist/tippy.css';

import { PokesTypes } from 'types/index';

import styled from 'styled-components/macro';
import ImageContainer from 'components/ImageContainer/ImageContainer';

type Props = {
  pokemonArr: PokesTypes[];
};

const CatalogView: React.FC<Props> = ({ pokemonArr = [] }: Props) => {
  const fallback = (placeholderBase64: string) => {
    return (
      <>
        <img loading="lazy" src={placeholderBase64} className="placeholderBase64 deBlur" alt="placeholderBase64" />
      </>
    );
  };

  return (
    <Wrapper>
      {pokemonArr.map((index, key) => (
        <React.Fragment key={key}>
          <NavLink to={`/detailedPage/pokemon/${index?.name}`} key={key}>
            <ImageContainer url={index?.image} cn="deBlur" fallback={fallback(index?.placeholderBase64)} />
          </NavLink>
        </React.Fragment>
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
  margin-top: 50px;
  margin-bottom: 100px;
  width: 100%;
  max-width: 100vw;

  a {
    box-shadow: 0.5px 0 0 0 red, 0 0.5px 0 0 red, 0.5px 0.5px 0 0 red, 0.5px 0 0 0 red inset, 0 0.5px 0 0 red inset;
    overflow: hidden;
  }

  img {
    width: calc(100vw / 40);
    min-width: 65px;
    max-width: 65px;
    height: calc(100vh / 20);
    min-height: 65px;
    max-height: 65px;
  }

  div,
  img {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100px;
    object-fit: cover;
  }
`;

export default CatalogView;
