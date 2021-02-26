import React, { useState, useRef, useEffect } from "react";

const App = () => {
  const [name, setName] = useState("");
  const prevName = useRef("");
  const inputEl = useRef(null);

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <div>
      <input
        value={name}
        ref={inputEl}
        onChange={(e) => setName(e.target.value)}
      />
      <span>
        My name is {name} and it used to be {prevName.current}
      </span>
    </div>
  );
};

export default App;
