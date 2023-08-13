import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";
import { useState, useEffect } from "react";

function App () {
  const [pets, setPets] = useState([]);


  function getPetList(){
    fetch("https://one0-2-vet-api.onrender.com/api/pets")
    .then ((data) => (data.json()))
    .then((json) => {
      setPet(json)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    getPetList()
  }, [])
 
  return (
    <>
      <NavBar />
      <EmployeeList pets={pets} />
    </>
  );
};

export default App;
