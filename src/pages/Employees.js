import '../index.css';
import Employee from '../components/Employee';
import { useState } from 'react';
import AddEmployee from '../components/AddEmployee';
import {v4 as uuidv4} from 'uuid';
import EditEmployee from '../components/EditEmployee';

function Employees() {
  const [employees, setEmployees] = useState(
    [
      {
        id: 1,
        name: "Jon",
        role: "Developer",
        img: "https://images.pexels.com/photos/4571943/pexels-photo-4571943.jpeg"
      },
      {
        id: 2,
        name: "Sal",
        role: "Manager",
        img: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg"
      },
      {
        id: 3,
        name: "John",
        role: "Director of Eng.",
        img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg"
      },
      {
        id: 4,
        name: "Melanie",
        role: "Software Engingeer",
        img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg"
      },
      {
        id: 5,
        name: "Corey",
        role: "The Devops Guy",
        img: "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg"
      },
      {
        id: 6,
        name: "Jake",
        role: "Senior Intern",
        img: "https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg"
      }
    ]
  );

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole }
      }

      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img){
    const newEmployee = {
      id: uuidv4(),
      name: name, 
      role: role,
      img: img
    }
    setEmployees([...employees, newEmployee])
  }

  const showEmployees = true;
  return (
    <div className="">
      {showEmployees ?
        <>
          <div className='flex flex-wrap justify-center'>
            {employees.map((employee) => {
              const editEmployee = (
              <EditEmployee
                id={employee.id}
                name={employee.name}
                role={employee.role}
                updateEmployee={updateEmployee}
              />
              );
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />

        </>
        :
        <p>You cannot see the employees</p>
      }
    </div>
  );
}

export default Employees;