import React from 'react';
import { NavLink } from 'react-router-dom';
import { pokemonCardType } from 'types/index';
import styled from 'styled-components';

import { ImageContainer } from 'components/ImageContainer/ImageContainer';

const PokemonCard: React.FC<pokemonCardType> = ({ pokeCard }: pokemonCardType) => {
  const { name, order, base_experience, placeholderBase64, image } = pokeCard;

  return (
    <PokeCardWrapper>
      <NavLink to={`/detailedPage/pokemon/${name}`}>
        <PokeCard>
          <Image>
            <ImageContainer url={image} fallback={<img src={placeholderBase64} alt="" />} />
          </Image>

          <Span>{name}</Span>
          <Span>{order}</Span>
          <Span>{base_experience}</Span>
        </PokeCard>
      </NavLink>
    </PokeCardWrapper>
  );
};

const PokeCardWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 100px;
  text-decoration: none;
  color: black;
  overflow: initial !important;
`;

const PokeCard = styled(PokeCardWrapper)`
  border: 2px solid black;
  border-radius: 5px;
  background-color: rgba(250, 235, 215, 0.74);
  cursor: pointer;
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  font-size: 22px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 0;
  padding-left: 0;

  &:hover {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);

    img {
      transform: scale(1.2);
    }
  }
`;

const Image = styled.div`
  height: 100%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 100px;

  img {
    height: 100%;
    width: auto;
  }
`;

const Span = styled.span`
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
`;

export default PokemonCard;
