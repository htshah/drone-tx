import React, { useContext, useState, useCallback } from "react";

const Context = React.createContext();

const AppProvider = props => {
  /* Connection state */
  const [isConnected, setConnected] = useState(false);

  /* Orientation state */
  const [isLandscape, setIsLandscape] = useState(
    window.matchMedia("(orientation: landscape)").matches
  );

  return (
    <Context.Provider
      value={{
        isLandscape,
        setIsLandscape: useCallback(flag => setIsLandscape(flag), []),
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
