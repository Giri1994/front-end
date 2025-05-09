import React, { useEffect, useRef, useState } from "react";

const Ref1 = () => {
  const [countVal, setCountVal] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  const handleChange = (event) => {
    setCountVal(event.target.value);
  };

  return (
    <div>
      <input
        value={countVal}
        type="text"
        onChange={handleChange}
      ></input>
      <h1>Count : {count.current}</h1>
    </div>
  );
};

export default Ref1;
