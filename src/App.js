import React from "react";
import "./App.css";
import MainContainer from "./components/mainContainer/mainContainer";
import HeaderLine from "./components/HeaderLine/HeaderLine";
import DetailedPage from "./components/DetailedPage/DetailedPage";
import store from "./store";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });

    AOS.init();
  }

  render() {
    let detailsPage = store.getState().detailsPage;

    return (
      <div className='App'>
        <HeaderLine />

        {/* {detailsPage === "" ? <MainContainer /> : <DetailedPage />} */}

        <Router>
          {detailsPage === "" ? (
            <Redirect to='/' />
          ) : (
            <Redirect to={`/detailedPage/pokemon/${detailsPage.name}`} />
          )}

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
