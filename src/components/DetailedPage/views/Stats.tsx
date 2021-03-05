import React from 'react';
import styled from 'styled-components';
import { Skeleton } from '@material-ui/lab';

interface Props {
  stats: StatsElements[];
  weight: number;
}

interface StatsElements {
  base_stat: number;
  stat: {
    name: string;
  };
}

const Stats: React.FC<Props> = ({ stats, weight }: Props) => {
  const fallbackSkeletons = () => {
    const fakeArr = Array.from(Array(7).keys());

    return (
      <>
        {fakeArr.map((el) => (
          <LI key={el}>
            <Skeleton animation="wave" width={135} height={30} />{' '}
          </LI>
        ))}
      </>
    );
  };

  const abilitiesRow = () => {
    return (
      <>
        {stats.map((el: StatsElements) => (
          <LI key={el.stat.name}>
            {el.stat.name}: {el.base_stat}
          </LI>
        ))}
        <LI>weight: {weight} kg</LI>
      </>
    );
  };

  const showSkeletons = stats.length === 0;

  return (
    <StatsStyled>
      <UL>
        <Title>Stats</Title>
        {showSkeletons ? fallbackSkeletons() : abilitiesRow()}
      </UL>
    </StatsStyled>
  );
};

const StatsStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 3rem;
  width: 200px;
  height: 380px;
`;

const Title = styled.div`
  align-self: center;
  justify-self: center;
  font-size: 2rem;
`;

const UL = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  border: 1px solid black;
  border-radius: 0.7rem;
  background-color: #53aeff;
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
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 6px;
  width: 100%;
  font-size: 18px;
  text-transform: uppercase;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 14px;
    padding-bottom: 5px;
  }
`;

export default Stats;
