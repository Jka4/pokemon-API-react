import React from "react";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";

const Abilities = (props) => {
  const { abilities } = props;

  return (
    <div className="abilities">
      <Paper elevation={3} className="abilitiesUL">
        <div className="skills_title">Abilities</div>

        {abilities &&
          abilities.map((i, key) => (
            <li className="abilitiesLI" key={key}>
              {key + 1}: {i.ability.name}
            </li>
          ))}
      </Paper>
    </div>
  );
};

export default Abilities;

Abilities.propTypes = {
  abilities: PropTypes.array,
};