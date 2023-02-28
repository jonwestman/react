import './index.css';
import Employee from './components/Employee';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      {
        name: "Jon", 
        role: "Developer", 
        img: "https://images.pexels.com/photos/4571943/pexels-photo-4571943.jpeg"
      },
      {
        name: "Sal", 
        role: "Manager", 
        img: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg"
      },
      {
        name: "John", 
        role: "Director of Eng.", 
        img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg"
      },
      {
        name: "Melanie", 
        role: "Software Engingeer", 
        img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg"
      },
      {
        name: "Corey", 
        role: "The Devops Guy", 
        img: "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg"
      },
      {
        name: "Jake", 
        role: "Senior Intern", 
        img: "https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg"
      }
    ]
  );

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ?
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value)
            }}
          />
          <div className='flex flex-wrap justify-center'>
            {employees.map((employee) => {
              return(<Employee 
              key={uuidv4()}
              name={employee.name} 
              role={employee.role}
              img={employee.img}
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