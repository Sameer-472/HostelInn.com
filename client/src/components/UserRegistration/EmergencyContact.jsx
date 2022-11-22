import React from "react";
import { Box, FormGroup, styled, Typography, TextField } from "@mui/material";

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
