import React from 'react';
import { useSelector } from 'react-redux';

const EmployeeTable = () => {
  const employees = useSelector((state) => state.employees);
   console.log(employees)
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={index}>
            <td>{employee.name}</td>
            <td>{employee.positions}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
