import React from "react";
import Paper from "@material-ui/core/Paper";

// interface statsTypes {
//   base_stat?: number,
//   effort?: number,
//   stat: {
//     name?: string,
//     url?: string,
//   }
// }

const Stats = ({ stats, weight }) => {
  return (
    <div className="stats">
      <Paper elevation={3} className="statsUL">
        <div className="skills_title">Stats</div>
        {stats.map((element, key) => (
          <li className="statsLI" key={key}>
            {element.stat.name} {element.base_stat}
          </li>
        ))}
        <li className="statsLI">weight {weight}kg</li>
      </Paper>
    </div>
  );
};

export default Stats;
