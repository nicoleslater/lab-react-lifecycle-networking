import React, { useEffect } from "react";






export const PetList = ({pets, employee}) => {

  
  
 
function getPetList(){
    fetch("https://one0-2-vet-api.onrender.com/api/pets")
    .then ((data) => (data.json()))
    .then((json) => {
      setPets(json)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    getPetList()
  }, [])
  // console.log(pet)

  // console.log(pet.employeeId)

  return (
    <aside className="pets-list">
      <p>No pets listed for this employee.</p>
    </aside>
  );
};

export default PetList;
