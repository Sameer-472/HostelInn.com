import React from 'react';
import {
  Box,
  FormGroup,
  Button,
  styled,
  Typography,
  TextField,
} from '@mui/material';

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
  font-family: 'League Spartan', sans-serif;
  padding-left: 2.5rem;
  padding-top: 0.5rem;
`;

const FormContainer = styled(FormGroup)`
  margin-top: 1rem;
  background-color: white;
  border-radius: 10px;
  height: 100px;
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

const FieldLabel = styled(Typography)`
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  font-size: 1rem;
`;

const UploadButton = styled(Button)`
  background-color: #4d148c;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.8rem;
  width: 25%;
  &:hover {
    background-color: #4d008c;
  }
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
            Upload your profile picture <sup style={{ color: 'red' }}>*</sup>
          </FieldLabel>
          <UploadButton variant='contained' component='label'>
            Upload File
            <input
              type='file'
              hidden
              onChange={(e) => console.log(e.target.files[0].name)}
            />
          </UploadButton>
        </InputContainer>
        <img src={require('./Assets/profile.png')} alt='Profile Preview' />
      </FormContainer>
      <FormContainer>
        <InputContainer>
          <FieldLabel>
            Upload a front picture of your CNIC
            <sup style={{ color: 'red' }}>*</sup>
          </FieldLabel>
          <UploadButton variant='contained' component='label'>
            Select File
            <input
              type='file'
              hidden
              onChange={(e) => console.log(e.target.files[0].name)}
            />
          </UploadButton>
        </InputContainer>
        <img src={require('./Assets/cnicFront.png')} alt='Profile Preview' />
      </FormContainer>
      <FormContainer>
        <InputContainer>
          <FieldLabel>
            Upload a back picture of your CNIC
            <sup style={{ color: 'red' }}>*</sup>
          </FieldLabel>
          <UploadButton variant='contained' component="label">
            Select File
            <input
              type='file'
              hidden
              onChange={(e) => console.log(e.target.files[0].name)}
            />
          </UploadButton>
        </InputContainer>
        <img src={require('./Assets/cnicBack.png')} alt='Profile Preview' />
      </FormContainer>
    </StyledFormGroup>
  );
}

export default UserDocuments;
