import React from "react";
import { profileSetupHostelOwnerValidation } from "../../Yup/ProfileSetupOfHostelOwner";
import { Box, FormControlLabel, RadioGroup, Radio } from "@mui/material";
import { useFormik } from "formik";
import { orange } from "@mui/material/colors";
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
const hostlerProfileSetupValues = {
  fullName: "",

  email: "",
  cnic: "",
  nationality: "",

  permanentAddress: "",
  dateOfBirth: "",
  mobileNumber: "",
  whatsappNumber: "",
  religion: "",
  gender: "",

  profilePicture: "",
  cnicFrontPicture: "",
  cnicBackPicture: "",
};
function ProfileSetup() {
  const { handleBlur, values, touched, errors, handleChange, handleSubmit } =
    useFormik({
      initialValues: hostlerProfileSetupValues,
      validationSchema: profileSetupHostelOwnerValidation,
      validateOnChange: true,
      onSubmit: async (values, action) => {
        const { name, email, password } = values;
        //   const result = await dispatch(
        //     register("user", {
        //       email: `${email}`,
        //       name: `${name}`,
        //       password: `${password}`,
        //     })
        //   );
      },
    });

  return (
    <Box style={{ backgroundColor: "#fed8bf" }}>
      <StyledFormGroup>
        <TitleBox>
          <ColoredDiv></ColoredDiv>

          <TitleContainer>
            <Title>Profile Setup</Title>
          </TitleContainer>
        </TitleBox>
        <FormContainer>
          <InputContainer>
            <FieldLabel>
              Full Name<sup style={{ color: "red" }}>*</sup>
            </FieldLabel>
            <NameInput
              id='standard-basic'
              variant='standard'
              placeholder='Enter First name'
              name='fullName'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.fullName}
            />
            {touched.fullName && errors.fullName ? (
              <ErrorMsgText>{errors.fullName}</ErrorMsgText>
            ) : null}
          </InputContainer>

          <InputContainer>
            <FieldLabel>
              Email<sup style={{ color: "red" }}>*</sup>
            </FieldLabel>
            <NameInput
              id='standard-basic'
              variant='standard'
              placeholder='Enter Email'
              name='email'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
            />
            {touched.email && errors.email ? (
              <ErrorMsgText>{errors.email}</ErrorMsgText>
            ) : null}
          </InputContainer>
        </FormContainer>
        <FormContainer>
          <InputContainer>
            <FieldLabel>
              CNIC<sup style={{ color: "red" }}>*</sup>
            </FieldLabel>
            <NameInput
              id='standard-basic'
              variant='standard'
              placeholder='Enter Valid CNIC'
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
              Nationality<sup style={{ color: "red" }}>*</sup>
            </FieldLabel>
            <NameInput
              id='standard-basic'
              variant='standard'
              placeholder='Enter Nationality'
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
        </FormContainer>
        <FormContainer>
          <AddressInputContainer>
            <FieldLabel>
              Whatsapp Number <sup style={{ color: "red" }}>*</sup>
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
          </AddressInputContainer>
        </FormContainer>
        <FormContainer>
          <InputContainer>
            <FieldLabel>
              Religion
              <sup style={{ color: "red" }}>*</sup>
            </FieldLabel>
            <NameInput
              type='text'
              id='standard-basic'
              variant='standard'
              placeholder='Enter your Religion'
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
      </StyledFormGroup>
    </Box>
  );
}

export default ProfileSetup;
