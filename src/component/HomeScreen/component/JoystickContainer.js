import React, { useEffect, memo } from "react";
import styled from "styled-components";

import injectJoystick from "./Joystick";

const StickContainerWrapper = styled.div`
  width: 100%;
  height: 40%;
`;
const StickContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  float: left;
`;

const JoyStickContainer = ({
  onLeftStickMove,
  onLeftStickEnd,
  onRightStickMove,
  onRightStickEnd
}) => {
  useEffect(() => {
    //Render leftJoystick
    injectJoystick({
      containerId: "left-stick",
      options: { resetY: false },
      onMove: onLeftStickMove,
      onEnd: onLeftStickEnd
    });

    //Render rightJoystick
    injectJoystick({
      containerId: "right-stick",
      onMove: onRightStickMove,
      onEnd: onRightStickEnd
    });
  }, []);

  return (
    <StickContainerWrapper>
      <StickContainer id="left-stick" />
      <StickContainer id="right-stick" />
    </StickContainerWrapper>
  );
};
JoyStickContainer.whyDidYouRender = true;

export default memo(JoyStickContainer);