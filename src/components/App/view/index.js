import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "../styles/App.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import MainContainer from "@MainContainer";
import DetailedPage from "@DetailedPage";
import PokemonsPageAll from '@PokemonsPageAll';

const App = () => {
  return (
    <Router basename='/pokemon-API-react'>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={MainContainer} />
          <Route path='/detailedPage/pokemon/' component={DetailedPage} />
          <Route path='/allPokemons' component={PokemonsPageAll} />
          <Route path="/" component={() => <div>page not found</div>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
