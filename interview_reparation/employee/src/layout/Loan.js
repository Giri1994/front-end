import axios from "axios";
import React, { useEffect, useState } from "react";
import "./DataTable.css";

const Loan = () => {
const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

    const renderTable = () => {
      return data.map(loan => {
        return (
          <tr>
            <td>{loan.Id}</td>
            <td>{loan.LoanType}</td>
            <td>{loan.Description}</td>
            <td>{loan.Status}</td>
            <td>{loan.amount}</td>
          </tr>
        )
      })
    }

  const fetchData = async () => {
    try {
      const apiResponse = await axios.get("http://localhost:8080/loan/fetchAll");
      setData(apiResponse.data);
//      setFilterdata(apiResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);

    }
  };


  return (
  <div>
      <h1 id="title">API Table</h1>
      <table id="users">
        <thead>
          <tr>
            <th>Id</th>
            <th>LoanType</th>
            <th>Description</th>
            <th>Status</th>
             <th>amount</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
};

//const [data, setData] = useState([])
//
//  useEffect(() => {
//    axios.get(url).then(json => setData(json.data))
//  }, [])
//
//  const renderTable = () => {
//    return data.map(user => {
//      return (
//        <tr>
//          <td>{user.name}</td>
//          <td>{user.email}</td>
//          <td>{user.address.street}</td> //only street name shown, if you need to show complete address then you need to iterate over `user.address` object
//          <td>{user.company.name}</td> //only company name shown, if you need to show complete company name then you need to iterate over `user.name` object
//        </tr>
//      )
//    })
//  }
//
//  return (
//    <div>
//      <h1 id="title">API Table</h1>
//      <table id="users"> //Your Table in post changed to table to make it work
//        <thead>
//          <tr>
//            <th>Name</th>
//            <th>Email</th>
//            <th>Address</th>
//            <th>Company</th>
//          </tr>
//        </thead>
//        <tbody>{renderTable()}</tbody>
//      </table>
//    </div>
//  )
//}

export default Loan;
