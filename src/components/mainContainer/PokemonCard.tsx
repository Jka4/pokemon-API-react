import React, { lazy, Suspense } from "react";
import { NavLink } from "react-router-dom";
import Card from "@material-ui/core/Card";

const ImageContainer = lazy(() => import("components/ImageContainer/ImageContainer"));

type pokemonCardType = {
  base_experience: number;
  id: number;
  name: string;
  onClick: any;
  order: number;
  src: string;
  placeholderBase64: string;
}

const PokemonCard: React.FC<pokemonCardType> = ({ src, name, order, base_experience, id, onClick, placeholderBase64 }: pokemonCardType) => {

  return (
    <Card className="pokemonCard_Outher">
      <NavLink
        to={`/detailedPage/pokemon/${name}`}
        data-testid="testIds"
        data-pokemon_id={id}
        onClick={onClick}
        key={id}
      >
        <div className="pokemonCard">
          <div className="imageWrapper">
            <Suspense fallback={<img src={placeholderBase64} alt="fallback" className='placeholderBase64' />} >
              <ImageContainer url={src} cn={"pokemonImage"} />
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

PokemonCard.defaultProps = {
  base_experience: 1,
  id: 1,
  name: "Poke",
  order: 1,
  src: "/",
};

export default PokemonCard;
