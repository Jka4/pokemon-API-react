import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import styled from 'styled-components/macro';

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
    return (
      <SkeletonTheme color="#53aeff" highlightColor="#0066be">
        {[1, 2, 3, 4, 5, 6].map((el) => (
          <p key={el}>
            <SkeletonStyled height={15} width={145} />
          </p>
        ))}
      </SkeletonTheme>
    );
  };

  const showStats = stats !== undefined && stats?.length !== 0;

  return (
    <StatsStyled>
      <UL>
        <Title>Stats</Title>
        {showStats
          ? stats.map((el: StatsElements) => (
              <LI key={el.stat.name}>
                {el.stat.name}: {el.base_stat}
              </LI>
            ))
          : fallbackSkeletons()}

        {showStats && <LI>weight: {weight} kg</LI>}
      </UL>
    </StatsStyled>
  );
};

const SkeletonStyled = styled(Skeleton)`
  margin-bottom: 10px;
`;

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
`;

const LI = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 10px;
  width: 100%;
  font-size: 18px;
  text-transform: uppercase;
`;

export default Stats;
