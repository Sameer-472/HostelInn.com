import React,{useState} from 'react'
import {Box,TextField, FormControl,FormGroup} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';




function Login() {
    const initialValues={
        email:'',
        password:'',
    }

    const [values,setValues]=useState(initialValues)
    
    const handleChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value});
        console.log(values);
    }
    return (
    <FormGroup>
        <FormControl>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <MailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Enter Email" variant="standard" name='email' onChange={(e)=>handleChange(e)} value={values.email} />
            </Box>
            
        </FormControl>
        <FormControl>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField type='password' id="input-with-sx" label="Enter Password" variant="standard" name='password' onChange={(e)=>handleChange(e)} value={values.password} />
            </Box>
            
        </FormControl>
        
    </FormGroup>
  )
}

export default Login
