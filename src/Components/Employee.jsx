import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({employee}) => {

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
      <button>Show Pets</button>
      <PetList />
    </article>
  );
};

export default Employee;
