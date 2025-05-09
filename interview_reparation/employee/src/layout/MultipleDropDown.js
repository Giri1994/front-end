import axios from "axios";
import React, { useEffect, useState } from "react";
import "./DataTable.css";

const MultipleDropDown = () => {
  const [selectedVal, setSelectedVal] = useState("");
  const [options, setOptions] = useState([]);
  const [filterData, setFilterdata] = useState([]);
  // const options =[
  //     {value:"Giri",lable : "tamil"},
  //     {value:"Kanda",lable : "tamil"},
  // ];
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const apiResponse = await axios.get("http://localhost:8080/all");
      setOptions(apiResponse.data);
      setFilterdata(apiResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setOptions([]);
      setFilterdata([]);
    }
  };
  //   useEffect(() => {
  // //   const filterChange =(event)=> {
  //         // const selectedVal =event.target.value;

  //         // setSelectedVal(selectedVal);

  //         // if(selectedVal){
  //             const filter= options.filter( o => o.id.toString() === selectedVal.id.toString())
  //             setFilterdata(filter);
  //         // }else{
  //         //     setFilterdata(options); //full data
  //         // }

  // //   }
  // }, [selectedVal, filterData]);

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedVal(selectedValue);
console.log(selectedVal.data)
    // Filter the data based on the selected value
    if (selectedValue) {
      const filtered = options.filter(
        (option) => option.id.toString() === selectedValue
      );
      setFilterdata(filtered);
    } else {
      setFilterdata(options); // Reset to full data if no value is selected
    }
  };

  return (
    <div>
      <select value={selectedVal} onChange={handleSelectChange}>
        <option value="" disabled>
          Select a value
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>

      {/* // </div>
    // <div>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>ID</th>
    //         <th>Name</th>
    //         <th>Age</th>
    //         <th>Salary</th>
    //         <th>Department</th>
    //         <th>DOJ</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {options.map((option) => (
    //         <tr>
    //           <td>{option.id}</td>
    //           <td>{option.name}</td>
    //           <td>{option.age}</td>
    //           <td>{option.salary}</td>
    //           <td>{option.department}</td>
    //           <td>{option.doj}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div> */}

      <table className="table">
        <thead>
          <tr className="tr">
            <th className="th">ID</th>
            <th className="th">Name</th>
            <th className="th">Age</th>
            <th className="th">Salary</th>
            <th className="th">Department</th>
            <th className="th">DOJ</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((option) => (
            <tr key={option.id} className="tr">
              <td className="td">{option.id}</td>
              <td className="td">{option.name}</td>
              <td className="td">{option.age}</td>
              <td className="td">{option.salary}</td>
              <td className="td">{option.department}</td>
              <td className="td">{option.doj}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MultipleDropDown;
