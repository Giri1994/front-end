import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const Practise1 = () => {
    const [selectVal, setSelectValue] = useState({
        id: "",
        name: "",
        age: "",
        salary: "",
        department: "",
        doj: ""
    });

    const [backendVal, setBackendVal] = useState([]);

    const idRef = useRef();
    const nameRef = useRef();
    const ageRef = useRef();
    const salaryRef = useRef();
    const departmentRef = useRef();
    const dojRef = useRef();

    const handleSelectedVal = (event, ref) => {
        const { name } = event.target;
        const value = ref.current.value;
        setSelectValue((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:8080/all");
            setBackendVal(response.data);
        } catch (error) {
            console.log("API call is not happening: " + error);
        }
    };

    const insertData = async () => {
        try {
            await axios.post("http://localhost:8080/insertEmployee", selectVal);
            alert("Inserted successfully");
        } catch (error) {
            console.log("API call is not happening: " + error);
        }
    };

    return (
        <div>
          <select disabled ref={idRef} name="id" onChange={(e) => handleSelectedVal(e, idRef)}>
                <option value="" disabled defaultValue="">
                    Select a single Value
                </option>
                {backendVal.map((option, index) => (
                    <option key={index} value={option.Id}>
                        {index + 1}: {option.id}
                    </option>
                ))}
            </select>
            <br />
            <select ref={nameRef} name="name" onChange={(e) => handleSelectedVal(e, nameRef)}>
                <option value="" disabled defaultValue="">
                    Select a single Value
                </option>
                {backendVal.map((option, index) => (
                    <option key={index} value={option.name}>
                        {index + 1}: {option.name}
                    </option>
                ))}
            </select>
            <br />
            <select ref={ageRef} name="age" onChange={(e) => handleSelectedVal(e, ageRef)}>
                <option value="" disabled defaultValue="">
                    Select a single Value
                </option>
                {backendVal.map((option, index) => (
                    <option key={index} value={option.age}>
                        {index + 1}: {option.age}
                    </option>
                ))}
            </select>
            <br />
            <select ref={salaryRef} name="salary" onChange={(e) => handleSelectedVal(e, salaryRef)}>
                <option value="" disabled defaultValue="">
                    Select a single Value
                </option>
                {backendVal.map((option, index) => (
                    <option key={index} value={option.salary}>
                        {index + 1}: {option.salary}
                    </option>
                ))}
            </select>
            <br />
            <select ref={departmentRef} name="department" onChange={(e) => handleSelectedVal(e, departmentRef)}>
                <option value="" disabled defaultValue="">
                    Select a single Value
                </option>
                {backendVal.map((option, index) => (
                    <option key={index} value={option.department}>
                        {index + 1}: {option.department}
                    </option>
                ))}
            </select>
            <br />
            <select ref={dojRef} name="doj" onChange={(e) => handleSelectedVal(e, dojRef)}>
                <option value="" disabled defaultValue="">
                    Select a single Value
                </option>
                {backendVal.map((option, index) => (
                    <option key={index} value={option.doj}>
                         {option.doj}
                    </option>
                ))}
            </select>
            <br />
            <button type="submit" onClick={insertData}>
                Submit
            </button>
        </div>
    );
};

export default Practise1;
