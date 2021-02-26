import React, { useState, useCallback } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleFirstnameChange = useCallback(
    (e) => {
      setFirstname(e.target.value);
      setName(firstname + lastname);
      console.log("function recreated by firstname change");
    },
    [firstname]
  );

  const handleLastnameChange = useCallback(
    (e) => {
      setLastname(e.target.value);
      setName(firstname + lastname);
      console.log("function recreated by lastname change");
    },
    [lastname]
  );

  const consoleName = () => {
    console.log(name);
  };

  return (
    <div>
      <input
        value={firstname}
        placeholder="firstname"
        onChange={handleFirstnameChange}
      />
      <input
        value={lastname}
        placeholder="lastname"
        onChange={handleLastnameChange}
      />
      <button onClick={consoleName}>name</button>
    </div>
  );
};

export default App;
