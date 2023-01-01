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
            <AddressInputContainer>
              <FieldLabel>
                Hostel Name<sup style={{ color: "red" }}>*</sup>
              </FieldLabel>
              <NameInput
                id='standard-basic'
                variant='standard'
                placeholder='Enter Hostel name'
                name='hostelName'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.hostelName}
              />
              {touched.hostelName && errors.hostelName ? (
                <ErrorMsgText>{errors.hostelName}</ErrorMsgText>
              ) : null}
            </AddressInputContainer>
          </FormContainer>
          <FormContainer>
            <AddressInputContainer>
              <FieldLabel>
                Hostel Owner Name<sup style={{ color: "red" }}>*</sup>
              </FieldLabel>
              <NameInput
                id='standard-basic'
                variant='standard'
                placeholder='Enter Hostel Owner name'
                name='hostelOwnerName'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.hostelOwnerName}
              />
              {touched.hostelOwnerName && errors.hostelOwnerName ? (
                <ErrorMsgText>{errors.hostelOwnerName}</ErrorMsgText>
              ) : null}
            </AddressInputContainer>
          </FormContainer>
          <FormContainer>
            <AddressInputContainer>
              <FieldLabel>
                Hostel email address<sup style={{ color: "red" }}>*</sup>
              </FieldLabel>
              <NameInput
                id='standard-basic'
                variant='standard'
                placeholder='Enter Hostel Email Address'
                name='hostelEmailAddress'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.hostelEmailAddress}
              />
              {touched.hostelEmailAddress && errors.hostelEmailAddress ? (
                <ErrorMsgText>{errors.hostelEmailAddress}</ErrorMsgText>
              ) : null}
            </AddressInputContainer>
          </FormContainer>
          <FormContainer>
            <AddressInputContainer>
              <FieldLabel>
                Hostel Location<sup style={{ color: "red" }}>*</sup>
              </FieldLabel>
              <NameInput
                id='standard-basic'
                variant='standard'
                placeholder='Enter Hostel Address'
                name='hostelLocation'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.hostelLocation}
              />
              {touched.hostelLocation && errors.hostelLocation ? (
                <ErrorMsgText>{errors.hostelLocation}</ErrorMsgText>
              ) : null}
            </AddressInputContainer>
          </FormContainer>
          <FormContainer>
            <AddressInputContainer>
              <FieldLabel>
                Hostel Contact Number<sup style={{ color: "red" }}>*</sup>
              </FieldLabel>
              <NameInput
                id='standard-basic'
                variant='standard'
                placeholder='Enter Hostel Contact Number'
                name='hostelContactNumber'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.hostelContactNumber}
              />
              {touched.hostelContactNumber && errors.hostelContactNumber ? (
                <ErrorMsgText>{errors.hostelContactNumber}</ErrorMsgText>
              ) : null}
            </AddressInputContainer>
          </FormContainer>
          <FormContainer>
            <AddressInputContainer>
              <FieldLabel>
                Short Description of Hostel<sup style={{ color: "red" }}>*</sup>
              </FieldLabel>
              <NameInput
                id='standard-basic'
                variant='standard'
                placeholder='Enter Short Description'
                name='shortDescription'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.shortDescription}
              />
              {touched.shortDescription && errors.shortDescription ? (
                <ErrorMsgText>{errors.shortDescription}</ErrorMsgText>
              ) : null}
            </AddressInputContainer>
          </FormContainer>
        </StyledFormGroup>
      </Box>
    </>
  );
}

export default PersonalInformation;
