import React from "react";

const Stats = (props) => {
  const { stats, weight } = props;

  return (
    <div className="stats">
      <ul className="statsUL">
        <div className="skills_title">Stats</div>

        {stats &&
          stats.map((i, key) => (
            <li className="statsLI" key={key}>
              {i.stat.name} {i.base_stat}
            </li>
          ))}
        <li className="statsLI">weight {weight}kg</li>
      </ul>
    </div>
  );
};

export default Stats;
