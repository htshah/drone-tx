import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core';

import Theme from './common/Theme';
import Router from './common/Router';
import withAppContext from './hoc/withAppContext';

import GlobalStyle from './common/GlobalStyle';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}

const App = () => (
  <MuiThemeProvider theme={Theme}>
    <GlobalStyle />
    <Router />
  </MuiThemeProvider>
);

App.whyDidYouRender = true;

ReactDOM.render(withAppContext(App), document.getElementById('root'));
