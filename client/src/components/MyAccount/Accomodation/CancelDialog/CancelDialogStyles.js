import styled from "@emotion/styled";

import { Box, Typography, Button } from "@mui/material";

export const CancelWrapper = styled(Box)`
  width: 500px;
  padding: 2em;
  box-sizing: border-box;
  /* box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.25); */
  border-radius: 35px;
  /* height:469px; */
`;

export const CancelContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
`;

export const CancelImageBox = styled(Box)`
  width: 150px;
`;

export const CancelTitleText = styled(Typography)`
  font-size: 1.7rem;
  color: #4d148c;
  font-family: "League Spartan", sans-serif;
  font-weight: 500;
  margin-top: 0.6em;
`;

export const CancelSubtitleText = styled(Typography)`
  font-weight: 400;
  font-family: "Lato", sans-serif;
  font-size: 0.9rem;
  color:#4D148C;
`;

export const CancelButtonContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 2em auto;
`;

export const CancelButton = styled(Button)`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Inter", sans-serif;
  color: #ffffff;
  font-weight: 600;
  background-color: #ff6600;
  border-radius: 10px;
  &:hover{
    background-color: #ff6600;
  }
`;

export const YesButton = styled(Button)`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Inter", sans-serif;
  color: #ffffff;
  font-weight: 600;
  background-color: #a2a2a2;
  border-radius: 10px;
  &:hover{
    background-color: #a2a2a2;
  }
`;
