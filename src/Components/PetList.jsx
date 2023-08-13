import React, { useEffect } from "react";
import { useState } from "react";





export const PetList = () => {
  const [pet, setPet] = useState([]);

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
  console.log(pet)

  return (
    <aside className="pets-list">
      <p>No pets listed for this employee.</p>
    </aside>
  );
};

export default PetList;
