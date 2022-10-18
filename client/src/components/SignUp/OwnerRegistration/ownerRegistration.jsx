import React from "react";
import {
  FormGroup,
  FormControl,
  Button,
  IconButton,
  InputLabel,
  TextField,
  Input,
  styled,
  Box,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import LockIcon from "@mui/icons-material/Lock";
import { useFormik } from "formik";
import { SignUpSchema } from "../../Yup/SignUpValidation";
import MailIcon from "@mui/icons-material/Mail";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../../Redux/Actions/auth";

const FGroup = styled(FormGroup)`
  display: flex;
  justify-content: center;
  flex-direction: center;
  align-items: center;
`;
function OwnerRegistration() {
  const [error, setError] = useState(false);

  const result = useSelector((state) => state);

  const dispatch = useDispatch();

  const initialValue = {
    name: "",
    email: "",
    password: "",
    showPassword: false,
    confirmPassword: "",
  };
  const [signUpValues, setValues] = useState(initialValue);
  const { handleBlur, values, touched, errors, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValue,
      validationSchema: SignUpSchema,
      validateOnChange: true,
      onSubmit: async(values, action) => {
        const { name, password, email } = values;
      const result = await  dispatch(
          register("hostelOwner", {
            email: `${email}`,
            name: `${name}`,
            password: `${password}`,
          })
        );
        console.log(result);
        // ! Status Codes
        // 200 User added Successful+ 
        //201 user already exist

        // result.user.status === 200 ? action.resetForm() : setError(true);
        const statusCode=result.status;
        if(statusCode===400){
          console.log('code 400')
          return;
        }
        else if( statusCode === 200){
          alert("Please check your eamail address for confirmation.")
          action.resetForm();
          setError(false)
          return;
        }
        else if(statusCode===201){
          setError(true);
          console.log('error has occured');
          return;
        }
      },
    });

  // const handleChange=(e)=>{
  //     setValues({...signUpValues,[e.target.name]:e.target.value});
  //     // const {name,email,password}=signUpValues;
  //     // console.log(name);
  // }

  const handleClickShowPassword = () => {
    setValues({
      ...signUpValues,
      showPassword: !signUpValues.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FGroup>
      <FormControl>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <PersonIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            onBlur={handleBlur}
            id="input-with-sx-name"
            label="Enter Name"
            variant="standard"
            name="name"
            onChange={handleChange}
            value={values.name}
          />
        </Box>
        {touched.name && errors.name ? (
          <Typography style={{ fontSize: 12, color: "red" }}>
            {errors.name}
          </Typography>
        ) : null}
      </FormControl>

      <FormControl>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <MailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            onBlur={handleBlur}
            id="input-with-sx-email"
            label="Enter Email"
            variant="standard"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
        </Box>
        {touched.email && errors.email ? (
          <Typography style={{ fontSize: 12, color: "red" }}>
            {errors.email}
          </Typography>
        ) : null}
        {error && (
          <Typography style={{ fontSize: 12, color: "red" }}>
            Email Already Exist.
          </Typography>
        )}
      </FormControl>

      <FormControl sx={{ m: 0.5, width: "25.5ch" }} variant="standard">
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <LockIcon sx={{ color: "action.active", ml: -0.5, mr: 1, my: 0.5 }} />
          <InputLabel
            htmlFor="standard-adornment-password"
            style={{ paddingLeft: 30 }}
          >
            Password
          </InputLabel>
          <Input
            onBlur={handleBlur}
            value={values.password}
            id="standard-adornment-password"
            type={signUpValues.showPassword ? "text" : "password"}
            onChange={handleChange}
            name="password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {signUpValues.showPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </Box>
        {touched.password && errors.password ? (
          <Typography style={{ fontSize: 12, color: "red" }}>
            {errors.password}
          </Typography>
        ) : null}
      </FormControl>
      <FormControl sx={{ m: 0.5, width: "25.5ch" }} variant="standard">
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <LockIcon sx={{ color: "action.active", ml: -0.5, mr: 1, my: 0.5 }} />
          <InputLabel
            htmlFor="standard-adornment-confirmPassword"
            style={{ paddingLeft: 30 }}
          >
            Confirm Password
          </InputLabel>
          <Input
            onBlur={handleBlur}
            value={values.confirmPassword}
            id="standard-adornment-confirmPassword"
            type={signUpValues.showPassword ? "text" : "password"}
            onChange={handleChange}
            name="confirmPassword"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {signUpValues.showPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </Box>
        {touched.confirmPassword && errors.confirmPassword ? (
          <Typography style={{ fontSize: 12, color: "red" }}>
            {errors.confirmPassword}
          </Typography>
        ) : null}
      </FormControl>
      <Button onClick={handleSubmit}> Register </Button>
    </FGroup>
  );
}

export default OwnerRegistration;
