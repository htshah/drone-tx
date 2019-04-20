import React from "react";
import { Grid, Button } from "@material-ui/core";
import styled from "styled-components";

import Joystick from "./component/Joystick";
import { useApp } from "../../context/App";

const StickContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  float: left;
`;

const JoyStickContainer = () => {
  const { setStickPosition } = useApp();

  return (
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
  );
};

export default () => {
  const { isConnected, setConnected } = useApp();

  const handleConnection = () => {
    setConnected(!isConnected);
  };
  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="stretch"
        style={{ height: "40%" }}
      >
        <Grid item style={{ height: "30px" }}>
          Grid 1.1
        </Grid>
        <Grid item>Grid 1.2</Grid>
      </Grid>
      {/* Joystick render */}
      <JoyStickContainer />

      <Grid
        container
        justify="center"
        style={{ height: "20%", padding: "10px 0" }}
      >
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={handleConnection}
          >
            {!isConnected ? "Connect" : "Disconnect"}
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
