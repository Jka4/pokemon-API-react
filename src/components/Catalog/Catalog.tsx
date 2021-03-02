/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import BigGrid from './views/BigGrid';
import SmallGrid from './views/SmallGrid';

import ContentHeader from './views/ContentHeader';
import { Switch, Route } from 'react-router-dom';

const Catalog: React.FC = () => {
  return (
    <>
      <ContentHeader />

      <Switch>
        <Route path="/catalog/big" component={BigGrid} />
        <Route path="/catalog/small" component={SmallGrid} />
      </Switch>
    </>
  );
};

export default Catalog;
