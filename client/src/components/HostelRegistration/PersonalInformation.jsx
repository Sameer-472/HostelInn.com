import { Box } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { FormContext } from "../../ContextAPI/DataProvider";
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

function PersonalInformation({ yupFunctions }) {
  const { hostelForm, setHostelForm, userForm } = useContext(FormContext);
  const json = JSON.stringify(hostelForm);
  const jsonUser = JSON.stringify(userForm);

  console.log(json);
  const {
    handleBlur,
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
  } = yupFunctions;
  return (
    <>
      <Box style={{ backgroundColor: "#fed8bf" }}>
        <StyledFormGroup>
          <TitleBox>
            <ColoredDiv></ColoredDiv>

            <TitleContainer>
              <Title>Hostel Information</Title>
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
              {/* {touched.firstName && errors.firstName ? (
              <ErrorMsgText>{errors.firstName}</ErrorMsgText>
            ) : null} */}
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
              {/* {touched.lastName && errors.lastName ? (
              <ErrorMsgText>{errors.lastName}</ErrorMsgText>
            ) : null} */}
            </InputContainer>
          </FormContainer>
        </StyledFormGroup>
      </Box>
    </>
  );
}

export default PersonalInformation;
