import React from 'react';
import styled from 'styled-components';

interface Props {
  abilities: AbilityElements[];
}

interface AbilityElements {
  ability: {
    url: string;
    name: string;
  };
}

const Abilities: React.FC<Props> = ({ abilities }: Props) => {
  return (
    <AbilitiesStyled>
      <UL>
        <Title>Abilities</Title>
        {abilities.map((element: AbilityElements) => (
          <LI key={element.ability.name}>- {element.ability.name}</LI>
        ))}
      </UL>
    </AbilitiesStyled>
  );
};

const AbilitiesStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: -1rem;
  width: 200px;
  height: 380px;
`;

const Title = styled.div`
  align-self: center;
  justify-self: center;
  font-size: 2rem;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 1.5rem;
  }
`;

const UL = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  border: 1px solid black;
  border-radius: 0.7rem;
  background-color: #53aeff !important;
  padding: 25px;
  width: 100%;
  height: 100%;
  margin-top: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    padding: 10px;
  }
`;

const LI = styled.li`
  display: flex;
  border-radius: 0.7rem;
  background-color: #53aeff !important;
  padding: 10px;
  width: 100%;
  font-size: 18px;
  text-transform: uppercase;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 14px;
  }
`;

export default Abilities;
