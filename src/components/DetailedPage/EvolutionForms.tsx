import React, { useMemo, useState } from 'react';

import { NavLink } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import find from 'lodash.find';

import { Pokes } from 'types/index';

interface EvolutionFormsTypes {
  currentPokemon?: string;
  pokemonArr: Pokes[];
}

const EvolutionForms: React.FC<EvolutionFormsTypes> = ({ currentPokemon, pokemonArr }: EvolutionFormsTypes) => {
  let [chain, setChain] = useState<Pokes[]>([]);

  useMemo(() => {
    const pokemonObj: Pokes | undefined = find(pokemonArr, (o) => o.name === currentPokemon);
    let arr: Pokes[] = [];

    pokemonObj?.chain.forEach((index: Pokes) => {
      find(pokemonArr, (el: any) => {
        if (el.name === index.species_name) {
          arr.push(el);
        }
      })
    });

    setChain(arr);
  }, [currentPokemon, pokemonArr]);


  const FormTitle = () => {
    return <div className="formsTitle">{chain.length >= 2 ? <span>All forms:</span> : <span>Form:</span>}</div>;
  };

  return (
    <>
      <FormTitle />

      <div className="evolutionForms">
        {chain.map((index: Pokes) => (
          <NavLink to={`/detailedPage/pokemon/${index.name}`} key={index.id}>
            <Paper
              elevation={3}
              className={currentPokemon === index.name ? 'evoForm currentPokemon' : 'evoForm'}
            >
              <img src={index.image} className="evoFormImg deBlur" alt="evoFormImg" loading="lazy" />
              <div className="pokemonName">{index.name}</div>
            </Paper>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default EvolutionForms;
