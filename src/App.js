import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import "./App.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import MainContainer from "./components/mainContainer/mainContainer";
import HeaderLine from "./components/HeaderLine/HeaderLine";
import DetailedPage from "./components/DetailedPage/DetailedPage";

const App = () => {
  return (
    <div className='App'>

      <Router>
        <HeaderLine />

        <Switch>
          <Route exact path='/'>
            <MainContainer />
          </Route>
          <Route path='/detailedPage/pokemon/'>
            <DetailedPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
