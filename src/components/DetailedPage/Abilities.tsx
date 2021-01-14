import React from "react";
import Paper from "@material-ui/core/Paper";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

type Props = {
  abilities: AbilityElements[];
};

type AbilityElements = {
  ability: {
    url: string;
    name: string;
  };
}

const Abilities: React.FC<Props> = ({ abilities = [] }: Props) => {

  const fallbackSkeletons = () => {
    return (
      <SkeletonTheme color="#53aeff" highlightColor="#0066be">
        {[1, 2, 3, 4, 5, 6].map(el => (
          <p key={el} >
            <Skeleton height={15} width={100} />
          </p>
        ))}
      </SkeletonTheme>
    );
  };

  return (
    <div className="abilities">
      <Paper elevation={3} className="abilitiesUL">
        <div className="skills_title">Abilities</div>
        {abilities.length !== 0 ? (abilities.map((element: AbilityElements) => (
          <li className="abilitiesLI" key={element.ability.name}>
            - {element.ability.name}
          </li>
        ))) : (
            fallbackSkeletons()
          )}
      </Paper>
    </div>
  );
};

export default Abilities;
