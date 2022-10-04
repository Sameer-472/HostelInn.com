import React,{useState } from 'react'
import {Box,TextField, FormControl,FormGroup,Button,Typography} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import {useSelector , useDispatch} from 'react-redux';
import { login } from '../../Redux/Actions/auth';
import { useNavigate,NavLink } from 'react-router-dom';




function Login() {
    const [error,setError]=useState(false);
    const result = useSelector(state=> state);
    console.log(result , "result before dispatch")
    const dispatch = useDispatch();

    // useEffect(() => {
    //     try {
    //         if(result.user === null){
    //             console.log("user if null")
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }      
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

    const handleLogin= async () =>{
        //200 Login Successful
        //201 Email Not Found
        //202 Password Does not match
        
        const result = await dispatch(login("/loginUser" , {"email": `${values.email}`, "password": `${values.password}`}));
    
        const statusCode= result.status;
        console.log(statusCode);
        // ! result coming from useState
        console.log(result, "after dispatch method")
        if(statusCode===200){
            console.log('Login Successful');
            setError(false);
            navigate('/home');
        }
        else if(statusCode===403){
            console.log('Email Not Found');
            setError(true);
            return;
        }
        else if(statusCode===403){
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
        <NavLink to='/forget-password'> Forget Password ? </NavLink>

        <Button variant='contained' onClick={handleLogin}>Login</Button>
    </FormGroup>
  )
}

export default Login;
