import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "../styles/App.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import MainContainer from "@MainContainer";
import DetailedPage from "@DetailedPage";
import PokemonsPageAll from "@PokemonsPageAll";
import HeaderLine from "@HeaderLine";
import ErrorPage from "@ErrorPage";
import NonSupportPlaceholder from "@NonSupportPlaceholder";
import ScreenOrientationReact from "screen-orientation-react";

const App = () => {
  const [supportScreenSize, setSupportScreenSize] = useState(null);

  const getScreenWidth = () => {
    setSupportScreenSize(document.body.clientWidth <= 319);
  };

  useEffect(() => {
    window.addEventListener("resize", getScreenWidth);
    getScreenWidth();
  });

  const options = {
    color: "red",
    bgColor: "rgba(255, 255, 0, 1)",
    iconColor: "red",
    animation: true,
    fontSize: 5,
  };

  return (
    <>
      {!supportScreenSize ? (
        <div className="App">
          <Route render={(props) => <HeaderLine props={props} />} />

          <Switch>
            <Route exact path="/" component={MainContainer} />
            <Route path="/detailedPage/pokemon/" component={DetailedPage} />
            <Route path="/allPokemons" component={PokemonsPageAll} />
            <Route path="/404" component={ErrorPage} />

            <Redirect from="*" to="/404" />
          </Switch>
        </div>
      ) : (
        <NonSupportPlaceholder />
      )}

      <ScreenOrientationReact options={options} />
    </>
  );
};

export default App;
