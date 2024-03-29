import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { pageRoutes } from 'routes';
import '../styles/App.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const HeaderLine = lazy(() => import('components/HeaderLine/HeaderLine'));
const MainContainer = lazy(() => import('components/MainContainer'));
const DetailedPage = lazy(() => import('components/DetailedPage'));
const Catalog = lazy(() => import('components/Catalog/Catalog'));
const PAGE_404 = lazy(() => import('components/PAGE_404/PAGE_404'));
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
    <Suspense fallback={<Fallback>Loading...</Fallback>}>
      {!supportScreenSize ? (
        <AppWrapper>
          <Route component={HeaderLine} />

          <Switch>
            <Route path={pageRoutes.home} component={MainContainer} />
            <Route path={pageRoutes.detailedPage()} component={DetailedPage} />
            <Route path={pageRoutes.catalog} component={Catalog} />
            <Route path={pageRoutes.blank404} component={PAGE_404} />

            <Redirect from="*" to={pageRoutes.home} />
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

const Fallback = styled.div`
  width: 95vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 62px;
  font-weight: bold;
`;

export default App;
