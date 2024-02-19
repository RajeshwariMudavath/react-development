import { Label } from "@mui/icons-material"
import { useState } from "react"
import { useDispatch } from 'react-redux';
import addEmployee from "../Actions/EmployeeActions"

const EmployeeForm = () => {
    const dispatch = useDispatch();
    const[employeeForm, setEmployeeForm] =useState(
        {
           name:"" ,
           positions:""
        }
    )
   
    const handleChange = (e) => {
        setEmployeeForm({
          ...employeeForm,
          [e.target.name]: e.target.value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addEmployee(employeeForm));
        setEmployeeForm({
          name: '',
          positions: ''

          // Reset other form fields here
        });
        console.log(employeeForm.name,employeeForm.positions,"position")
      };
    return(
        <form onSubmit={handleSubmit}> 
            <div>
                <label>employeeName : </label>
                <input type="text" value={employeeForm.name} onChange={handleChange} name="name" />  
                <label>Positions : </label>
                <input type="text"  value={employeeForm.positions} onChange={handleChange}  name="positions" />
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default EmployeeForm;