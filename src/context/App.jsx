import React, { useContext, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { isIOS } from 'react-device-detect';

const Context = React.createContext();

const isLandscapeView = () =>
  window.matchMedia('(orientation: landscape)').matches;

const AppProvider = ({ children }) => {
  /* Connection state */
  const [isConnected, setConnected] = useState(false);

  /* Orientation state */
  const [isLandscape, setIsLandscape] = useState(isLandscapeView());
  const setOrientation = useCallback(() => setIsLandscape(isLandscapeView()));

  // Handle Orientation change specially for iOS devices as they don't
  // lock the orientation for PWA.
  if (isIOS) {
    useEffect(() => {
      window.addEventListener('orientationchange', setOrientation);

      return () => {
        window.removeEventListener('orientationchange', setOrientation);
      };
    }, []);
  }

  return (
    <Context.Provider
      value={{
        isLandscape,
        isConnected,
        setConnected,
      }}
    >
      {children}
    </Context.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

const useAppContext = () => useContext(Context);
const AppConsumer = Context.Consumer;
export default Context;
export { AppProvider, AppConsumer, useAppContext };
