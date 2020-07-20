import React from "react";
import "./App.scss";
import MainContainer from "./components/mainContainer/mainContainer";
import HeaderLine from "./components/HeaderLine/HeaderLine";
import DetailedPage from "./components/DetailedPage/DetailedPage";
import store from "./store";
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  render() {
    return (
      <div className='App'>
        <HeaderLine />

        <Router>
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
}

export default App;
