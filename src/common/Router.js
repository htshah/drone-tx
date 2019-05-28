import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomeScreen from '../component/HomeScreen';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomeScreen} />
    </Switch>
  </BrowserRouter>
);

export default Router;
