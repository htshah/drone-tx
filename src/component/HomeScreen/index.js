import React, { useCallback, memo, useRef } from 'react';
import { Grid, Button } from '@material-ui/core';

import { useApp } from '../../context/App';
import JoystickContainer from './component/JoystickContainer';

const HomeScreen = () => {
  const { isConnected, setConnected } = useApp();

  const stickPositionRef = useRef({
    throttle: 0,
    yaw: 0,
    pitch: 0,
    roll: 0
  });

  const setStickPosition = (newPosition) => {
    stickPositionRef.current = { ...stickPositionRef.current, ...newPosition };
  };

  const handleConnection = () => {
    setConnected(!isConnected);
  };

  const onLeftStickMove = ({ x, y }) =>
    setStickPosition({ throttle: -y, yaw: x });
  const onLeftStickEnd = () => setStickPosition({ yaw: 0 });

  const onRightStickMove = ({ x, y }) =>
    setStickPosition({ pitch: -y, roll: x });
  const onRightStickEnd = () => setStickPosition({ pitch: 0, roll: 0 });
  return (
    <React.Fragment>
      <Grid
        container
        direction='column'
        justify='space-between'
        alignItems='stretch'
        style={{ height: '40%' }}
      >
        <Grid item style={{ height: '30px' }}>
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
        justify='center'
        style={{ height: '20%', padding: '10px 0' }}
      >
        <Grid item>
          <Button
            variant='contained'
            color='primary'
            onClick={handleConnection}
          >
            {isConnected === false ? 'Connect' : 'Disconnect'}
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
HomeScreen.whyDidYouRender = true;

export default memo(HomeScreen);
