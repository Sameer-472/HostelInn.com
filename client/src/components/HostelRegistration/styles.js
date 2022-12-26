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

export const Container = styled(Box)`
  /* text-align: center; */
  background-color: #fed8bf;
`;
export const TitleHeader = styled(Typography)`
  padding-top: 40px;
  padding-bottom: 40px;
  color: #4d148c;
  font-weight: 600;
  font-size: 22px;
  font-family: "League Spartan", sans-serif;
`;
export const StyledFormGroup = styled(FormGroup)`
  padding: 2% 8%;
`;

export const TitleBox = styled(Box)`
  height: 108px;
  background-color: white;
  border-radius: 10px;
`;

export const ColoredDiv = styled(Box)`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #ffb686;
  width: 100%;
  height: 28%;
`;

export const TitleContainer = styled(Box)`
  border-bottom: 1px solid #c8c8c8;
  margin: 0.5rem;
`;

export const Title = styled(Typography)`
  font-size: 2rem;
  color: #4d148c;
  font-weight: 700;
  font-family: "League Spartan", sans-serif;
  padding-left: 2.5rem;
  padding-top: 0.5rem;
  @media screen and (max-width: 750px) {
    font-size: 1.5rem;
    text-align: center;
    padding: 0px;
  }
`;

export const FormContainer = styled(FormGroup)`
  margin-top: 1rem;
  background-color: white;
  border-radius: 10px;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem;
  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;

export const InputContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 45%;
  justify-content: space-between;
  @media screen and (max-width: 750px) {
    width: 90%;
    padding-bottom: 20px;
  }
`;

export const AddressInputContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`;

export const FieldLabel = styled(Typography)`
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-size: 1rem;
`;

export const NameInput = styled(TextField)`
  font-family: "Lato", sans-serif;
  /* @media screen and (max-width: 750px) {
    width: 270px;
  } */
`;
export const ErrorMsgText = styled(Typography)`
  font-size: 12;
  color: red;
`;
