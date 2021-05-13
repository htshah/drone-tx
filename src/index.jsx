import React, { useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';

import { MuiThemeProvider } from '@material-ui/core';
import Theme from './common/Theme';
import Router from './common/Router';

import withAppContext from './common/AppContextHOC';
import { useApp } from './context/App';
import GlobalStyle from './common/GlobalStyle';

/* if (process.env.NODE_ENV !== "production") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React);
} */


const App = () => {
  // Use Application Context
  const { setIsLandscape } = useApp();
  const setOrientation = useCallback(() => {
    setIsLandscape(Math.abs(window.orientation) === 90);
  }, []);
  useEffect(() => {
    // Handle Orientation change specially for iOS devices as they don't
    // lock the orientation for PWA
    window.addEventListener('orientationchange', setOrientation);
  }, []);

  return (
    <MuiThemeProvider theme={Theme}>
      <GlobalStyle />
      <Router />
    </MuiThemeProvider>
  );
};

ReactDOM.render(withAppContext(App), document.getElementById('root'));
