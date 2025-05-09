import React, { useRef, useState } from "react";

const Practise = () =>{
const [selectVal ,setSelectedVal] = useState("");

const refval =useRef();

const comboVals=[
{value : "Giri" ,label: "option1"},
{value : "Tamil" ,label: "option2"}
];

const handleVal =()=>{
    setSelectedVal(refval.current.value)
}

return(
<>
<select ref={refval} onChange={handleVal}>
    <option value="" disabled>Select a value</option>
    {
        comboVals.map((option)=>(
            <option key={option.label} value={option.value}>{option.value}</option>
        ))
    };

</select>

<h1>{selectVal}</h1>

</>


);


}

export default Practise;