import './index.css';
import Employee from './components/Employee';
import {useState} from 'react';

function App() {
  const [role, setRole] = useState('dev');
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

    function updateEmployee(id, newName, newRole){
      const updatedEmployees = employees.map((employee) => {
        if(id == employee.id){
          return {...employee, name: newName, role: newRole}
        }

        return employee;
      });
      setEmployees(updatedEmployees);
    }

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ?
        <>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value)
            }}
          />
          <div className='flex flex-wrap justify-center'>
            {employees.map((employee) => {
              return(
              <Employee 
              key={employee.id}
              id={employee.id}
              name={employee.name} 
              role={employee.role}
              img={employee.img}
              updateEmployee={updateEmployee}
              />
              );
            })}
          </div>
        </>
        :
        <p>You cannot see the employees</p>
      }
    </div>
  );
}

export default App;