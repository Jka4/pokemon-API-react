import React from "react";
import Paper from "@material-ui/core/Paper";

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
  return (
    <div className="stats">
      <Paper elevation={3} className="statsUL">
        <div className="skills_title">Stats</div>
        {stats &&
          stats.map((el: StatsElements) => (
            <li className="statsLI" key={el.stat.name}>
              {el.stat.name} {el.base_stat}
            </li>
          ))}
        <li className="statsLI">weight {weight}kg</li>
      </Paper>
    </div>
  );
};

export default Stats;
