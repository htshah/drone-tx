import React, { useContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const Context = React.createContext();

const AppProvider = ({ children }) => {
  /* Connection state */
  const [isConnected, setConnected] = useState(false);

  /* Orientation state */
  const [isLandscape, setIsLandscape] = useState(
    window.matchMedia('(orientation: landscape)').matches
  );

  return (
    <Context.Provider
      value={{
        isLandscape,
        setIsLandscape: useCallback((flag) => setIsLandscape(flag), []),
        isConnected,
        setConnected
      }}
    >
      {children}
    </Context.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.element.isRequired
};

const useApp = () => useContext(Context);
const AppConsumer = Context.Consumer;
export default Context;
export { AppProvider, AppConsumer, useApp };
