import styled from "@emotion/styled";

import { Box, Typography, Button } from "@mui/material";

export const AccomodatoionWrapper = styled(Box)`
  max-width: 1000px;
  margin: 0 auto;
  background-color: white;
`;

export const AccomodationContainer = styled(Box)`
  width: 100%;
  padding: 1em 0;
`;

export const AccomodationText = styled(Box)`
  font-size: 32px;
  font-weight: 700;
  line-height: 29.44px;
  font-family: "League Spartan", sans-serif;
  color: #474747;
  padding-left: 0.6em;
`;

export const TableContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const NameStatusWrapper = styled(Box)`
  border-bottom: 1px solid #c8c8c8;
`;

export const NameStatusContainer = styled(Box)`
  width: 50%;
  display: flex;
  justify-content: space-between;
  padding: 0 1em;
`;

export const Line = styled(Box)`
  height: 1px;
`;

export const NameText = styled(Typography)`
  color: #ff6600;
  font-family: "Lato", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
`;

export const StatusText = styled(Typography)`
  font-family: "Lato", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: #ff6600;
`;

export const AccomodationDetailsWrapper = styled(Box)`
  width: 100%;
  border-bottom: 1px solid #c8c8c8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em 0;
  padding: 1em;
  box-sizing: border-box;
`;

export const AccomadationDetailsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 25%;
`;

export const HostelName = styled(Typography)`
  color: #474747;
  font-size: 24px;
  font-weight: bold;
  font-weight: 700;
  font-family: "Lato", sans-serif;
`;

export const HostelAddress = styled(Typography)`
  color: #a2a2a2;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  font-weight: 400;
`;

export const StatusModeContainer = styled(Box)`
  display: flex;
  width: 28%;
`;

export const ActiveText = styled(Typography)`
  font-family: "Lato", sans-serif;
  font-size: 16px;
  color: #474747;
`;

export const ActiveImgBox = styled(Box)`
  margin-left: 0.5em;
`;

export const AccordianBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2em;
  width: 5%;
  height: 36px;
  border-radius: 10px;
  background-color: #4d148c;
  color: white;
  &:hover{
    cursor: pointer;
  }
`;

export const MoreDetailContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2em;
  font-family: "Lato", sans-serif;
  padding-bottom: 2em;
  border-bottom: 1px solid #c8c8c8;
`;

export const DateContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 55%;
  padding: 0 1em;
  color: #474747;
`;

export const DateTitle = styled(Box)`
  font-size: 0.8rem;
`;

export const DateText = styled(Box)`
  font-size: 0.8rem;
`;

export const DateDay = styled(Box)`
  font-size: 0.8rem;
`;

export const RoomContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 55%;
  padding: 0 1em;
  color: #474747;
  margin-top: 1em;
`;

export const RoomTitle = styled(Box)`
  font-size: 0.8rem;
`;

export const RoomText = styled(Box)`
  font-size: 0.8rem;
  margin-right: 4em;
`;

export const PaymentContainer = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  color: #474747;
  margin-top: 1em;
  box-sizing: border-box;
`;
export const PaymentTitle = styled(Box)`
  font-size: 0.8rem;
`;

export const PaymentText = styled(Box)`
  font-size: 0.8rem;
`;

export const PaymentDay = styled(Box)`
  font-size: 0.8rem;
`;

export const PaymentButton = styled(Button)`
  color: white;
  background-color: #d7b4ff;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 31px;
  font-weight: bold;
  font-family: "Inter", sans-serif;
  &:hover {
    background-color: #d7b4ff;
  }
`;

export const CancelAccomodationContainer = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  color: #c8c8c8;
  margin-top: 2em;
  box-sizing: border-box;
`;

export const CancelAccomodationTitle = styled(Box)`
  font-size: 0.8rem;
  color: #474747;
  font-weight: 500;
`;

export const CancelAccomodationButton = styled(Button)`
  width: 10%;
  color: white;
  background-color: #ff0000;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 31px;
  font-family: "Inter", sans-serif;
  &:hover {
    background-color: #ff0000;
  }
`;
