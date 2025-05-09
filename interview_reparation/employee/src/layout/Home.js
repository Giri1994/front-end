import React from "react";

import { useState } from "react";


const Home = () => {
  const [selectedValue, setSelectedValue] = useState('option1');
  const handleChange = (event) => {

    setSelectedValue(event.target.value);
  };

  return (<select value={selectedValue} onChange={handleChange}>
<option value = "option1">Option 1</option>
<option value = "option2">Option 2</option>
<option value = "option3">Option 3</option>

  </select>
  );
};

export default Home;
