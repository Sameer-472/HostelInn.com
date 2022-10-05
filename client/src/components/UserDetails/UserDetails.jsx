import React from 'react';
import { useFormik } from 'formik';
import { UserDetailsValidation } from '../Yup/UserDetailsValidation';
import {
  Box,
  Button,
  FormGroup,
  FormControl,
  Typography,
  TextField,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  styled,
  Autocomplete,
} from '@mui/material';
import {
  Person as PersonIcon,
  Mail as MailIcon,
  LocationOn as LocationOnIcon,
  Home as HomeIcon,
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

const provinces = [
  { label: 'Punjab' },
  {
    label: 'Sindh',
  },
  {
    label: 'KPK',
  },
  {
    label: 'Balochistan',
  },
  {
    label: 'Gilgit Baltistan',
  },
  {
    label: 'Azad Kashmir',
  },
  {
    label: 'Islamabad Capital Territory',
  },
];

const UserRegistration = () => {
  const initialValue = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    houseNumber: '',
    street: '',
    area: '',
    province: '',
  };
  const {
    handleBlur,
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValue,
    validationSchema: UserDetailsValidation,
    validateOnChange: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const handleRadioButtons = (e) => (values.gender = e.target.value);
  const selectProvince = (e, value) => {
    setFieldValue('province', value !== null ? value.label : values.province);
  };

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
                label='First Name'
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
                label='Last Name'
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
              label='Email'
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
        </FormControl>
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
                label='House Number'
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
              <LocationOnIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                onBlur={handleBlur}
                id='input-with-sx-lastname'
                label='Street'
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
        <FormControl sx={{ marginBottom: '2rem' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '100%' }}>
            <LocationOnIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              sx={{ width: '100%' }}
              onBlur={handleBlur}
              id='input-with-sx-email'
              label='Area'
              variant='standard'
              name='area'
              onChange={handleChange}
              value={values.area}
            />
          </Box>
          {touched.area && errors.area ? (
            <Typography style={{ fontSize: 12, color: 'red' }}>
              {errors.area}
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
                label='City'
                variant='standard'
                name='city'
                onChange={handleChange}
                value={values.city}
              />
            </NameInput>
            {touched.city && errors.city ? (
              <Typography style={{ fontSize: 12, color: 'red' }}>
                {errors.city}
              </Typography>
            ) : null}
          </FormControl>
          <FormControl>
            <Autocomplete
              disablePortal
              id='combo-box-demo'
              name='province'
              options={provinces}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label='Province' />
              )}
              onChange={selectProvince}
            />
          </FormControl>
        </DoubleBox>
      </StyledBox>
      <Button onClick={handleSubmit}> Register </Button>
    </FGroup>
  );
};

export default UserRegistration;
