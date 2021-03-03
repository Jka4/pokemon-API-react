import React from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {PokesTypes} from 'types/index';

import styled from 'styled-components';

type Props = {
  pokemonArr: PokesTypes[];
};

const SmallGrid: React.FC = () => {
  const pokemonArr = useSelector((state: Props) => state.pokemonArr);

  return (
    <Wrapper>
      {pokemonArr.map((index, key) => (
        <NavLink to={`/detailedPage/pokemon/${index?.name}`} key={key}>
          <img src={index.image} alt="img" loading="lazy" />
        </NavLink>
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
    width: 65px;
    height: 65px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export default SmallGrid;
