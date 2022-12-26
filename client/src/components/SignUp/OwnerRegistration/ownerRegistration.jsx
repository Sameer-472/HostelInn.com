import React from "react";
import {
  Dialog,
  DialogContent,
  DialogBox,
  DialogTitle,
  DialogActions,
  DialogContentText,
  Button,
  TextField,
  Box,
  InputBase,
  Typography,
  Alert,
  styled,
} from "@mui/material";
import { useFormik } from "formik";
import { SignUpSchema } from "../../Yup/RegisterValidation";
import MailIcon from "@mui/icons-material/Mail";
import { useSelector, useDispatch } from "react-redux";
import { register } from '../../../Redux/Actions/auth';
// import { register } from "../../../Redux/Actions/auth";

import {
  Search as SearchIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Lock as LockIcon,
  Google as GoogleIcon,
} from "@mui/icons-material";

import {
  DialogTitleStyled,
  DialogContentStyled,
  TextBox,
  IconWrapper,
  TextFieldStyled,
  PersonIconStyled,
  EmailIconStyled,
  LockIconStyled,
  StyledBox,
  CreateAccountButton,
  SignUpWithGoogleButton,
  OrText,
  SignInInsteadText,
  SignInText,
} from "./style.js";
import { Link } from "react-router-dom";

const UserSignUp = ({
  signUpOpen,
  setSignUpOpen,
  setRenderSignIn,
  setRenderSignUp,
  setSignInOpen,
}) => {
  const handleClose = () => {
    setSignUpOpen(false);
  };

  const [signedUp, setSignedUp] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [error, setError] = React.useState(false);
  const [email, setEmail] = React.useState(false);

  const result = useSelector((state) => state);
  console.log(result.auth);
  const dispatch = useDispatch();

  const initialValue = {
    name: "",
    email: "",
    password: "",
  };

  const { handleBlur, values, touched, errors, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValue,
      validationSchema: SignUpSchema,
      validateOnChange: true,
      onSubmit: async (values, action) => {
        const { name, email, password } = values;
        const result = await dispatch(
          register("hostelOwner", {
            email: `${email}`,
            name: `${name}`,
            password: `${password}`,
          })
        );
        const statusCode = result.status;
        console.log(statusCode);
        // ? result.user.status
        // : result.user.response.status;
        if (statusCode === 200) {
          // TODO: redirect to home page
          console.log("success");
          // setErrorMsg("");
          setEmail(true);
          setError(false);
          // setSignedUp(true);
          // setSignUpOpen(false);
        } else if (statusCode === 403) {
          // setErrorMsg("");
          setError(true);
          setEmail(false);
          // setErrorMsg("Email already exists");
          return;
        } else {
          // setError(true);
          setErrorMsg("Something went wrong");
          return;
        }
      },
    });
  console.log(values.name);

  return (
    <>
      <Box sx={{display: 'flex' , justifyContent: 'center' , flexDirection: 'column' , alignItems: 'center'}}>
        <TextBox>
          <IconWrapper>
            <PersonIconStyled />
          </IconWrapper>
          <TextFieldStyled
            variant="standard"
            placeholder="Username"
            InputProps={{ disableUnderline: true }}
            type="text"
            name="name"
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
          />
          {touched.name && errors.name ? (
            <Typography style={{ fontSize: 12, color: "red" }}>
              {errors.name}
            </Typography>
          ) : null}
        </TextBox>
        <TextBox>
          <IconWrapper>
            <EmailIconStyled />
          </IconWrapper>
          <TextFieldStyled
            variant="standard"
            placeholder="Email"
            InputProps={{ disableUnderline: true }}
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
          />
          {touched.email && errors.email ? (
            <Typography style={{ fontSize: 12, color: "red" }}>
              {errors.email}
            </Typography>
          ) : null}
        </TextBox>
        <TextBox>
          <IconWrapper>
            <LockIconStyled />
          </IconWrapper>
          <TextFieldStyled
            variant="standard"
            placeholder="Password"
            InputProps={{ disableUnderline: true }}
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
          />
          {touched.password && errors.password ? (
            <Typography style={{ fontSize: 12, color: "red" }}>
              {errors.password}
            </Typography>
          ) : null}
        </TextBox>
        {error && (
          <Typography style={{ fontSize: 12, marginLeft: 30, color: "red" }}>
            Email Already exist please try different one/
          </Typography>
        )}
        {email && (
          <Typography style={{ fontSize: 12, marginLeft: 30, color: "red" }}>
            Email verification has been sent. Please verify.
          </Typography>
        )}
        <StyledBox>
          <CreateAccountButton onClick={handleSubmit}>
            Create Account
          </CreateAccountButton>
          <OrText>OR</OrText>
          <SignUpWithGoogleButton>
            <GoogleIcon />
            <Typography>Sign Up with Google</Typography>
          </SignUpWithGoogleButton>
          <SignInInsteadText>
            Already have an account?
            <Link to='/OwnerSignIn'>
            <SignInText
              component={"span"}
              variant={"body2"}
            >
              Sign In
            </SignInText>
            </Link>
          </SignInInsteadText>
        </StyledBox>
      </Box>
    </>
  );
};

export default UserSignUp;


// import React from "react";
// import {
//   FormGroup,
//   FormControl,
//   Button,
//   IconButton,
//   InputLabel,
//   TextField,
//   Input,
//   styled,
//   Box,
//   Typography,
// } from "@mui/material";
// import PersonIcon from "@mui/icons-material/Person";
// import { useState } from "react";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import InputAdornment from "@mui/material/InputAdornment";
// import LockIcon from "@mui/icons-material/Lock";
// import { useFormik } from "formik";
// import { SignUpSchema } from "../Yup/RegisterValidation";
// import MailIcon from "@mui/icons-material/Mail";
// import { useSelector, useDispatch } from "react-redux";
// import { register } from "../../Redux/Actions/auth";

// const FGroup = styled(FormGroup)`
//   display: flex;
//   justify-content: center;
//   flex-direction: center;
//   align-items: center;
// `;
// function Registration() {
//   const [error, setError] = useState(false);

//   const result = useSelector((state) => state);

//   const dispatch = useDispatch();

//   // useEffect(() => {
//   //   dispatch()
//   // }, [])

//   const initialValue = {
//     name: "",
//     email: "",
//     password: "",
//     showPassword: false,
//     confirmPassword: "",
//   };
//   const [signUpValues, setValues] = useState(initialValue);
//   const { handleBlur, values, touched, errors, handleChange, handleSubmit } =
//     useFormik({
//       initialValues: initialValue,
//       validationSchema: SignUpSchema,
//       validateOnChange: true,
//       onSubmit: (values, action) => {
//         const { name, password, email } = values;
//         dispatch(
//           register("hostelOwner", {
//             email: `${email}`,
//             name: `${name}`,
//             password: `${password}`,
//           })
//         );
//         console.log(result);
//         // ! Status Codes
//         // 200 User added Successful 
//         //201 user already exist

//         // result.user.status === 200 ? action.resetForm() : setError(true);
//         const statusCode=result.user.status;
//         if(statusCode===400){
//           console.log('code 400')
//           return;
//         }
//         else if( statusCode === 200){
//           action.resetForm();
//           setError(false)
//           return;
//         }
//         else if(statusCode===201){
//           setError(true);
//           console.log('error has occured');
//           return;
//         }
//       },
//     });

//   const handleClickShowPassword = () => {
//     setValues({
//       ...signUpValues,
//       showPassword: !signUpValues.showPassword,
//     });
//   };

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <FGroup>
//       <FormControl>
//         <Box sx={{ display: "flex", alignItems: "flex-end" }}>
//           <PersonIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
//           <TextField
//             onBlur={handleBlur}
//             id="input-with-sx-name"
//             label="Enter Name"
//             variant="standard"
//             name="name"
//             onChange={handleChange}
//             value={values.name}
//           />
//         </Box>
//         {touched.name && errors.name ? (
//           <Typography style={{ fontSize: 12, color: "red" }}>
//             {errors.name}
//           </Typography>
//         ) : null}
//       </FormControl>

//       <FormControl>
//         <Box sx={{ display: "flex", alignItems: "flex-end" }}>
//           <MailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
//           <TextField
//             onBlur={handleBlur}
//             id="input-with-sx-email"
//             label="Enter Email"
//             variant="standard"
//             name="email"
//             onChange={handleChange}
//             value={values.email}
//           />
//         </Box>
//         {touched.email && errors.email ? (
//           <Typography style={{ fontSize: 12, color: "red" }}>
//             {errors.email}
//           </Typography>
//         ) : null}
//         {error && (
//           <Typography style={{ fontSize: 12, color: "red" }}>
//             Email Already Exist.
//           </Typography>
//         )}
//       </FormControl>

//       <FormControl sx={{ m: 0.5, width: "25.5ch" }} variant="standard">
//         <Box sx={{ display: "flex", alignItems: "flex-end" }}>
//           <LockIcon sx={{ color: "action.active", ml: -0.5, mr: 1, my: 0.5 }} />
//           <InputLabel
//             htmlFor="standard-adornment-password"
//             style={{ paddingLeft: 30 }}
//           >
//             Password
//           </InputLabel>
//           <Input
//             onBlur={handleBlur}
//             value={values.password}
//             id="standard-adornment-password"
//             type={signUpValues.showPassword ? "text" : "password"}
//             onChange={handleChange}
//             name="password"
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                 >
//                   {signUpValues.showPassword ? (
//                     <VisibilityOff />
//                   ) : (
//                     <Visibility />
//                   )}
//                 </IconButton>
//               </InputAdornment>
//             }
//           />
//         </Box>
//         {touched.password && errors.password ? (
//           <Typography style={{ fontSize: 12, color: "red" }}>
//             {errors.password}
//           </Typography>
//         ) : null}
//       </FormControl>
//       <FormControl sx={{ m: 0.5, width: "25.5ch" }} variant="standard">
//         <Box sx={{ display: "flex", alignItems: "flex-end" }}>
//           <LockIcon sx={{ color: "action.active", ml: -0.5, mr: 1, my: 0.5 }} />
//           <InputLabel
//             htmlFor="standard-adornment-confirmPassword"
//             style={{ paddingLeft: 30 }}
//           >
//             Confirm Password
//           </InputLabel>
//           <Input
//             onBlur={handleBlur}
//             value={values.confirmPassword}
//             id="standard-adornment-confirmPassword"
//             type={signUpValues.showPassword ? "text" : "password"}
//             onChange={handleChange}
//             name="confirmPassword"
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                 >
//                   {signUpValues.showPassword ? (
//                     <VisibilityOff />
//                   ) : (
//                     <Visibility />
//                   )}
//                 </IconButton>
//               </InputAdornment>
//             }
//           />
//         </Box>
//         {touched.confirmPassword && errors.confirmPassword ? (
//           <Typography style={{ fontSize: 12, color: "red" }}>
//             {errors.confirmPassword}
//           </Typography>
//         ) : null}
//       </FormControl>
//       <Button onClick={handleSubmit}> Register </Button>
//     </FGroup>
//   );
// }

// export default Registration;
