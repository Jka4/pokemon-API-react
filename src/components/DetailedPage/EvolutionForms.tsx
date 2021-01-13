import React, { lazy, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import find from 'lodash.find';
import Paper from '@material-ui/core/Paper';
import POKEMON from 'utils/pokemonDataArray';

import { setDelailedPageData } from 'utils/API';

const ImageContainer = lazy(() => import('components/ImageContainer/ImageContainer'));

type Props = {
  currentPokemon: any;
};

interface ChainElements {
  image: string;
  species_name: any;
  placeholderBase64: string;
  id: number | string;
  [key: string]: any;
}


const EvolutionForms: React.FC<Props> = ({ currentPokemon }: Props) => {
  let [chain, setChain] = useState<any[]>([]);

  useEffect(() => {
    if (currentPokemon) {
      const pokemonObj: any = find(POKEMON, (o) => o.name === currentPokemon);
      let arr: any[] = [];

      pokemonObj?.chain.forEach((index: ChainElements) => {
        const pokemonName = index.species_name
        index.image = find(POKEMON, (o) => o.name === pokemonName)?.image || '';
        index.id = find(POKEMON, (o) => o.name === pokemonName)?.id || '';
        index.placeholderBase64 = find(POKEMON, (o) => o.name === pokemonName)?.placeholderBase64 || '';
        arr.push(index);
      });

      setChain(arr)
    }
  }, [currentPokemon]);

  const FormTitle = () => {
    return <div className="formsTitle">{chain.length >= 2 ? <span>All forms:</span> : <span>Form:</span>}</div>;
  };


  const fallback = (placeholderBase64: string) => {
    return (
      <>
        <img src={placeholderBase64} className="evoFormImg placeholderBase64" alt="placeholderBase64" />
      </>
    );
  };

  return (
    <>
      <FormTitle />

      <div className="evolutionForms">
        {chain.map((index: ChainElements) => (
          <NavLink
            to={`/detailedPage/pokemon/${index.species_name}`}
            data-pokemon_id={index.id}
            key={index.id}
          >
            <Paper
              elevation={3}
              className={currentPokemon === index.species_name ? 'evoForm currentPokemon' : 'evoForm'}
            >
              <ImageContainer
                url={index.image}
                cn={'evoFormImg'}
                fallback={fallback(index?.placeholderBase64)}
              />

              <div className="pokemonName">{index.species_name}</div>
            </Paper>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default EvolutionForms;
