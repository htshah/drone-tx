import React, { useContext, useState } from "react";

const Context = React.createContext();

const AppProvider = props => {
  const [isLandscape, setIsLandscape] = useState(
    window.matchMedia("(orientation: landscape)").matches
  );

  const [stickPosition, setStickPosition] = useState({
    yaw: 0,
    pitch: 0,
    roll: 0,
    throttle: 1000
  });

  return (
    <Context.Provider
      value={{
        isLandscape,
        setIsLandscape: flag => setIsLandscape(flag),
        stickPosition,
        setStickPosition: position => {
          setStickPosition(position);
        }
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

const useApp = () => useContext(Context);
const AppConsumer = Context.Consumer;
export default Context;
export { AppProvider, AppConsumer, useApp };
