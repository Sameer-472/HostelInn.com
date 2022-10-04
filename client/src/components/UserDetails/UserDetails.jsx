import React from 'react';
import { useFormik } from 'formik';
import { SignUpSchema } from '../Yup/RegisterValidation';
import {
  Box,
  Button,
  Input,
  InputLabel,
  FormGroup,
  FormControl,
  Typography,
  TextField,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  styled,
} from '@mui/material';
import {
  Person as PersonIcon,
  Mail as MailIcon,
  Lock as LockIcon,
  Home as HomeIcon,
  Signpost as SignPostIcon,
} from '@mui/icons-material';

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
});

const DoubleBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '1rem',
});

const NameInput = styled(Box)({
  display: 'flex',
  alignItems: 'flex-end',
  width: '100%',
});

const FGroup = styled(FormGroup)({
  display: 'flex',
  alignItems: 'center',
  marginTop: '1rem',
});

const UserRegistration = () => {
  const initialValue = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    houseNumber: '',
    street: '',
  };
  const [signUpValues, setValues] = React.useState(initialValue);
  const { handleBlur, values, touched, errors, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValue,
      validationSchema: SignUpSchema,
      validateOnChange: true,
      onSubmit: (values) => {
        console.log('Hello');
        console.log(values);
      },
    });
  const handleRadioButtons = (e) => (values.gender = e.target.value);

  return (
    <FGroup>
      <StyledBox>
        <DoubleBox>
          <FormControl>
            <NameInput>
              <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                onBlur={handleBlur}
                id='input-with-sx-name'
                label='Enter First Name'
                variant='standard'
                name='firstName'
                onChange={handleChange}
                value={values.firstName}
              />
            </NameInput>
            {touched.firstName && errors.firstName ? (
              <Typography style={{ fontSize: 12, color: 'red' }}>
                {errors.firstName}
              </Typography>
            ) : null}
          </FormControl>
          <FormControl>
            <NameInput>
              <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                onBlur={handleBlur}
                id='input-with-sx-lastname'
                label='Enter Last Name'
                variant='standard'
                name='lastName'
                onChange={handleChange}
                value={values.lastName}
              />
            </NameInput>
            {touched.lastName && errors.lastName ? (
              <Typography style={{ fontSize: 12, color: 'red' }}>
                {errors.lastName}
              </Typography>
            ) : null}
          </FormControl>
        </DoubleBox>
        <FormControl sx={{ marginBottom: '1rem' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '100%' }}>
            <MailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              sx={{ width: '100%' }}
              onBlur={handleBlur}
              id='input-with-sx-email'
              label='Enter Email'
              variant='standard'
              name='email'
              onChange={handleChange}
              value={values.email}
            />
          </Box>
          {touched.email && errors.email ? (
            <Typography style={{ fontSize: 12, color: 'red' }}>
              {errors.email}
            </Typography>
          ) : null}
          {/* {error && (
          <Typography style={{ fontSize: 12, color: 'red' }}>
            Email Already Exist.
          </Typography>
        )} */}
        </FormControl>
        <DoubleBox>
          <FormControl sx={{ m: 0.5, width: '25.5ch' }} variant='standard'>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <LockIcon
                sx={{ color: 'action.active', ml: -0.5, mr: 1, my: 0.5 }}
              />
              <InputLabel
                htmlFor='standard-adornment-password'
                style={{ paddingLeft: 30 }}
              >
                Password
              </InputLabel>
              <Input
                onBlur={handleBlur}
                value={values.password}
                id='standard-adornment-password'
                type={signUpValues.showPassword ? 'text' : 'password'}
                onChange={handleChange}
                name='password'
              />
            </Box>
            {touched.password && errors.password ? (
              <Typography style={{ fontSize: 12, color: 'red' }}>
                {errors.password}
              </Typography>
            ) : null}
          </FormControl>
          <FormControl sx={{ m: 0.5, width: '25.5ch' }} variant='standard'>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <LockIcon
                sx={{ color: 'action.active', ml: -0.5, mr: 1, my: 0.5 }}
              />
              <InputLabel
                htmlFor='standard-adornment-confirmPassword'
                style={{ paddingLeft: 30 }}
              >
                Confirm Password
              </InputLabel>
              <Input
                onBlur={handleBlur}
                value={values.confirmPassword}
                id='standard-adornment-confirmPassword'
                type={signUpValues.showPassword ? 'text' : 'password'}
                onChange={handleChange}
                name='confirmPassword'
              />
            </Box>
            {touched.confirmPassword && errors.confirmPassword ? (
              <Typography style={{ fontSize: 12, color: 'red' }}>
                {errors.confirmPassword}
              </Typography>
            ) : null}
          </FormControl>
        </DoubleBox>
        <FormControl sx={{ marginBottom: '1rem' }}>
          <FormLabel id='demo-row-radio-buttons-group-label'>Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby='demo-row-radio-buttons-group-label'
            name='row-radio-buttons-group'
          >
            <FormControlLabel
              value='male'
              control={<Radio />}
              name='gender'
              label='Male'
              onChange={(e) => handleRadioButtons(e)}
            />
            <FormControlLabel
              value='female'
              control={<Radio />}
              name='gender'
              label='Female'
              onChange={(e) => handleRadioButtons(e)}
            />
            <FormControlLabel
              value='other'
              name='gender'
              control={<Radio />}
              label='Other'
              onChange={(e) => handleRadioButtons(e)}
            />
          </RadioGroup>
          {touched.gender && errors.gender ? (
            <Typography style={{ fontSize: 12, color: 'red' }}>
              {errors.gender}
            </Typography>
          ) : null}
        </FormControl>
        <DoubleBox>
          <FormControl>
            <NameInput>
              <HomeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                onBlur={handleBlur}
                id='input-with-sx-name'
                label='Enter Your House Number'
                variant='standard'
                name='houseNumber'
                onChange={handleChange}
                value={values.houseNumber}
              />
            </NameInput>
            {touched.houseNumber && errors.houseNumber ? (
              <Typography style={{ fontSize: 12, color: 'red' }}>
                {errors.houseNumber}
              </Typography>
            ) : null}
          </FormControl>
          <FormControl>
            <NameInput>
              <SignPostIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                onBlur={handleBlur}
                id='input-with-sx-lastname'
                label='Enter Street'
                variant='standard'
                name='street'
                onChange={handleChange}
                value={values.street}
              />
            </NameInput>
            {touched.street && errors.street ? (
              <Typography style={{ fontSize: 12, color: 'red' }}>
                {errors.street}
              </Typography>
            ) : null}
          </FormControl>
        </DoubleBox>
      </StyledBox>
      <Button onClick={handleSubmit}> Register </Button>
    </FGroup>
  );
};

export default UserRegistration;
