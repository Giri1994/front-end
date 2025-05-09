import axios from "axios";
import React, { useState } from "react";

const Post = () => {
  const [formData, setFormData] = useState({
    Id: "",
    name: "",
    age: "",
    salary: "",
    department: "",
    date: "1994-02-1",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/insertEmployee",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            // "Acces-Control-Allow-Orgin": "*",
          },
        }
      );
      console.log("Insert response:", response.data);
      // Optionally, clear the form fields after successful submission
      setFormData({
        Id: "",
        name: "",
        age: "",
        salary: "",
        department: "",
        date: "1994-02-1",
      });
      alert("inserted");
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Id:
          <input
            type="text"
            name="Id"
            value={formData.Id}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          age:
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          salary:
          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          department:
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Insert</button>
      </form>
    </div>
  );
};

export default Post;
