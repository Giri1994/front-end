import React, { useState } from "react";

const Select = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const options = [
    { value: "option5", label: "option5" },
    { value: "option6", label: "option3" },
    { value: "option7", label: "option4" },
  ];

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <select value={selectedValue} onChange={handleChange}>
         <option value="" disabled>
          Select an employee
        </option>
      {options.map((option) => (
        <option key={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  );
};

export default Select;
