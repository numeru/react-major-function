import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      {count}
      <button onClick={incrementCount}>+1</button>
      <button onClick={decrementCount}>-1</button>
    </div>
  );
};

export default App;
