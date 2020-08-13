import React from "react";
import 'react-tippy/dist/tippy.css'
import { setDelailedPageData } from "@APIutils";
import { NavLink } from "react-router-dom";

import './styles/style.scss';


const CatalogView = (props) => {
  const { pokemonDataArray } = props

  return (
    <div className="wrapper">
      {pokemonDataArray.map((index, key) => (
        <React.Fragment key={key}>
          <NavLink to={`/detailedPage/pokemon/${index?.name}`} data-pokemon_id={index?.id} onClick={setDelailedPageData}
            key={key}>
            <img src={index?.image} alt="" tabIndex={key} />
          </NavLink>
        </React.Fragment>
      ))
      }
    </div >
  )
}

export default React.memo(CatalogView);
