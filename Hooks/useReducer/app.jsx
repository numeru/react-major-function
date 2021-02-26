import React, { useReducer } from "react";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

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

const App = () => {
  const initialState = {
    count: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {state.count}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default App;
