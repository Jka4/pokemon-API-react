import React, { lazy, Suspense } from "react";
import Loader from "react-loader-spinner";
import { NavLink } from "react-router-dom";
import Card from "@material-ui/core/Card";

const ImageContainer = lazy(() => import("components/ImageContainer/ImageContainer"));

interface pokemonCardProps {
  base_experience: number;
  id: number;
  name: string;
  onClick: any;
  order: number;
  src: string;
}

const PokemonCard: React.FC<pokemonCardProps> = ({
  src,
  name,
  order,
  base_experience,
  id,
  onClick,
}: pokemonCardProps) => {
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
            {src ? (
              <Suspense
                fallback={
                  <Loader
                    type="TailSpin"
                    height={50}
                    width={50}
                    color={"red"}
                  />
                }
              >
                <ImageContainer url={src} cn={"pokemonImage"} />
              </Suspense>
            ) : (
                <Loader type="TailSpin" height={50} width={50} color={"red"} />
              )}
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
