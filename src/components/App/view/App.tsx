import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import '../styles/App.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styled from 'styled-components';

const HeaderLine = lazy(() => import('components/HeaderLine/HeaderLine'));
const MainContainer = lazy(() => import('components/MainContainer'));
const DetailedPage = lazy(() => import('components/DetailedPage'));
const PokemonPageAll = lazy(() => import('components/PokemonPageAll/index'));
const ErrorPage = lazy(() => import('components/ErrorPage/ErrorPage'));
const NonSupportPlaceholder = lazy(() => import('components/NonSupportPlaceholder/NonSupportPlaceholder'));

const App: React.FC = () => {
  const [supportScreenSize, setSupportScreenSize] = useState<boolean>(true);

  const getScreenWidth = () => {
    let res: boolean = document.body.clientWidth <= 319;
    setSupportScreenSize(res);
  };

  useEffect(() => {
    window.addEventListener('resize', getScreenWidth);
    getScreenWidth();
  });

  return (
    <Suspense fallback={<div className="fallback">Loading...</div>}>
      {!supportScreenSize ? (
        <AppWrapper>
          <Route exact component={HeaderLine} />

          <Switch>
            <Route exact path="/" component={MainContainer} />
            <Route path="/detailedPage/pokemon/" component={DetailedPage} />
            <Route exact path="/allPokemon" component={PokemonPageAll} />
            <Route path="/404" component={ErrorPage} />

            <Redirect from="*" to="/404" />
          </Switch>
        </AppWrapper>
      ) : (
        <NonSupportPlaceholder />
      )}
    </Suspense>
  );
};

const AppWrapper = styled.div`
  margin-top: 80px;
`;

export default App;
