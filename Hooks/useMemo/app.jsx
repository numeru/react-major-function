import React, { useEffect, useMemo, useState } from "react";

const App = () => {
  // 1)
  const [num, setNum] = useState(0);

  function slowFunction(num) {
    for (let i = 0; i < 100000000000000; i++) {}
    return num * 2;
  }

  const doubleNumber = useMemo(() => {
    return slowFunction(num);
  }, [num]);

  // 2)
  const [dark, setDark] = useState(false);

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme Changed");
  }, [themeStyle]);

  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  );
};

export default App;
