import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import '../styles/App.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const HeaderLine = lazy(() => import('components/HeaderLine/HeaderLine'));
const MainContainer = lazy(() => import('components/mainContainer/mainContainer'));
const DetailedPage = lazy(() => import('components/DetailedPage/DetailedPage'));
const PokemonsPageAll = lazy(() => import('components/PokemonsPageAll/index'));
const ErrorPage = lazy(() => import('components/ErrorPage/ErrorPage'));
const NonSupportPlaceholder = lazy(() => import('components/nonSupportPlaceholder/nonSupportPlaceholder'));

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
                <div className="App">
                    <Route exact component={HeaderLine} />

                    <Switch>
                        <Route exact path="/" component={MainContainer} />
                        <Route path="/detailedPage/pokemon/" component={DetailedPage} />
                        <Route path="/allPokemons" component={PokemonsPageAll} />
                        <Route path="/404" component={ErrorPage} />

                        <Redirect from="*" to="/404" />
                    </Switch>
                </div>
            ) : (<NonSupportPlaceholder />)}
        </Suspense>
    );
};

export default App;
