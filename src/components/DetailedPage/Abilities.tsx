import React from "react";
import Paper from "@material-ui/core/Paper";

type Props = {
  abilities?: any[];
};

interface AbilityElements {
  element: {
    url: string;
    name: string;
  };
  [index: string]: any;
}

const Abilities: React.FC<Props> = ({ abilities = [] }: Props) => {
  return (
    <div className="abilities">
      <Paper elevation={3} className="abilitiesUL">
        <div className="skills_title">Abilities</div>
        {abilities.map((element: AbilityElements) => (
          <li className="abilitiesLI" key={element?.ability?.name}>
            {element?.ability?.name}
          </li>
        ))}
      </Paper>
    </div>
  );
};

export default Abilities;
