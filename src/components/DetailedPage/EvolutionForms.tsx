import React, { useMemo, useState } from 'react';

import { NavLink } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import find from 'lodash.find';

import { Pokes, ChainElements } from 'commonTypes';

interface EvolutionFormsTypes {
  currentPokemon?: string;
  pokemonArr: Pokes[];
}

const EvolutionForms: React.FC<EvolutionFormsTypes> = ({ currentPokemon, pokemonArr }: EvolutionFormsTypes) => {
  let [chain, setChain] = useState<ChainElements[]>([]);

  useMemo(() => {
    const pokemonObj: Pokes | undefined = find(pokemonArr, (o) => o.name === currentPokemon);
    let arr: ChainElements[] = [];

    pokemonObj?.chain.forEach((index: ChainElements) => {
      const pokemonName = index.species_name;
      index.image = find(pokemonArr, (o) => o.name === pokemonName)?.image || '';
      index.id = find(pokemonArr, (o) => o.name === pokemonName)?.id || '';
      index.placeholderBase64 = find(pokemonArr, (o) => o.name === pokemonName)?.placeholderBase64 || '';
      arr.push(index);
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
        {chain.map((index: ChainElements) => (
          <NavLink to={`/detailedPage/pokemon/${index.species_name}`} data-pokemon_id={index.id} key={index.id}>
            <Paper
              elevation={3}
              className={currentPokemon === index.species_name ? 'evoForm currentPokemon' : 'evoForm'}
            >
              <img src={index.image} className="evoFormImg deBlur" alt="evoFormImg" loading="lazy" />
              <div className="pokemonName">{index.species_name}</div>
            </Paper>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default EvolutionForms;
