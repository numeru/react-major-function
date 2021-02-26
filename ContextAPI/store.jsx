import React, { createContext, useReducer, useContext } from "react";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// reducer
const reducer = (prev, action) => {
  const { type } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...prev,
        count: prev.count + 1,
      };
    case DECREMENT:
      return {
        ...prev,
        count: prev.count - 1,
      };
    default:
      return prev;
  }
};

// Context Instance
const AppContext = createContext();

// Provider (useReducer)
export const AppProvider = ({ children }) => {
  const initialState = {
    count: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Consumer (useContext)
export const useAppContext = () => useContext(AppContext);
