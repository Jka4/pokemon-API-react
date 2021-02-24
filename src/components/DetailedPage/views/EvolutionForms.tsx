import React, { useMemo, useState } from 'react';

import { NavLink } from 'react-router-dom';
import find from 'lodash.find';

import { PokesTypes } from 'types/index';
import styled from 'styled-components/macro';

interface EvolutionFormsTypes {
  currentPokemon?: string;
  pokemonArr: PokesTypes[];
}

const EvolutionForms: React.FC<EvolutionFormsTypes> = ({ currentPokemon, pokemonArr }: EvolutionFormsTypes) => {
  let [chain, setChain] = useState<PokesTypes[]>([]);

  useMemo(() => {
    const pokemonObj: PokesTypes | undefined = find(pokemonArr, (o) => o.name === currentPokemon);
    let arr: PokesTypes[] = [];

    pokemonObj?.chain.forEach((index: PokesTypes) => {
      find(pokemonArr, (el: PokesTypes) => {
        if (el.name === index.species_name) {
          arr.push(el);
        }
      });
    });

    setChain(arr);
  }, [currentPokemon, pokemonArr]);

  const FormTitle = () => {
    return <Title>{chain.length >= 2 ? <span>All forms:</span> : <span>Form:</span>}</Title>;
  };

  return (
    <>
      <FormTitle />

      <EvolutionFormsStyled>
        {chain.map((index: PokesTypes) => (
          <StyledLink to={`/detailedPage/pokemon/${index.name}`} key={index.id} activeClassName="active">
            <EvoForm>
              <Img src={index.image} alt="evoFormImg" />
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
  margin-bottom: 60px;
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
  max-width: 90px;

  &::first-letter {
    text-transform: uppercase;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  min-width: 90px;
  min-height: 90px;
  max-width: 100px;
`;

const Name = styled.div`
  text-align: center;
  color: black;
`;
export default EvolutionForms;
