import React from "react";
import { useAppContext } from "store";

const Counter = () => {
  const { state, dispatch } = useAppContext();
  const { count } = state;
  return (
    <div>
      {count}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;
