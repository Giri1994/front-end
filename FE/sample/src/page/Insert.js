import React, { useState } from "react";
import axios from "axios";

const Insert = () => {
  const [message, setMessage] = useState({
    id: "",
    name: "",
    age: "",
    salary: "",
    department: "",
    doj: "",
  });
  // const[id,setId] = useState("");
  // const[name,setName] = useState("");
  // const[age,setAge] = useState("");
  // const[salary,setSalary] = useState("");
  // const[department,setDepartment] = useState("");
  // const[doj,setDoj] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setMessage({
      ...message,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios
      .post("http://localhost:8080/insertEmployee", message, {
        headers: {
          "Content-Type": "application/json",
        },
      });

        console.log("Insert response:", response.data);
        setMessage({
          id: "",
          name: "",
          age: "",
          salary: "",
          department: "",
          doj: "",
        });
        alert("Inserted successfull");

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Id:
          <input type="text" name="id" value={message.id} onChange={handleInputChange} />
        </label>
        <label>
          Name:
          <input type="text" name="name" value={message.name} onChange={handleInputChange} />
        </label>
        <label>
          Age:
          <input type="text" name="age" value={message.age} onChange={handleInputChange} />
        </label>
        <label>
          salary:
          <input type="text" name="salary" value={message.salary} onChange={handleInputChange} />
        </label>
        <label>
          Department:
          <input
            type="text"
            name="department"
            value={message.department}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Doj:
          <input type="text" name="doj" value={message.doj} onChange={handleInputChange} />
        </label>

      <br />
        <button type="submit">Insert</button>
        </form>
    </div>
  );
};

export default Insert;



// import React, { useState } from "react";
// import axios from "axios";

// const Insert = () => {
// //   const [message, setMessage] = useState({
// //     id: "",
// //     name: "",
// //     age: "",
// //     salary: "",
// //     department: "",
// //     doj: "",
// //   });
//   const[id,setId] = useState("");
//   const[name,setName] = useState("");
//   const[age,setAge] = useState("");
//   const[salary,setSalary] = useState("");
//   const[department,setDepartment] = useState("");
//   const[doj,setDoj] = useState("");


// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;

// //     setMessage({
// //       ...message,
// //       [name]: value,
// //     });
// //   };
// const message = {
//     id: id,
//     name: name,
//     age: age,
//     salary: salary,
//     department: department,
//     doj: doj,
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await axios
//       .post("http://localhost:8080/insertEmployee", message, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//         console.log("Insert response:", response.data);
//         // setMessage({
//         //   id: "",
//         //   name: "",
//         //   age: "",
//         //   salary: "",
//         //   department: "",
//         //   doj: "",
//         // });


//         alert("Inserted successfull");

//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Id:
//           <input type="text" name="id" value={message.id} onChange={(e)=>{setId(e.target.value)}} />
//         </label>
//         <label>
//           Name:
//           <input type="text" name="name" value={message.name} onChange={(e)=>{setName(e.target.value)}} />
//         </label>
//         <label>
//           Age:
//           <input type="text" name="age" value={message.age} onChange={(e)=>{setAge(e.target.value)}} />
//         </label>
//         <label>
//           salary:
//           <input type="text" name="salary" value={message.salary} onChange={(e)=>{setSalary(e.target.value)}} />
//         </label>
//         <label>
//           Department:
//           <input
//             type="text"
//             name="department"
//             value={message.department}
//             onChange={(e)=>{setDepartment(e.target.value)}}
//           />
//         </label>
//         <label>
//           Doj:
//           <input type="text" name="doj" value={message.doj} onChange={(e)=>{setDoj(e.target.value)}} />
//         </label>

//       <br />
//         <button type="submit">Insert</button>
//         </form>
//     </div>
//   );
// };

// export default Insert;
