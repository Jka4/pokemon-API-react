import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import { hot } from 'react-hot-loader/root';

import "../styles/App.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import MainContainer from "../../mainContainer/mainContainer";
import HeaderLine from "../../HeaderLine/HeaderLine";
import DetailedPage from "../../DetailedPage/DetailedPage";


const App = () => {
  return (
    <Router basename='/'>
      <div className='App'>
        <HeaderLine />
        <Switch>
          <Route exact path='/' component={MainContainer} />
          <Route path='/detailedPage/pokemon/' component={DetailedPage} />
          <Route path="/" component={() => <div>page not found</div>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
// export default hot(App);
