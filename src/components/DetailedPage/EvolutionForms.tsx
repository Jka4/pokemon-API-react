import React, { useState, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import find from 'lodash.find';
import Paper from '@material-ui/core/Paper';

type EvolutionFormsTypes = {
  currentPokemon: any;
  pokemonsArr: any[];
};

type ChainElements = {
  image: string;
  species_name: any;
  placeholderBase64: string;
  id: number | string;
  [key: string]: any;
};

const EvolutionForms: React.FC<EvolutionFormsTypes> = ({ currentPokemon, pokemonsArr }: EvolutionFormsTypes) => {
  let [chain, setChain] = useState<any[]>([]);

  useMemo(() => {
    const pokemonObj: any = find(pokemonsArr, (o) => o.name === currentPokemon);
    let arr: any[] = [];

    pokemonObj?.chain.forEach((index: ChainElements) => {
      const pokemonName = index.species_name;
      index.image = find(pokemonsArr, (o) => o.name === pokemonName)?.image || '';
      index.id = find(pokemonsArr, (o) => o.name === pokemonName)?.id || '';
      index.placeholderBase64 = find(pokemonsArr, (o) => o.name === pokemonName)?.placeholderBase64 || '';
      arr.push(index);
    });

    setChain(arr);
  }, [currentPokemon, pokemonsArr]);

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
