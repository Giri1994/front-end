import React, { useEffect, useState } from "react";

import axios from "axios";

const AxiosDropdown = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetchData();
    fetchEmployeebyNameAndAge();
    fetchEmployeeAgeBetween();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/all");
      setOptions(response.data);
    } catch (error) {
      console.error("Error in fetching data" + error);
    }
  };

  const fetchEmployeebyNameAndAge = async (username, age) => {
    try {
      const response = await axios.get("http://localhost:8080/username/age", {
        params: { username: "Giri", age: 30 },
      });
      console.log("----------->fetchEmployeebyNameAndAge" + response.data);
    } catch (error) {
      console.error("error in fetching the data" + error);
    }
  };

  const fetchEmployeeAgeBetween = async (start, end) => {
    try {
      const response = await axios.get("http://localhost:8080/range/age", {
        params: { start: 20, end: 35 },
      });
      console.log("----------->fetchEmployeeAgeBetween" + response.data);
    } catch (error) {
      console.error("error in fetching the data" + error);
    }
  };

  const handleEvent = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <h1> Employee</h1>
      <select value={selectedValue} onChange={handleEvent}>
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

export default AxiosDropdown;
