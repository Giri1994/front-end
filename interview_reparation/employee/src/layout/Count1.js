import React, { useState } from "react";

const Count1 = () => {
  const [count, setCount] = useState(0);

  const handleChange = (event) => {
    setCount(count + 1);
  };

  return (
    <div>
      <input type="text" onChange={handleChange}></input>
      <br></br>
      <button onClick={handleChange}> Click me </button>
      <h1>Count : {count}</h1>
    </div>
  );
};

export default Count1;
