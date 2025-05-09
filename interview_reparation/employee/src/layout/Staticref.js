import React, { useRef, useState } from "react";

const Staticref = () => {
  const inputOption = useRef("");
  const [selectedValue, setSelectedValue] = useState("");

  const options = [
    { value: "option5", label: "option5" },
    { value: "option6", label: "option6" },
    { value: "option7", label: "option7" },
  ];

  const handleChange = (event) => {
    inputOption.current = event.target.value;
    setSelectedValue(inputOption.current);
  };

  return (
    <select value={selectedValue} onChange={handleChange}>
      <option value="" disabled>
        select any one{" "}
      </option>
      {options.map((option) => (
        <option key={option.label} value={option.label}>
          {option.label}
        </option>
      ))}
      ;
    </select>
  );
};

export default Staticref;
