import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
// import { hot } from 'react-hot-loader/root';

import "../styles/App.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import MainContainer from "@MainContainer";
import DetailedPage from "@DetailedPage";
import AllPokemonsPage from '@AllPokemonsPage';

const App = () => {
  return (
    <BrowserRouter basename='/pokemon-API-react'>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={MainContainer} />
          <Route path='/detailedPage/pokemon/' component={DetailedPage} />
          <Route path='/allPokemons' component={AllPokemonsPage} />
          <Route path="/" component={() => <div>page not found</div>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
// export default hot(App);
