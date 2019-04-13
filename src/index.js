import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import { MuiThemeProvider, Typography } from "@material-ui/core";
import Theme from "./common/Theme";
import Router from "./common/Router";

import withAppContext from "./common/AppContextHOC";
import { useApp } from "./context/App";

const App = () => {
  const { isLandscape, setIsLandscape } = useApp();
  useEffect(() => {
    const setOrientation = () => {
      setIsLandscape(Math.abs(window.orientation) === 90);
    };
    window.addEventListener("orientationchange", setOrientation);
  }, []);
  return (
    <MuiThemeProvider theme={Theme}>
      <Router />
    </MuiThemeProvider>
  );
};

ReactDOM.render(withAppContext(App), document.getElementById("root"));
