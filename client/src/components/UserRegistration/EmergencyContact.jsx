import React from "react";
import { Box, FormGroup, styled, Typography, TextField } from "@mui/material";

const StyledFormGroup = styled(FormGroup)`
  padding: 2% 8%;
`;

const TitleBox = styled(Box)`
  height: 108px;
  background-color: white;
  border-radius: 10px;
`;

const ColoredDiv = styled(Box)`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #ffb686;
  width: 100%;
  height: 28%;
`;

const TitleContainer = styled(Box)`
  border-bottom: 1px solid #c8c8c8;
  margin: 0.5rem;
`;

const Title = styled(Typography)`
  font-size: 2rem;
  color: #4d148c;
  font-weight: 700;
  font-family: "League Spartan", sans-serif;
  padding-left: 2.5rem;
  padding-top: 0.5rem;
`;

const FormContainer = styled(FormGroup)`
  margin-top: 1rem;
  background-color: white;
  border-radius: 10px;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem;
`;

const InputContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 45%;
  justify-content: space-between;
`;

const AddressInputContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`;

const FieldLabel = styled(Typography)`
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-size: 1rem;
`;

const NameInput = styled(TextField)`
  font-family: "Lato", sans-serif;
`;
const ErrorMsgText = styled(Typography)`
  font-size: 7;
  size: 7;
  color: red;
`;

function EmergencyContact({ yupFunctions }) {
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
    <StyledFormGroup>
      <TitleBox>
        <ColoredDiv></ColoredDiv>
        <TitleContainer>
          <Title>Person to contact in case of emergency</Title>
        </TitleContainer>
      </TitleBox>
      <FormContainer>
        <InputContainer>
          <FieldLabel>
            Person Name<sup style={{ color: "red" }}>*</sup>
          </FieldLabel>
          <NameInput
            id='standard-basic'
            variant='standard'
            placeholder='Emergency person name'
            name='EmergencyContactName'
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.EmergencyContactName}
          />
          {touched.EmergencyContactName && errors.EmergencyContactName ? (
            <ErrorMsgText>{errors.EmergencyContactName}</ErrorMsgText>
          ) : null}
        </InputContainer>
        <InputContainer>
          <FieldLabel>
            Relationship<sup style={{ color: "red" }}>*</sup>
          </FieldLabel>
          <NameInput
            id='standard-basic'
            variant='standard'
            placeholder='Relationship with the person'
            name='EmergencyRelationship'
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.EmergencyRelationship}
          />
          {touched.EmergencyRelationship && errors.EmergencyRelationship ? (
            <ErrorMsgText>{errors.EmergencyRelationship}</ErrorMsgText>
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
            placeholder="Person's mobile number"
            name='EmergencyMobileNumber'
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.EmergencyMobileNumber}
          />
          {touched.EmergencyMobileNumber && errors.EmergencyMobileNumber ? (
            <ErrorMsgText>{errors.EmergencyMobileNumber}</ErrorMsgText>
          ) : null}
        </InputContainer>
        <InputContainer>
          <FieldLabel>
            WhatsApp Number<sup style={{ color: "red" }}>*</sup>
          </FieldLabel>
          <NameInput
            id='standard-basic'
            variant='standard'
            placeholder="Person's WhatsApp number"
            name='EmergencyWhatsappNumber'
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.EmergencyWhatsappNumber}
          />
          {touched.EmergencyWhatsappNumber && errors.EmergencyWhatsappNumber ? (
            <ErrorMsgText>{errors.EmergencyWhatsappNumber}</ErrorMsgText>
          ) : null}
        </InputContainer>
      </FormContainer>
      <FormContainer>
        <AddressInputContainer>
          <FieldLabel>
            Emergency Contact Permanent Address{" "}
            <sup style={{ color: "red" }}>*</sup>
          </FieldLabel>
          <NameInput
            id='standard-basic'
            variant='standard'
            placeholder="Person's mobile number"
            name='EmergencyPermanentAddress'
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.EmergencyPermanentAddress}
          />
          {touched.EmergencyPermanentAddress &&
          errors.EmergencyPermanentAddress ? (
            <ErrorMsgText>{errors.EmergencyPermanentAddress}</ErrorMsgText>
          ) : null}
        </AddressInputContainer>
      </FormContainer>
    </StyledFormGroup>
  );
}

export default EmergencyContact;
