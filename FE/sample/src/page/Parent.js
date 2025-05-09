import React, { useState } from "react";

import Child from "./Child";

const Parent = () => {
  const [message, setMessage] = useState("");

  const handlemessage = (message) => {
    setMessage(message);
  };

  return (
    <div>
      <p> Parent message {message}</p>
      <Child onMessage={handlemessage} />
    </div>
  );
};

export default Parent;
