import React, { useMemo, useState } from 'react';

import { NavLink } from 'react-router-dom';
import find from 'lodash.find';

import styled from 'styled-components';

import { PokesTypes } from 'types/index';
import { ImageContainer } from '../../ImageContainer/ImageContainer';

type EvolutionFormsTypes = Readonly<{
  currentPokemon?: string;
  pokemonArr: PokesTypes[];
}>;

const EvolutionForms: React.FC<EvolutionFormsTypes> = ({ currentPokemon, pokemonArr }: EvolutionFormsTypes) => {
  let [chain, setChain] = useState<PokesTypes[]>([]);

  useMemo(() => {
    const pokemonObj: any = pokemonArr?.find((o) => o.name === currentPokemon);
    let arr: PokesTypes[] = [];

    pokemonObj.chain.forEach((index: PokesTypes) => {
      find(pokemonArr, (el: PokesTypes) => {
        if (el.name === index.species_name) {
          arr.push(el);
        }
      });
    });

    setChain(arr);
  }, [currentPokemon, pokemonArr]);

  return (
    <>
      <Title>All forms:</Title>

      <EvolutionFormsStyled>
        {chain.map((index: PokesTypes) => (
          <StyledLink to={`/detailedPage/${index.name}`} key={index.id} activeClassName="active">
            <EvoForm>
              <ImgWrapper>
                <ImageContainer url={index.image} fallback={<img src={index.placeholderBase64} alt="" />} />
              </ImgWrapper>

              <Name>{index.name}</Name>
            </EvoForm>
          </StyledLink>
        ))}
      </EvolutionFormsStyled>
    </>
  );
};

const Title = styled.div`
  margin-top: 20px;
  font-size: 2rem;
`;

const EvolutionFormsStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 60px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin-bottom: 20px;
  }
`;

const StyledLink = styled(NavLink)`
  &.${(props) => props.activeClassName} {
    div {
      background: #ff5f5f;
    }
  }
`;

const EvoForm = styled.div`
  background: #03a9f4;
  margin: 20px;
  padding: 20px 35px 20px 35px;
  font-size: 24px;
  border-radius: 10px;
  border: 1px solid black;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 130px;
    height: 140px;
    padding: 0;
    margin: 10px;
  }
`;

const ImgWrapper = styled.div`
  width: 95px;
  height: 95px;
  min-width: 90px;
  min-height: 90px;
  max-width: 100px;

  img {
    width: 100%;
    height: auto;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

const Name = styled.div`
  text-align: center;
  color: black;
`;
export default EvolutionForms;
