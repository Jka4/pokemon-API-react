import React, { Suspense } from "react";
import { NavLink } from "react-router-dom";
import Card from "@material-ui/core/Card";

type pokemonCardType = {
  base_experience: number;
  id: number;
  name: string;
  order: number;
  src: string;
  placeholderBase64: string;
}

const PokemonCard: React.FC<pokemonCardType> = ({ src, name, order, base_experience, id, placeholderBase64 }: pokemonCardType) => {

  return (
    <Card className="pokemonCard_Outher">
      <NavLink
        to={`/detailedPage/pokemon/${name}`}
        data-pokemon_id={id}
        key={id}
      >
        <div className="pokemonCard">
          <div className="imageWrapper">
            <Suspense fallback={<img loading="lazy" src={placeholderBase64} className="pokemonImage placeholderBase64" alt='' />} >
              <img loading="lazy" src={src} className="pokemonImage" alt="pokemonImage" />
            </Suspense>
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
