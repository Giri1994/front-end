import React, { useEffect, useRef, useState } from "react";

const Ref3 = () => {
  const [inputVal, setInputVal] = useState("");
  const prevVal= useRef();

  useEffect(()=>{
    prevVal.current= inputVal;
  },[inputVal]);

  return (
    <>
      <input type="text"  onChange={(e) => setInputVal(e.target.value)}></input>

      <h1> current :{inputVal}</h1>
      <h1> previous :{prevVal.current}</h1>
    </>
  );
};

export default Ref3;
