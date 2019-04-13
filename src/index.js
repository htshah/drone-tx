import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import { MuiThemeProvider } from "@material-ui/core";
import Theme from "./common/Theme";
import Router from "./common/Router";

import withAppContext from "./common/AppContextHOC";
import { useApp } from "./context/App";
import GlobalStyle from "./common/GlobalStyle";

const App = () => {
  // Use Application Context
  const { setIsLandscape } = useApp();
  useEffect(() => {
    // Handle Orientation change specially for iOS devices as they don't
    // lock the orientation for PWA
    const setOrientation = () => {
      setIsLandscape(Math.abs(window.orientation) === 90);
    };
    window.addEventListener("orientationchange", setOrientation);
  }, []);

  return (
    <MuiThemeProvider theme={Theme}>
      <GlobalStyle />
      <Router />
    </MuiThemeProvider>
  );
};

ReactDOM.render(withAppContext(App), document.getElementById("root"));
