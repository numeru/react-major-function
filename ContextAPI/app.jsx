import React from "react";
import Counter from "./counter";
import { AppProvider } from "./store";

const App = () => {
  return (
    <AppProvider>
      <Counter />
    </AppProvider>
  );
};

export default App;
