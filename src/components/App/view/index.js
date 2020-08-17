import React from "react";
import { Route, Switch } from "react-router-dom";

import "../styles/App.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import MainContainer from "@MainContainer";
import DetailedPage from "@DetailedPage";
import PokemonsPageAll from '@PokemonsPageAll';
import HeaderLine from "@HeaderLine";
import ErrorPage from '@ErrorPage';

const App = (props) => {

  return (
    <React.Fragment>
      <div className='App'>
        <HeaderLine />

        <Switch>
          <Route exact path='/' component={MainContainer} />
          <Route path='/detailedPage/pokemon/' component={DetailedPage} />
          <Route path='/allPokemons' component={PokemonsPageAll} />
          <Route path="/404" component={ErrorPage} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
