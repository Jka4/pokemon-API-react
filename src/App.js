import React from "react";
import { Route, Router, Switch, } from "react-router-dom";
import { createBrowserHistory } from 'history';

import "./App.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import MainContainer from "./components/mainContainer/mainContainer";
import HeaderLine from "./components/HeaderLine/HeaderLine";
import DetailedPage from "./components/DetailedPage/DetailedPage";

const history = createBrowserHistory({
  basename: '/pokemon-API-react'
})

const App = () => {
  return (
    <div className='App'>

      <Router history={history}>
        <HeaderLine />

        <Switch>
          <Route exact path='/' component={MainContainer} />
          <Route path='/detailedPage/pokemon/' component={DetailedPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
// http://localhost:3000/pokemon-API-react/detailedPage/pokemon/croagunk