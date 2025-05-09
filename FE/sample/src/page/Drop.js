import React, { useState } from "react";

const Drop = () => {
    const[selectVal,setSelectedVal] = useState("");
  const options = [
    {value:"Giri",label:"option1"}, 
    {value:"kanda",label:"option2"},
    {value:"Sudhan",label:"option3"}
];

  return (
    <div>
    <select value={selectVal} onChange={(e)=>setSelectedVal(e.target.value)}>
        <option value="" disabled>Select a Value</option>
      {options.map((option) => (
        <option>{option.value}</option>
      ))}
    </select>
    <h1>{selectVal}</h1>
    </div>
  );
};

export default Drop;
