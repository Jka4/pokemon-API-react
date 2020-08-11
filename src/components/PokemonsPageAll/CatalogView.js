import React from "react";
import 'react-tippy/dist/tippy.css'
import { Tooltip } from 'react-tippy';
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
            <Tooltip
              title={index?.name}
              position="top"
              trigger="mouseenter"
              arrow={true}
            >
              <img src={index?.image} alt="" tabIndex={key} />
            </Tooltip>
          </NavLink>
        </React.Fragment>
      ))
      }
    </div >
  )
}


export default CatalogView;
