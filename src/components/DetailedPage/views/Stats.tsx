import React from 'react';
import Paper from '@material-ui/core/Paper';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

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
            <Skeleton height={15} width={115} />
          </p>
        ))}
      </SkeletonTheme>
    );
  };

  const showStats = stats !== undefined && stats?.length !== 0;

  return (
    <div className="stats">
      <Paper elevation={3} className="statsUL">
        <div className="skills_title">Stats</div>
        {showStats
          ? stats.map((el: StatsElements) => (
              <li className="statsLI" key={el.stat.name}>
                {el.stat.name}: {el.base_stat}
              </li>
            ))
          : fallbackSkeletons()}

        {showStats && <li className="statsLI">weight: {weight} kg</li>}
      </Paper>
    </div>
  );
};

export default Stats;
