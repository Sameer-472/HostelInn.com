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
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
// import purple from "@material-ui/core/colors/purple";

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

function UserPersonalInfo({ yupFunctions }) {
  // ! FUNCTION FOR BOOLEAN
  const theme = {
    overrides: {
      MuiRadio: {
        root: {
          color: "green",
        },
        colorSecondary: {
          "&$checked": {
            color: "green",
          },
        },
      },
    },
  };

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
            />
          </InputContainer>

          <InputContainer>
            <FieldLabel>
              Last Name<sup style={{ color: "red" }}>*</sup>
            </FieldLabel>
            <NameInput
              id='standard-basic'
              variant='standard'
              placeholder='Enter Last Name'
            />
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
            />
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
            />
          </InputContainer>
          <InputContainer>
            <FieldLabel>
              Phone Number (Parent or Guardian ){" "}
              <sup style={{ color: "red" }}>*</sup>
            </FieldLabel>
            <NameInput
              id='standard-basic'
              variant='standard'
              placeholder='Enter Phone Number (Parent or Guardian )'
            />
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
            />
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
            />
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
            />
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
            />
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
            />
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
            />
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
            />
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
            />
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
            />
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
            />
          </InputContainer>
          <InputContainer>
            <FieldLabel>
              Gender
              <sup style={{ color: "red" }}>*</sup>
            </FieldLabel>
            <RadioGroup
              row
              aria-labelledby='demo-row-radio-buttons-group-label'
              name='row-radio-buttons-group'
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
            />
          </InputContainer>
          <InputContainer>
            <FieldLabel>Company Name</FieldLabel>
            <NameInput
              id='standard-basic'
              variant='standard'
              placeholder='Enter your Company name (Optional)'
            />
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
              name='row-radio-buttons-group'
            >
              <FormControlLabel
                value='yes'
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
              >
                Yes
              </FormControlLabel>
              <FormControlLabel
                value='no'
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
              >
                No
              </FormControlLabel>
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
              name='row-radio-buttons-group'
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
            </RadioGroup>
          </AddressInputContainer>
        </FormContainer>
      </StyledFormGroup>
    </Box>
  );
}

export default UserPersonalInfo;
