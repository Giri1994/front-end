import React, { useEffect, useState } from "react";
import axios from "axios";

const DropDown = () => {
  const [selectedValue, setSelectedVal] = useState('');
  const [options,setOption] = useState([]);

//   const options = [
//     { value: "Giri", label: "Tamil" },
//     { value: "Tamil", label: "Tamil" },
//   ];

useEffect(() =>{
    fetchData();
},[])


  const fetchData = async () =>{
    const response = await axios.get("http://localhost:8080/all")
    setOption(response.data);
  };

  const handleEvent = (event) => {
    setSelectedVal(event.target.value);
  };

  return (

      <div>
        <h1>Select an employee Value</h1>
        <select value={selectedValue} onChange={handleEvent}>
            <option value="" disabled>Select a value </option>
          {
            options.map((option)=>(
                <option key={option.id} value={option.id}>
                    {option.name}
                </option>
            ))}
        </select>
      </div>
 
  );
};

export default DropDown;
