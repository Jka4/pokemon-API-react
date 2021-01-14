import React, { lazy } from "react";
import { NavLink } from "react-router-dom";
import Card from "@material-ui/core/Card";

const ImageContainer = lazy(() => import("components/ImageContainer/ImageContainer"));

type pokemonCardType = {
  base_experience: number;
  id: number;
  name: string;
  order: number;
  src: string;
  placeholderBase64: string;
}

const PokemonCard: React.FC<pokemonCardType> = ({ src, name, order, base_experience, id, placeholderBase64 }: pokemonCardType) => {

  const fallback = (placeholderBase64: string) => {
    return (
      <>
        <img loading="lazy" src={placeholderBase64} className="placeholderBase64" alt="placeholderBase64" />
      </>
    );
  };

  return (
    <Card className="pokemonCard_Outher">
      <NavLink
        to={`/detailedPage/pokemon/${name}`}
        data-testid="testIds"
        data-pokemon_id={id}
        key={id}
      >
        <div className="pokemonCard">
          <div className="imageWrapper">
            <ImageContainer url={src} cn={"pokemonImage"} fallback={fallback(placeholderBase64)} />
          </div>
          <span>{name}</span>
          <span>{order}</span>
          <span>{base_experience}</span>
        </div>
      </NavLink>
    </Card>
  );
};

PokemonCard.defaultProps = {
  base_experience: 1,
  id: 1,
  name: "Poke",
  order: 1,
  src: "/",
};

export default PokemonCard;
