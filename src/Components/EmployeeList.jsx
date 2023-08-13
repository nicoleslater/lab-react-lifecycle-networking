import React, { useEffect } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";
import { useState } from "react";




export const EmployeeList = () => {
 
  const [employees, setEmployees] = useState([])

  function getEmployeeList(){
    fetch("https://one0-2-vet-api.onrender.com/api/employees")
    .then ((data) => (data.json()))
    .then((json) => {
      setEmployees(json)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    getEmployeeList()
  }, [])

  console.log(employees)


return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((employee) => {
          return <Employee employee={employee}/>;
        })}
      </section>
    </main>
  );
  }

export default EmployeeList;
