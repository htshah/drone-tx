import React, { useCallback, memo } from "react";
import { Grid, Button } from "@material-ui/core";

import { useApp } from "../../context/App";
import JoystickContainer from "./component/JoystickContainer";

const HomeScreen = () => {
  const {
    isConnected,
    setConnected,
    stickPosition: { yaw, pitch, roll, throttle },
    setStickPosition
  } = useApp();

  const handleConnection = () => {
    // alert(isConnected ? "Disconnecting" : "Connecting");
    setConnected(!isConnected);
  };

  const onLeftStickMove = ({ x, y }) => {
    if (throttle !== -y || yaw !== x) {
      setStickPosition({ throttle: -y, yaw: x });
    }
  };
  const onLeftStickEnd = () => {
    if (yaw !== 0) {
      setStickPosition({ yaw: 0 });
    }
  };

  const onRightStickMove = ({ x, y }) => {
    if (pitch !== -y || roll !== x) {
      setStickPosition({ pitch: -y, roll: x });
    }
  };
  const onRightStickEnd = () => {
    if (pitch !== 0 || roll !== 0) {
      setStickPosition({ pitch: 0, roll: 0 });
    }
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
      <JoystickContainer
        onLeftStickMove={useCallback(onLeftStickMove, [])}
        onLeftStickEnd={useCallback(onLeftStickEnd, [])}
        onRightStickMove={useCallback(onRightStickMove, [])}
        onRightStickEnd={useCallback(onRightStickEnd, [])}
      />

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
HomeScreen.whyDidYouRender = true;

export default memo(HomeScreen);
