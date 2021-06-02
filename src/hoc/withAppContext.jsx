import React from 'react';
import { AppProvider } from '../context/App';

/**
 * Returns the passed component by wrapping it into the
 * <AppProvider> component.
 * @param {React} Component A Valid React Component
 * @returns {React}
 */
const withAppContext = (Component) => (
  <AppProvider>
    <Component />
  </AppProvider>
);

export default withAppContext;
