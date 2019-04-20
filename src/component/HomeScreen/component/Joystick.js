import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { ColorPalette } from "../../../common/Theme";
const nipplejs = window.nipplejs;

const getNippleSize = () => {
  //Use screen's width if in landscape
  var width = window.innerWidth;

  if (Math.abs(window.orientation) != 90) {
    //Use screen's height if in potrait
    width = window.screen.height;
  }
  return width * 0.22;
};

export default ({ containerId, options, onMove, onEnd }) => {
  useEffect(() => {
    const defaultOptions = {
      zone: document.getElementById(containerId),
      mode: "static",
      color: ColorPalette.main.primary,
      position: { left: "50%", top: "50%" },
      size: getNippleSize(),
      shape: "square"
    };

    const stick = nipplejs.create({ ...defaultOptions, ...options });

    onMove &&
      stick.on("move", (event, data) => {
        onMove(data.instance.frontPosition);
      });
    onEnd && stick.on("end", () => onEnd());
  }, []);

  return null;
};
