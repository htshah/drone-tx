import React from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";

import Joystick from "./component/Joystick";
import { useApp } from "../../context/App";

const StickContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  float: left;
`;

export default () => {
  const { setStickPosition } = useApp();

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="stretch"
        style={{ height: "50%" }}
      >
        <Grid item style={{ height: "30px" }}>
          Grid 1.1
        </Grid>
        <Grid item>Grid 1.2</Grid>
      </Grid>
      <div style={{ width: "100%", height: "40%" }}>
        {/* Left Stick */}
        <StickContainer id="left-stick" />
        <Joystick
          containerId="left-stick"
          options={{ resetY: false }}
          onMove={({ x, y }) => {
            setStickPosition({ throttle: -y, yaw: x });
          }}
          onEnd={() => setStickPosition({ yaw: 0 })}
        />

        {/* Right Stick */}
        <StickContainer id="right-stick" />
        <Joystick
          containerId="right-stick"
          onMove={({ x, y }) => setStickPosition({ pitch: -y, roll: x })}
          onEnd={() => setStickPosition({ pitch: 0, roll: 0 })}
        />
      </div>
    </React.Fragment>
  );
};
