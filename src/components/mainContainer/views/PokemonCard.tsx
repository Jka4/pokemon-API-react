import React from 'react';
import { NavLink } from 'react-router-dom';
import { pokemonCardType } from 'types/index';
import styled from 'styled-components';

import ImageContainer from 'components/ImageContainer/ImageContainer';

const PokemonCard: React.FC<pokemonCardType> = ({ pokeCard }: pokemonCardType) => {
  const { name, order, base_experience, placeholderBase64, image } = pokeCard;

  return (
    <PokeCardWrapper>
      <NavLink to={`/detailedPage/pokemon/${name}`}>
        <PokeCard>
          <Image>
            <ImageContainer
              url={image}
              cn={'deBlur'}
              fallback={<img src={placeholderBase64} className="placeholderBase64 " alt="" />}
            />
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
  grid-row-gap: 0px;
  padding-left: 0;
`;

const Image = styled.div`
  height: 20%;
  margin-left: auto;
  margin-right: auto;
  max-width: 100px;
`;

const Span = styled.span`
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
`;

export default PokemonCard;
