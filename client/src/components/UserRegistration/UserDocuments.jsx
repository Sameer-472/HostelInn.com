import React from 'react';
import {
  Box,
  FormGroup,
  Button,
  styled,
  Typography,
  TextField,
} from '@mui/material';
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
} from './styles';
const UploadButton = styled(Button)`
  background-color: #4d148c;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.8rem;
  width: 25%;
  &:hover {
    background-color: #4d008c;
  }
  @media screen and (max-width: 750px) {
    width: 50%;
    margin-top: 20px;
  }
`;

function UserDocuments({ yupFunctions }) {
  const {
    handleBlur,
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
  } = yupFunctions;
  console.log(values);
  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const targetName = e.target.name;
      handleChange({
        target: {
          name: targetName,
          value: reader.result,
        },
      });
    };
  };
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
              name='profilePicture'
              onBlur={handleBlur}
              onChange={handleUploadImage}
            />
          </UploadButton>
          {touched.profilePicture && errors.profilePicture ? (
            <ErrorMsgText>{errors.profilePicture}</ErrorMsgText>
          ) : null}
        </InputContainer>
        {values.profilePicture ? (
          <img
            src={values.profilePicture}
            height={112}
            width={112}
            alt='Profile Preview'
          />
        ) : (
          <img src={require('./Assets/profile.png')} alt='Profile Preview' />
        )}
      </FormContainer>
      <FormContainer>
        <InputContainer>
          <FieldLabel>
            Upload a front picture of your CNIC
            <sup style={{ color: 'red' }}>*</sup>
          </FieldLabel>
          <UploadButton variant='contained' component='label'>
            Upload File
            <input
              type='file'
              hidden
              name='cnicFrontPicture'
              onBlur={handleBlur}
              onChange={handleUploadImage}
            />
          </UploadButton>
          {touched.cnicFrontPicture && errors.cnicFrontPicture ? (
            <ErrorMsgText>{errors.cnicFrontPicture}</ErrorMsgText>
          ) : null}
        </InputContainer>
        {values.cnicFrontPicture ? (
          <img
            src={values.cnicFrontPicture}
            height={112}
            width={169}
            alt='Profile Preview'
          />
        ) : (
          <img src={require('./Assets/cnicFront.png')} alt='Profile Preview' />
        )}
      </FormContainer>
      <FormContainer>
        <InputContainer>
          <FieldLabel>
            Upload a back picture of your CNIC
            <sup style={{ color: 'red' }}>*</sup>
          </FieldLabel>
          <UploadButton variant='contained' component='label'>
            Upload File
            <input
              type='file'
              hidden
              name='cnicBackPicture'
              onBlur={handleBlur}
              onChange={handleUploadImage}
            />
          </UploadButton>
          {touched.cnicBackPicture && errors.cnicBackPicture ? (
            <ErrorMsgText>{errors.cnicBackPicture}</ErrorMsgText>
          ) : null}
        </InputContainer>
        {values.cnicBackPicture ? (
          <img
            src={values.cnicBackPicture}
            height={112}
            width={169}
            alt='Profile Preview'
          />
        ) : (
          <img src={require('./Assets/cnicBack.png')} alt='Profile Preview' />
        )}
      </FormContainer>
    </StyledFormGroup>
  );
}

export default UserDocuments;
