import React,{useState} from 'react'
import {Box,TextField, FormControl,FormGroup,Button,Typography} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import {useSelector , useDispatch} from 'react-redux';
import { login } from '../../Redux/Actions/auth';
import { useNavigate } from 'react-router-dom';




function Login() {
    const [error,setError]=useState(false);


    const result = useSelector(state=> state);
    const dispatch = useDispatch();

    // useEffect(() => {
        
    //     // dispatch(login("/loginUser" , {"email": "asheryar123@gmail.com", "password": "abcd123"}));
      
    // }, [])
    
    const initialValues={
        email:'',
        password:'',
    }


    const [values,setValues]=useState(initialValues)
    
    const handleChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value});
        console.log(values);
    }
    const navigate=useNavigate();

    const handleLogin=()=>{
        //200 Login Successful
        //201 Email Not Found
        //202 Password Does not match
        dispatch(login("/loginUser" , {"email": `${values.email}`, "password": `${values.password}`}));
        // ! result coming from useState
        // console.log(result)
        const statusCode=result.user.status;
        if(statusCode===200){
            console.log('Login Successful');
            setError(false);
            navigate('/home');

        }
        else if(statusCode===201){
            console.log('Email Not Found');
            setError(true);
            return;
        }
        else if(statusCode===202){
            console.log('Password Does not match');
                setError(true)
        }
        
        
        
    }

    return (
    <FormGroup>
        <FormControl>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <MailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx-email-login" label="Enter Email" variant="standard" name='email' onChange={(e)=>handleChange(e)} value={values.email} />
            </Box>
            
        </FormControl>
        <FormControl>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField type='password' id="input-with-sx-password" label="Enter Password" variant="standard" name='password' onChange={(e)=>handleChange(e)} value={values.password} />
            </Box>
            {error && (
          <Typography style={{ fontSize: 12, color: "red" }}>
            Email or Password is wrong 
          </Typography>
        )}
        </FormControl>
        <Button variant='contained' onClick={handleLogin}>Login</Button>
    </FormGroup>
  )
}

export default Login;
