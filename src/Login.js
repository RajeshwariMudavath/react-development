import {
    Paper,
    Box,
    Grid,
    Card,
    TextField,
    Typography,
    FormControlLabel,
    Checkbox,
    Item,
    CardContent,Button
    } from "@mui/material";
import { useState } from 'react';
function RegistrationForm() {
 const[registraion,setRegistration]=useState({
      name:"",
      email:"",
      password:"",
      conformPassword:""
    })

    const handleChange = (e) => {
      setRegistration({...registraion,
        [e.target.name]:e.target.value})
    }
    const HandleSubmit = (e) => {
      e.preventDefault()
      if(registraion.password==registraion.conformPassword){
        alert('submitt successfully')
      }
      else(
        alert('invalid password')
      )
    }
    console.log(registraion)
  return (
    <Grid container
    spacing={0}
    direction={'column'} alignItems="center"
    justifyContent={'center'}>
       <Grid item xs={12}>
       <Card sx={{ width:'50%'}}>
      <CardContent>
        <form onSubmit={HandleSubmit}>
        <Grid container spacing={3} justifyContent={'center'} direction={'row'} alignItems="center">
      
      <Grid item xs={8}>
        
        <Typography textAlign={'center'}>REGISTRATION</Typography>
        </Grid>
      
      <Grid item xs={8}>
      <TextField
          required
          label="name"
          name="name"
          type="text"
          fullWidth
          value={registraion.name}
          onChange={handleChange}
          
          
        />
        </Grid>
        <Grid item xs={8}>
       <TextField
          required
          label="email"
          name="email"
          type="email"
          fullWidth
          value={registraion.email}
          onChange={handleChange}
         
          
         
        />
        </Grid>
        <Grid item xs={8}>
         <TextField
          required
          label="Password"
          name="password"
          type="password"
          fullWidth
          value={registraion.password}
          onChange={handleChange}
        
        />
        </Grid>
        <Grid item xs={8}>
         <TextField
          required
          label=" conform Password"
          type="password"
          name="conformPassword"
          fullWidth
          value={registraion.conformPassword}
          onChange={handleChange}
          
         
            
        />
        </Grid>
        <Grid item xs={8}
  >
     <FormControlLabel
    control={<Checkbox name="checkedB" color="primary" />}
    label="Remember me"
    
/>
     
      </Grid>
        <Grid item xs={8}>
          <Button variant='contained'fullWidth type="submit">submit</Button>
          </Grid>
        
        </Grid>
    
        </form>
      
      </CardContent>
      
    </Card>
    </Grid>
   
    </Grid>
   
    
   
 
    
    
  );
}
export default RegistrationForm;