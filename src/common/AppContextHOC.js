import React from "react";
import { AppProvider } from "../context/App";

/**
 * withAppContext(Component)
 * Wraps the component with AppContext
 */
export default Component => {
  return (
    <AppProvider>
      <Component />
    </AppProvider>
  );
};
