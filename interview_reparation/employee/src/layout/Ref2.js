import React, { useRef, useState } from "react";

const Ref2 = () => {
    const[count ,setCount] =useState(0);
    const inputRef = useRef(null);
    const countRef = useRef(0);

    const handleClick = () => {
      // Increment the count
      countRef.current += 1;
      console.log("Count:", countRef.current);
      setCount(countRef.current);
      // Focus the input
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    return (
      <div>
        <input type="text" ref={inputRef}></input>
        <button onClick={handleClick}>Focus Input</button>
        <h1>{count}</h1>
      </div>
    );
};

export default Ref2;
