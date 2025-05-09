import React, { useState } from "react";

const Child = ({ onMessage }) => {
  const [message, setMessage] = useState("");

  const sendMessageToParent = () => {
    onMessage(message);
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></input>
      <button onClick={sendMessageToParent}> click here</button>
    </div>
  );
};

export default Child;
