import React, { useState } from "react";
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
  Typography,
  Alert,
  styled,
  Snackbar,
} from "@mui/material";
import { useFormik } from "formik";
import MailIcon from "@mui/icons-material/Mail";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, NavLink , Link} from "react-router-dom";

import {
  Search as SearchIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Lock as LockIcon,
  Google as GoogleIcon,
} from "@mui/icons-material";
import { SignInSchema } from "../../Yup/SignInValidation";
import { login } from "../../../Redux/Actions/auth";

const DialogTitleStyled = styled(DialogTitle)`
  text-align: center;
  color: #4d148c;
  font-family: "League Spartan", sans-serif;
  font-size: 3rem;
  font-weight: 600;
`;

const DialogContentStyled = styled(DialogContent)`
  margin: 0 2rem 0 2rem;
  overflow: hidden;
`;

const TextBox = styled(Box)`
  width: 470px;
  height: 55px;
  display: flex;
  align-items: center;
  border: 1px solid #ffb686;
  border-radius: 100px;
  box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.15);
  margin-top: 23px;
`;

const IconWrapper = styled(Box)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 35px;
`;

const TextFieldStyled = styled(TextField)`
  margin: 0 14px 0 14px;
  width: 100%;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 2rem;
  border: none;
`;

const PersonIconStyled = styled(PersonIcon)`
  height: 2rem;
  width: 2rem;
  color: #ff6600;
`;

const EmailIconStyled = styled(EmailIcon)`
  height: 2rem;
  width: 2rem;
  color: #ff6600;
`;

const LockIconStyled = styled(LockIcon)`
  height: 2rem;
  width: 2rem;
  color: #ff6600;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const LoginButton = styled(Button)`
  background-color: #4d148c;
  height: 2.5rem;
  width: 13.5rem;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  font-size: 1rem;
  border-radius: 10px;
  &:hover {
    background-color: #4f148e;
  }
  &:active {
    background-color: #ff6600;
  }
`;

const LoginWithGoogleButton = styled(Button)`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-around;
  padding: 0 2rem 0 2rem;
  background-color: #ff6600;
  height: 2.7rem;
  width: 17.5rem;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  font-size: 1rem;
  border-radius: 10px;
  &:hover {
    background-color: #ff5600;
  }
  &:active {
    background-color: #4d148c;
  }
`;

const OrText = styled(Typography)`
  gfont-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  margin-top: 0.5rem;
`;

const SignUpInsteadText = styled(Typography)`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: #606060;
  display: flex;
  margin-top: 2rem;
`;

const SignUpText = styled(Typography)`
  font-weight: 700;
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  color: #ff6600;
  margin-left: 0.2rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #4d148c;
  }
`;

const OwnerSignIn = ({
  signInOpen,
  setSignInOpen,
  setRenderSignIn,
  setRenderSignUp,
  setSignUpOpen,
}) => {
  const handleClose = () => {
    setSignInOpen(false);
  };

  const [signedUp, setSignedUp] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [error, setError] = React.useState(false);
  const [open, setOpen] = useState(false);
  const handleCloseAlert = () => {
    setOpen(false);
    return;
  };

  const result = useSelector((state) => state);
  console.log("this is the result ", result);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValue = {
    email: "",
    password: "",
  };

  const { handleBlur, values, touched, errors, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValue,
      validationSchema: SignInSchema,
      validateOnChange: true,
      onSubmit: async (values) => {
        const { email, password } = values;
          const result = await dispatch(
            login("/loginUser", {
              email: `${values.email}`,
              password: `${values.password}`,
            })
          );
          console.log(result);
        const statusCode = result.status;
        console.log(statusCode);

        // ! result coming from useState
        console.log(result, "after dispatch method");
        if (statusCode === 200) {
          console.log("UserLogin Login Successful");
          // navigate(0);
          setError(false);
          setOpen(true);
          handleClose();
          // navigate("/");
        } else if (statusCode === 404) {
          console.log("Email Not Found");
          setError(true);
          return;
        } else if (statusCode === 403) {
          console.log("Password Does not match");
          setError(true);
        }
      },
    });

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
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
            Email or Password is wrong
          </Typography>
        )}
        <StyledBox>
          <LoginButton onClick={handleSubmit}>Login</LoginButton>
          <OrText>OR</OrText>
          <LoginWithGoogleButton>
            <GoogleIcon />
            <Typography>Login with Google</Typography>
          </LoginWithGoogleButton>
          <SignUpInsteadText>
            Don't have an account?
            <Link to='/ownerSignUp'>
              <SignUpText
                component={"span"}
                variant={"body2"}
              >
                Sign Up
              </SignUpText>
            </Link>
          </SignUpInsteadText>
        </StyledBox>
      </Box>
    </>
  );
};

export default OwnerSignIn;
