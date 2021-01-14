import React, { lazy } from 'react';
import { NavLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';

const ImageContainer = lazy(() => import('components/ImageContainer/ImageContainer'));

type pokemonCardType = {
  base_experience: number;
  id: number;
  name: string;
  order: number;
  src: string;
  placeholderBase64: string;
};

const PokemonCard: React.FC<pokemonCardType> = ({
  src,
  name,
  order,
  base_experience,
  id,
  placeholderBase64,
}: pokemonCardType) => {
  return (
    <Card className="pokemonCard_Outer">
      <NavLink to={`/detailedPage/pokemon/${name}`} data-pokemon_id={id} key={id}>
        <div className="pokemonCard">
          <div className="imageWrapper">
            <ImageContainer
              url={src}
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
