import PetList from "./PetList";
import "./Employee.css";

export const Employee = () => {
  // const [newEmployee, setNewEmployee] = useState([])

  // function getNewEmployee(){

  // }

  return (
    <article className="employee">
      <h3>Staff Member Name</h3>
      <h4>Staff Member Title</h4>
      <button>Show Pets</button>
      <PetList />
    </article>
  );
};

export default Employee;
