import React, { lazy, Suspense } from "react";
import Loader from "react-loader-spinner";
import { NavLink } from "react-router-dom";
import Card from "@material-ui/core/Card";
import PropTypes from "prop-types";

const ImageContainer = lazy(() => import("@ImageContainer"));

const PokemonCard = ({
  src = "",
  name = "",
  order = 0,
  base_experience = 0,
  id = 0,
  onClick = () => {},
}) => {
  return (
    <Card className="pokemonCard_Outher">
      <NavLink
        to={`/detailedPage/pokemon/${name}`}
        data-testid="testId"
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

PokemonCard.propTypes = {
  base_experience: PropTypes.number,
  id: PropTypes.number,
  name: PropTypes.string,
  onClick: PropTypes.func,
  order: PropTypes.number,
  src: PropTypes.string,
};

export default PokemonCard;
