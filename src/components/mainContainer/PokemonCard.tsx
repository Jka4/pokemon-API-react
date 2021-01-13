import React, { lazy } from 'react';
import { NavLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import { pokemonCardType } from 'types';

const ImageContainer = lazy(() => import('components/ImageContainer/ImageContainer'));

const PokemonCard: React.FC<pokemonCardType> = ({ pokeCard }: pokemonCardType) => {
  const { name, order, base_experience, placeholderBase64, image } = pokeCard;

  return (
    <Card className="pokemonCard_Outer">
      <NavLink to={`/detailedPage/pokemon/${name}`}>
        <div className="pokemonCard">
          <div className="imageWrapper">
            <ImageContainer
              url={image}
              cn={'bigImage'}
              fallback={
                <img loading="lazy" src={placeholderBase64} className="pokemonImage placeholderBase64 deBlur" alt="" />
              }
            />
          </div>
          <span>{name}</span>
          <span>{order}</span>
          <span>{base_experience}</span>
        </div>
      </NavLink>
    </Card>
  );
};

export default PokemonCard;
