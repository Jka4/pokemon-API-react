import React from "react";
import Paper from "@material-ui/core/Paper";

const Stats = (props) => {
  const { stats, weight } = props;

  return (
    <div className="stats">
      <Paper elevation={3} className="statsUL">
        <div className="skills_title">Stats</div>
        {stats &&
          stats.map((i, key) => (
            <li className="statsLI" key={key}>
              {i.stat.name} {i.base_stat}
            </li>
          ))}
        <li className="statsLI">weight {weight}kg</li>
      </Paper>
    </div>
  );
};

export default Stats;
