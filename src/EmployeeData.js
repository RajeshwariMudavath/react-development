import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  colors,
  Button,
  Grid,
  TextField,
  Typography,
  CardContent,
  Card


} from "@mui/material";
import { red } from "@mui/material/colors";
import employeeList from "./db.json"
import { useState } from "react";
function EmployeeeData() {
  const [empData, setEmpData] = useState(employeeList.employee)
  const [editingId,setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    "id": "",
    "name": "",
    "email": ""

  })
    
  const handleDelete = (id) => {
    const updatedEmpData = empData.filter((item) => item.id !== id);
    setEmpData(updatedEmpData);
  }
  const HandleSave = () =>{
    if(editingId!==null){
      const update=empData.map((data) =>
      data.id === editingId ? {...data,...formData}: data)
      setEmpData(update)
      setEditingId(null)
      
    
    }
    setFormData({
      id: "",
      name: "",
      email: ""
    });

  }
  const handleEdit = (id) =>{
    const index = empData.findIndex((item) => item.id === id)
    
    if (index !== -1) {
    const employeeToEdit = empData[index] 
    setFormData({ "id":employeeToEdit.id,
    "name": employeeToEdit.name,
    "email": employeeToEdit.email})
    setEditingId(id)
  }
}
 
  console.log(formData)
  const HandleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
   

  }
  const handleSubmit = (e) => {
    e.preventDefault();
   
      setEmpData([...empData, formData]);
    
    
    setFormData({
      id: "",
      name: "",
      email: ""
    });
  }
  console.log(formData)
  return (
    <Grid>


      <Card sx={{ maxWidth: 500, margin: '20px' }}>
        <CardContent sx={{ alignItems: 'center' }}>
          <form onSubmit={handleSubmit}>
            <Grid direction="column"
              justifyContent="center"
              alignItems="center">
              <Typography textAlign={'center'}>EmployeeData</Typography>
              <Grid sx={{ marginBottom: '21px', marginTop: '21px' }}><TextField fullWidth label="EmployeeId" type="text" value={formData.id} name="id" onChange={HandleChange}>emId</TextField></Grid>
              <Grid sx={{ marginBottom: '21px' }}><TextField fullWidth label="EmployeeName" type="text" value={formData.name} name="name" onChange={HandleChange}>empName</TextField></Grid>
              <Grid sx={{ marginBottom: '21px' }}><TextField fullWidth label="EmployeeEmail" type="email" value={formData.email} name="email" onChange={HandleChange}>employeeEmail</TextField></Grid>

              <Button variant="contained" type="submit" sx={{marginRight:"6px"}}>Add</Button>
              <Button variant="contained" onClick={HandleSave}>save</Button>


            </Grid>
          </form>

        </CardContent>
      </Card>



      <Paper sx={{ width: '75%', overflow: 'hidden' }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead >
              <TableRow>
              <TableCell>id</TableCell>
                <TableCell>emid</TableCell>
                <TableCell>name</TableCell>
                <TableCell>email</TableCell>
                <TableCell>Actions</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>

              {empData.map((data,index) => (
                <TableRow key={data.id}>
                   <TableCell>{index}</TableCell>
                  <TableCell>{data.id}</TableCell>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell><Button style={{ backgroundColor: 'green', color: 'white' }} onClick={() => handleEdit(data.id)}>Edit</Button></TableCell>
                  <TableCell> <Button style={{ backgroundColor: 'red', color: 'white' }} onClick={() => handleDelete(data.id)}>Delete</Button></TableCell>

                </TableRow>
              )
              )



              }

            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Grid>
  )
}
export default EmployeeeData;