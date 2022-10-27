import React from 'react';
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
} from '@mui/material';
import { useFormik } from 'formik';
import { SignUpSchema } from '../../Yup/RegisterValidation';
import MailIcon from '@mui/icons-material/Mail';
import { useSelector, useDispatch } from 'react-redux';
// import { register } from '../../../Redux/Actions/auth';
import { register } from '../../../Redux/Actions/auth';

import {
  Search as SearchIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Lock as LockIcon,
  Google as GoogleIcon,
} from '@mui/icons-material';

import {DialogTitleStyled , DialogContentStyled , TextBox , IconWrapper , TextFieldStyled , PersonIconStyled , EmailIconStyled , LockIconStyled , StyledBox , CreateAccountButton , SignUpWithGoogleButton , OrText , SignInInsteadText , SignInText} from './style.js'

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
  const [errorMsg, setErrorMsg] = React.useState('');
  const [error, setError] = React.useState(false);

  const result = useSelector((state) => state);
  console.log(result.auth);
  const dispatch = useDispatch();

  const initialValue = {
    name: '',
    email: '',
    password: '',
  };

  const {
    handleBlur,
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialValue,
    validationSchema: SignUpSchema,
    validateOnChange: true,
    onSubmit: async(values, action) => {
      const { name, email, password } = values;
      const result = await dispatch(
        register('user', {
          email: `${email}`,
          name: `${name}`,
          password: `${password}`,
        })
      );
      const statusCode = result.status
      console.log(statusCode);
        // ? result.user.status
        // : result.user.response.status;
      if (statusCode === 200) {
        // TODO: redirect to home page
        console.log('success');
        setErrorMsg('');
        setError(false);
        setSignedUp(true);
        setSignUpOpen(false);
      } else if (statusCode === 403) {
        setErrorMsg('');
        setError(true);
        setErrorMsg('Email already exists');
        return;
      } else {
        setError(true);
        setErrorMsg('Something went wrong');
        return;
      }
    },
  });

  return (
    <>
      {signedUp ? (
        <Alert variant='outlined' severity='success'>
          User created successfully
        </Alert>
      ) : (
        <>
          <Dialog
            open={signUpOpen}
            onClose={handleClose}
            PaperProps={{
              style: { borderRadius: '35px' },
            }}
          >
            {error && (
              <Alert variant='outlined' severity='error'>
                {errorMsg}
              </Alert>
            )}
            <DialogTitleStyled>Sign Up</DialogTitleStyled>
            <DialogContentStyled>
              <TextBox>
                <IconWrapper>
                  <PersonIconStyled />
                </IconWrapper>
                <TextFieldStyled
                  variant='standard'
                  placeholder='Username'
                  InputProps={{ disableUnderline: true }}
                  type='text'
                  name='name'
                  onChange={handleChange}
                  value={values.name}
                  onBlur={handleBlur}
                />
                {touched.name && errors.name ? (
                  <Typography style={{ fontSize: 12, color: 'red' }}>
                    {errors.name}
                  </Typography>
                ) : null}
              </TextBox>
              <TextBox>
                <IconWrapper>
                  <EmailIconStyled />
                </IconWrapper>
                <TextFieldStyled
                  variant='standard'
                  placeholder='Email'
                  InputProps={{ disableUnderline: true }}
                  type='email'
                  name='email'
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                />
                {touched.email && errors.email ? (
                  <Typography style={{ fontSize: 12, color: 'red' }}>
                    {errors.email}
                  </Typography>
                ) : null}
              </TextBox>
              <TextBox>
                <IconWrapper>
                  <LockIconStyled />
                </IconWrapper>
                <TextFieldStyled
                  variant='standard'
                  placeholder='Password'
                  InputProps={{ disableUnderline: true }}
                  type='password'
                  name='password'
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                />
                {touched.password && errors.password ? (
                  <Typography style={{ fontSize: 12, color: 'red' }}>
                    {errors.password}
                  </Typography>
                ) : null}
              </TextBox>
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
                  <SignInText
                    component={'span'}
                    variant={'body2'}
                    onClick={() => {
                      setSignUpOpen(false);
                      setSignInOpen(true);
                      setRenderSignIn(true);
                      setRenderSignUp(false);
                    }}
                  >
                    Sign In
                  </SignInText>
                </SignInInsteadText>
              </StyledBox>
            </DialogContentStyled>
          </Dialog>
        </>
      )}
    </>
  );
};

export default UserSignUp;
