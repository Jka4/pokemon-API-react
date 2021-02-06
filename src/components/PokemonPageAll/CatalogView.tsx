import React, { lazy } from 'react';
import { NavLink } from 'react-router-dom';

import 'react-tippy/dist/tippy.css';
import './styles/style.scss';

import { PokesTypes } from 'types/index';

const ImageContainer = lazy(() => import('components/ImageContainer/ImageContainer'));

type Props = {
  pokemonArr: PokesTypes[];
};

const CatalogView: React.FC<Props> = ({ pokemonArr = [] }: Props) => {
  const fallback = (placeholderBase64: string) => {
    return (
      <>
        <img loading="lazy" src={placeholderBase64} className="placeholderBase64 deBlur" alt="placeholderBase64" />
      </>
    );
  };

  return (
    <div className="wrapper">
      {pokemonArr.map((index, key) => (
        <React.Fragment key={key}>
          <NavLink to={`/detailedPage/pokemon/${index?.name}`} key={key}>
            <ImageContainer
              url={index?.image}
              cn="pokemonImageCard deBlur"
              fallback={fallback(index?.placeholderBase64)}
            />
          </NavLink>
        </React.Fragment>
      ))}
    </div>
  );
};

export default CatalogView;
