import React, { useState, useEffect } from "react";

const App = () => {
  const [bool, setBool] = useState(true);
  useEffect(() => {
    console.log("after change");

    return () => {
      console.log("before change");
    };
  }, [bool]);

  return (
    <div>
      <button onClick={() => setBool((prev) => !prev)}>change</button>
    </div>
  );
};

export default App;
