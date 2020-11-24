import React, { useEffect, useState, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "../styles/App.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const HeaderLine = lazy(() => import("@HeaderLine"));
const MainContainer = lazy(() => import("@MainContainer"));
const DetailedPage = lazy(() => import("@DetailedPage"));
const PokemonsPageAll = lazy(() => import("@PokemonsPageAll"));
const ErrorPage = lazy(() => import("@ErrorPage"));
const NonSupportPlaceholder = lazy(() => import("@NonSupportPlaceholder"));
const ScreenOrientationReact = lazy(() => import("screen-orientation-react"));

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
      <Suspense fallback={<div className="fallback">Loading...</div>}>
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
      </Suspense>
    </>
  );
};

export default App;
