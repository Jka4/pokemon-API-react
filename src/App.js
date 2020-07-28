import React from "react";
import { Route, BrowserRouter as Router, Switch, } from "react-router-dom";
import { hot } from 'react-hot-loader/root';

import "./App.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import MainContainer from "./components/mainContainer/mainContainer";
import HeaderLine from "./components/HeaderLine/HeaderLine";
import DetailedPage from "./components/DetailedPage/DetailedPage";


const App = () => {
  return (
    <div className='App'>
      <Router basename='/'>
        <HeaderLine />
        <Switch>
          <Route exact path='/' component={MainContainer} />
          <Route path='/detailedPage/pokemon/' component={DetailedPage} />
        </Switch>
      </Router>
    </div>
  );
}

// export default App;
export default hot(App);