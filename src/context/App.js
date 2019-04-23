import React, {
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback
} from "react";

const Context = React.createContext();

const AppProvider = props => {
  /* Connection state */
  const [isConnected, setConnected] = useState(false);

  /* Orientation state */
  const [isLandscape, setIsLandscape] = useState(
    window.matchMedia("(orientation: landscape)").matches
  );

  /* StickPosition state */
  const [stickPosition, setStickPosition] = useState({
    yaw: 0,
    pitch: 0,
    roll: 0,
    throttle: 1000
  });

  let stickPositionRef = useRef(stickPosition);

  useEffect(() => {
    stickPositionRef.current = stickPosition;
  });

  return (
    <Context.Provider
      value={{
        isLandscape,
        setIsLandscape: useCallback(flag => setIsLandscape(flag), []),
        stickPosition,
        setStickPosition: useCallback(position => {
          setStickPosition({
            ...stickPositionRef.current,
            ...position
          });
        }, []),
        isConnected,
        setConnected
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
