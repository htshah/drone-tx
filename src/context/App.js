import React, { useContext, useState } from "react";

const Context = React.createContext();

const AppProvider = props => {
  const [isLandscape, setIsLandscape] = useState(
    window.matchMedia("(orientation: landscape)").matches
  );
  return (
    <Context.Provider
      value={{ isLandscape, setIsLandscape: flag => setIsLandscape(flag) }}
    >
      {props.children}
    </Context.Provider>
  );
};

const useApp = () => useContext(Context);
const AppConsumer = Context.Consumer;
export default Context;
export { AppProvider, AppConsumer, useApp };
