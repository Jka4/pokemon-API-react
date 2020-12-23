import React from "react";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";

const Stats = ({ stats = [], weight = 0 }) => {
  return (
    <div className="stats">
      <Paper elevation={3} className="statsUL">
        <div className="skills_title">Stats</div>
        {stats.map((i, key) => (
          <li className="statsLI" key={key}>
            {i.stat.name} {i.base_stat}
          </li>
        ))}
        <li className="statsLI">weight {weight}kg</li>
      </Paper>
    </div>
  );
};

Stats.propTypes = {
  stats: PropTypes.array,
  weight: PropTypes.number,
};

export default Stats;
