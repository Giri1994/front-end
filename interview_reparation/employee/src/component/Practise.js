import React, { useState, useEffect } from "react";
import axios from "axios";

const Practise = () => {
  const [selectedVal, setSelectedVal] = useState("");
  const [options, setOptions] = useState([]);

  //   const options = [
  //     { value: "Giri", label: "option 1" },
  //     { value: "Kanda", label: "option 2" },
  //   ];

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    const response = await axios.get("http://localhost:8080/all");
    console.log("data:" + response.data);
    setOptions(response.data);
  };

  return (
    <div>
      <h1>Select an employee Value</h1>
      <select
        value={selectedVal}
        onChange={(e) => {
          setSelectedVal(e.target.value);
        }}
      >
        <option value="" disabled>
          Select an employee
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Practise;
