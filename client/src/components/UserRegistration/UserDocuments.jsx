import React from 'react';
import { Box, FormGroup, styled, Typography, TextField } from '@mui/material';

const StyledFormGroup = styled(FormGroup)`
  margin: 2% 8%;
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
  font-family: 'League Spartan', sans-serif;
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
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  font-size: 1rem;
`;

const NameInput = styled(TextField)`
  font-family: 'Lato', sans-serif;
`;

function UserDocuments({ yupFunctions }) {
  return (
    <StyledFormGroup>
      <TitleBox>
        <ColoredDiv></ColoredDiv>
        <TitleContainer>
          <Title>Documents</Title>
        </TitleContainer>
      </TitleBox>
      <FormContainer>
        <InputContainer>
          <FieldLabel>
            Person Name<sup style={{ color: 'red' }}>*</sup>
          </FieldLabel>
          <NameInput
            id='standard-basic'
            variant='standard'
            placeholder='Emergency person name'
          />
        </InputContainer>
        <InputContainer>
          <FieldLabel>
            Relationship<sup style={{ color: 'red' }}>*</sup>
          </FieldLabel>
          <NameInput
            id='standard-basic'
            variant='standard'
            placeholder='Relationship with the person'
          />
        </InputContainer>
      </FormContainer>
      <FormContainer>
        <InputContainer>
          <FieldLabel>
            Mobile Number<sup style={{ color: 'red' }}>*</sup>
          </FieldLabel>
          <NameInput
            id='standard-basic'
            variant='standard'
            placeholder="Person's mobile number"
          />
        </InputContainer>
        <InputContainer>
          <FieldLabel>
            WhatsApp Number<sup style={{ color: 'red' }}>*</sup>
          </FieldLabel>
          <NameInput
            id='standard-basic'
            variant='standard'
            placeholder="Person's WhatsApp number"
          />
        </InputContainer>
      </FormContainer>
      <FormContainer>
        <AddressInputContainer>
          <FieldLabel>
            Mobile Number<sup style={{ color: 'red' }}>*</sup>
          </FieldLabel>
          <NameInput
            id='standard-basic'
            variant='standard'
            placeholder="Person's mobile number"
          />
        </AddressInputContainer>
      </FormContainer>
    </StyledFormGroup>
  );
}

export default UserDocuments;
