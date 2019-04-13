import React from "react";
import { AppProvider } from "../context/App";

export default Component => {
  return (
    <AppProvider>
      <Component />
    </AppProvider>
  );
};
