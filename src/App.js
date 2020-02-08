import React from "react";
import "./App.css";
import MainContainer from "./components/mainContainer/mainContainer";
import HeaderLine from "./components/HeaderLine/HeaderLine";
import DetailedPage from "./components/DetailedPage/DetailedPage";
import store from "./store";
import "aos/dist/aos.css";
<<<<<<< HEAD
import { Route, BrowserRouter as Router, Switch, ss } from "react-router-dom";
=======
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
>>>>>>> c2f29fa9619b9c06ea899e5068b0f3721571b1ed

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
