import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({employee, pet}) => {

  function matchPets(employee, pets) {
    const matchedPets = pets.filter((pet) => pet.employeeId === employee.id)

    // console.log(matchedPets)

    return (
      <div>
      {matchedPets.map((pet) => {
        return <>{pet.name}</>
      })}
      </div>
    )
  }

  function handleClick(){
      setShowPets(!showPets)

function getFullName (employee){
if (employee.prefix){
  return `${employee.prefix} ${employee.firstName} ${employee.lastName}`
}

if (employee.postfix){
  return `${employee.firstName} ${employee.lastName}, ${employee.postfix} `
} else {
  return `${employee.firstName} ${employee.lastName}`
}
}
  console.log(employee.firstName)
  console.log(employee.prefix)

  return (
    <article className="employee">
      <h3>{getFullName(employee)}</h3>
      <h4>{employee.title}</h4>
    <button onClick={handleClick}>Show Pets</button>
      <PetList matchPets={matchPets} pets={pets} 
      employee={employee}/>
    </article>
  );
};
}

export default Employee;
