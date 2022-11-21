import React from "react";
import "../../App.css";
import { orange } from "@mui/material/colors";
// const orangeColor = orange["500"];
import {
  Box,
  FormGroup,
  styled,
  Typography,
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import {
  StyledFormGroup,
  TitleBox,
  TitleContainer,
  ColoredDiv,
  Title,
  FormContainer,
  InputContainer,
  AddressInputContainer,
  FieldLabel,
  NameInput,
  ErrorMsgText,
} from "./styles";

function UserPersonalInfo({ yupFunctions }) {
  const {
    handleBlur,
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
  } = yupFunctions;
  console.log(values);

  return (
    <Box style={{ backgroundColor: "#fed8bf" }}>
      <StyledFormGroup>
        <TitleBox>
          <ColoredDiv></ColoredDiv>

          <TitleContainer>
            <Title>Personal Information</Title>
          </TitleContainer>
        </TitleBox>

        <FormContainer>
          <InputContainer>
            <FieldLabel>
              First Name<sup style={{ color: "red" }}>*</sup>
            </FieldLabel>
            <NameInput
              id='standard-basic'
              variant='standard'
              placeholder='Enter First name'
              name='firstName'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName}
            />
            {touched.firstName && errors.firstName ? (
              <ErrorMsgText>{errors.firstName}</ErrorMsgText>
            ) : null}
          </InputContainer>

          <InputContainer>
            <FieldLabel>
              Last Name<sup style={{ color: "red" }}>*</sup>
            </FieldLabel>
            <NameInput
              id='standard-basic'
              variant='standard'
              placeholder='Enter Last Name'
              name='lastName'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
            />
            {touched.lastName && errors.lastName ? (
              <ErrorMsgText>{errors.lastName}</ErrorMsgText>
            ) : null}
          </InputContainer>
        </FormContainer>
        <FormContainer>
          <AddressInputContainer>
            <FieldLabel>
              Parents / Guardian Full Name <sup style={{ color: "red" }}>*</sup>
            </FieldLabel>
            <NameInput
              id='standard-basic'
              variant='standard'
              placeholder='Enter Parents / Guardian Full Name'
              name='guardianFullName'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.guardianFullName}
            />
            {touched.guardianFullName && errors.guardianFullName ? (
              <ErrorMsgText>{errors.guardianFullName}</ErrorMsgText>
            ) : null}
          </AddressInputContainer>
        </FormContainer>
        <FormContainer>
          <InputContainer>
            <FieldLabel>
              Parent or Guardian CNIC<sup style={{ color: "red" }}>*</sup>
            </FieldLabel>
            <NameInput
              id='standard-basic'
              variant='standard'
              placeholder='Enter Parent or Guardian CNIC'
              name='guardianCNIC'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.guardianCNIC}
            />
            {touched.guardianCNIC && errors.guardianCNIC ? (
              <ErrorMsgText>{errors.guardianCNIC}</ErrorMsgText>
            ) : null}
          </InputContainer>
          <InputContainer>
            <FieldLabel>
              Phone Number (Parent or Guardian ){" "}
              <sup style={{ color: "red" }}>*</sup>
            </FieldLabel>
            <NameInput
              id='standard-basic'
              variant='standard'
              placeholder='Enter Phone Number (Parent or Guardian)'
              name='guardianPhoneNumber'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.guardianPhoneNumber}
            />
            {touched.guardianPhoneNumber && errors.guardianPhoneNumber ? (
              <ErrorMsgText>{errors.guardianPhoneNumber}</ErrorMsgText>
            ) : null}
          </InputContainer>
        </FormContainer>
        <FormContainer>
          <AddressInputContainer>
            <FieldLabel>
              Email Address <sup style={{ color: "red" }}>*</sup>
            </FieldLabel>
            <NameInput
              id='standard-basic'
              variant='standard'
              placeholder='Enter your Email address'
              name='email'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
            />
            {touched.email && errors.email ? (
              <ErrorMsgText>{errors.email}</ErrorMsgText>
            ) : null}
          </AddressInputContainer>
        </FormContainer>
        <FormContainer>
          <InputContainer>
            <FieldLabel>
              CNIC<sup style={{ color: "red" }}>*</sup>
            </FieldLabel>
            <NameInput
              id='standard-basic'
              variant='standard'
              placeholder='Enter your CNIC'
              name='cnic'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.cnic}
            />
            {touched.cnic && errors.cnic ? (
              <ErrorMsgText>{errors.cnic}</ErrorMsgText>
            ) : null}
          </InputContainer>
          <InputContainer>
            <FieldLabel>
              Nationality
              <sup style={{ color: "red" }}>*</sup>
            </FieldLabel>
            <NameInput
              id='standard-basic'
              variant='standard'
              placeholder='Enter Phone Number (Parent or Guardian )'
              name='nationality'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.nationality}
            />
            {touched.nationality && errors.nationality ? (
              <ErrorMsgText>{errors.nationality}</ErrorMsgText>
            ) : null}
          </InputContainer>
        </FormContainer>
        <FormContainer>
          <AddressInputContainer>
            <FieldLabel>
              University/ Institute Name <sup style={{ color: "red" }}>*</sup>
            </FieldLabel>
            <NameInput
              id='standard-basic'
              variant='standard'
              placeholder='Enter your University/ Institute Name'
              name='university'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.university}
            />
            {touched.university && errors.university ? (
              <ErrorMsgText>{errors.university}</ErrorMsgText>
            ) : null}
          </AddressInputContainer>
        </FormContainer>
        <FormContainer>
          <InputContainer>
            <FieldLabel>
              Programme<sup style={{ color: "red" }}>*</sup>
            </FieldLabel>
            <NameInput
              id='standard-basic'
              variant='standard'
              placeholder='Enter your CNIC'
              name='programme'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.programme}
            />
            {touched.programme && errors.programme ? (
              <ErrorMsgText>{errors.programme}</ErrorMsgText>
            ) : null}
          </InputContainer>
          <InputContainer>
            <FieldLabel>
              Date of Birth
              <sup style={{ color: "red" }}>*</sup>
            </FieldLabel>
            <NameInput
              type='date'
              id='standard-basic'
              variant='standard'
              placeholder='Enter your date of birth'
              name='dateOfBirth'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.dateOfBirth}
            />
            {touched.dateOfBirth && errors.dateOfBirth ? (
              <ErrorMsgText>{errors.dateOfBirth}</ErrorMsgText>
            ) : null}
          </InputContainer>
        </FormContainer>
        <FormContainer>
          <InputContainer>
            <FieldLabel>
              Mobile Number<sup style={{ color: "red" }}>*</sup>
            </FieldLabel>
            <NameInput
              id='standard-basic'
              variant='standard'
              placeholder='Enter your Mobile Number'
              name='mobileNumber'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.mobileNumber}
            />
            {touched.mobileNumber && errors.mobileNumber ? (
              <ErrorMsgText>{errors.mobileNumber}</ErrorMsgText>
            ) : null}
          </InputContainer>
          <InputContainer>
            <FieldLabel>
              Whatsapp Number
              <sup style={{ color: "red" }}>*</sup>
            </FieldLabel>
            <NameInput
              id='standard-basic'
              variant='standard'
              placeholder='Enter your Whatsapp Number'
              name='whatsappNumber'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.whatsappNumber}
            />
            {touched.whatsappNumber && errors.whatsappNumber ? (
              <ErrorMsgText>{errors.whatsappNumber}</ErrorMsgText>
            ) : null}
          </InputContainer>
        </FormContainer>
        <FormContainer>
          <AddressInputContainer>
            <FieldLabel>
              Permanent Address <sup style={{ color: "red" }}>*</sup>
            </FieldLabel>
            <NameInput
              id='standard-basic'
              variant='standard'
              placeholder='Enter your Permanent Address'
              name='permanentAddress'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.permanentAddress}
            />
            {touched.permanentAddress && errors.permanentAddress ? (
              <ErrorMsgText>{errors.permanentAddress}</ErrorMsgText>
            ) : null}
          </AddressInputContainer>
        </FormContainer>
        <FormContainer>
          <InputContainer>
            <FieldLabel>
              Religion <sup style={{ color: "red" }}>*</sup>
            </FieldLabel>
            <NameInput
              id='standard-basic'
              variant='standard'
              placeholder='Enter your religion'
              name='religion'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.religion}
            />
            {touched.religion && errors.religion ? (
              <ErrorMsgText>{errors.religion}</ErrorMsgText>
            ) : null}
          </InputContainer>
          <InputContainer>
            <FieldLabel>
              Gender
              <sup style={{ color: "red" }}>*</sup>
            </FieldLabel>
            <RadioGroup
              row
              aria-labelledby='demo-row-radio-buttons-group-label'
              name='gender'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.gender}
            >
              <FormControlLabel
                value='male'
                control={
                  <Radio
                    sx={{
                      color: "#606060",
                      "&.Mui-checked": {
                        color: orange[500],
                      },
                    }}
                  />
                }
                label='Male'
              />
              <FormControlLabel
                value='female'
                control={
                  <Radio
                    sx={{
                      color: "#606060",
                      "&.Mui-checked": {
                        color: orange[500],
                      },
                    }}
                  />
                }
                label='Female'
              />
              <FormControlLabel
                value='other'
                control={
                  <Radio
                    sx={{
                      color: "#606060",
                      "&.Mui-checked": {
                        color: orange[500],
                      },
                    }}
                  />
                }
                label='Other'
              />
              {touched.gender && errors.gender ? (
                <ErrorMsgText>{errors.gender}</ErrorMsgText>
              ) : null}
            </RadioGroup>
          </InputContainer>
        </FormContainer>
        <FormContainer>
          <InputContainer>
            <FieldLabel>
              Occupation <sup style={{ color: "red" }}>*</sup>
            </FieldLabel>
            <NameInput
              id='standard-basic'
              variant='standard'
              placeholder='Enter your occupation'
              name='occupation'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.occupation}
            />
            {touched.occupation && errors.occupation ? (
              <ErrorMsgText>{errors.occupation}</ErrorMsgText>
            ) : null}
          </InputContainer>
          <InputContainer>
            <FieldLabel>Company Name</FieldLabel>
            <NameInput
              id='standard-basic'
              variant='standard'
              placeholder='Enter your Company name (Optional)'
              name='companyName'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.companyName}
            />
            {touched.companyName && errors.companyName ? (
              <ErrorMsgText>{errors.companyName}</ErrorMsgText>
            ) : null}
          </InputContainer>
        </FormContainer>
        <FormContainer>
          <AddressInputContainer>
            <FieldLabel>
              Criminal Record <sup style={{ color: "red" }}>*</sup>
            </FieldLabel>
            <RadioGroup
              row
              aria-labelledby='demo-row-radio-buttons-group-label'
              name='criminalRecord'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.criminalRecord}
            >
              <FormControlLabel
                value={true}
                control={
                  <Radio
                    sx={{
                      color: "#606060",
                      "&.Mui-checked": {
                        color: orange[500],
                      },
                    }}
                  />
                }
                label='Yes'
              ></FormControlLabel>
              <FormControlLabel
                value={false}
                control={
                  <Radio
                    sx={{
                      color: "#606060",
                      "&.Mui-checked": {
                        color: orange[500],
                      },
                    }}
                  />
                }
                label='No'
              ></FormControlLabel>
              {touched.criminalRecord && errors.criminalRecord ? (
                <ErrorMsgText>{errors.criminalRecord}</ErrorMsgText>
              ) : null}
            </RadioGroup>
          </AddressInputContainer>
        </FormContainer>
        <FormContainer>
          <AddressInputContainer>
            <FieldLabel>
              Accommodation Type <sup style={{ color: "red" }}>*</sup>
            </FieldLabel>
            <RadioGroup
              row
              aria-labelledby='demo-row-radio-buttons-group-label'
              name='accommodationType'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.accommodationType}
            >
              <FormControlLabel
                value='single'
                control={
                  <Radio
                    sx={{
                      color: "#606060",
                      "&.Mui-checked": {
                        color: orange[500],
                      },
                    }}
                  />
                }
                label='Single'
              ></FormControlLabel>
              <FormControlLabel
                value='shared'
                control={
                  <Radio
                    sx={{
                      color: "#606060",
                      "&.Mui-checked": {
                        color: orange[500],
                      },
                    }}
                  />
                }
                label='Shared'
              ></FormControlLabel>
              {touched.accommodationType && errors.accommodationType ? (
                <ErrorMsgText>{errors.accommodationType}</ErrorMsgText>
              ) : null}
            </RadioGroup>
          </AddressInputContainer>
        </FormContainer>
      </StyledFormGroup>
    </Box>
  );
}

export default UserPersonalInfo;
