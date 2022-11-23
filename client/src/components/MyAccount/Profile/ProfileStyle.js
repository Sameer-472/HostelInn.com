import { Box, Button, TextField, Typography, Select } from "@mui/material";
import styled from "@emotion/styled";
import ShapesPng from "./Assets/shapes.png";

export const ProfileBoxWrapper = styled(Box)`
  max-width: 1000px;
  margin: 0 auto;
`;

export const ProfileContainer = styled(Box)`
  position: relative;
  height: 200px;
  width: 100%;
  object-fit: cover;
  background-color: #b7937a;
  margin-bottom: 10em;
  &::before {
    content: "";
    background-image: url(${ShapesPng});
    background-size: cover;
    background-position: cover;
    opacity: 0.7;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 200px;
    filter: grayscale(1);
  }
`;

export const ProfileSectionBox = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  top: 30%;
  z-index: 1000;
`;

export const ProfileImgBox = styled(Box)`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  border: 4px solid #ffb686;
`;

export const ProfileButton = styled(Button)`
  width: 171px;
  height: 32px;
  font-size: 10px;
  text-align: center;
  line-height: 12.1px;
  color: #ffffff;
  background-color: #ff6600;
  border-radius: 5px;
  text-transform: uppercase;
  margin-bottom: 0.5em;
  font-family: "Inter", sans-serif;
  &:hover {
    background-color: #ff6600;
    cursor: pointer;
  }
`;

export const imgStyles = {
  maxWidth: "100%",
  borderRadius: "50%",
  height: "auto",
  objectFit: "cover",
};

export const UpdateFormContainer = styled(Box)`
  width: 85%;
  margin: 0 auto;
`;

export const FirstBoxContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* padding: .5em; */
`;

export const LabelTextField = styled(Typography)`
  font-size: 24px;
  font-weight: 700;
  color: #606060;
  font-family: "Lato", sans-serif;
  margin: 0;
  margin-bottom: 0.5em;
`;

export const InputFieldsBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em 0;
`;

export const EmailFieldBox = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-left: .5em; */
`;

export const UniversityBox = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const EmailInputBox = styled(TextField)`
  width: 100%;
`;

export const UniversityFieldInput = styled(TextField)`
  width: 100%;
`;

export const FirstInputBox = styled(Box)`
  display: Flex;
  justify-content: center;
  flex-direction: column;
  width: 45%;
`;

export const SecondInputBox = styled(Box)`
  display: Flex;
  justify-content: center;
  flex-direction: column;
  width: 45%;
`;

export const FirstNameInputField = styled(TextField)`
  width: 100%;
`;

export const LastNameInputField = styled(TextField)`
  width: 100%;
`;

export const CountrySelectField = styled(Select)`
  width: 100%;
`;

export const GenderSelectBox = styled(Select)`
  width: 100%;
`;

export const ButtonWrapper = styled(Box)`
  width: 100%;
  margin: 2em 0;
  margin-top: 4em;
`;

export const ButtonsContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-left: auto;
`;
export const UpdateButton = styled(Button)`
  width: 200px;
  height: 40px;
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  background-color: #ff6600;
  text-transform: uppercase;
  border-radius: 10px;

  &:hover {
    background-color: #ff6600;
  }
`;

export const CancelButton = styled(Button)`
  width: 200px;
  height: 40px;
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  background-color: #b7b7b7;
  text-transform: uppercase;
  border-radius: 10px;
  &:hover {
    background-color: #b7b7b7;
  }
`;
