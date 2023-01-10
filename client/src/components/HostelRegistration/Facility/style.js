// import styled from "@emotion/styled";
import { Box, styled, TextField, Typography, Button } from "@mui/material";
import { Textarea } from "@mui/joy";

export const FacilitesWrapper = styled(Box)`
  max-width: 1100px;
  margin: 2em auto;
`;

export const FacilityContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin: 1em 0;
  border-radius: 10px;
`;

export const FacilityRectangleImageBox = styled(Box)`
  width: 100%;
`;

export const FacilityInformationTextBox = styled(Box)`
  margin: 1em 0;
  margin-left: 1em;
  padding-bottom: 0.5em;
  border-bottom: 1px solid #c8c8c8;
  width: 80%;
`;

export const FacilityInformationText = styled(Typography)`
  font-family: "League Spartan", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const HostelAndNumberOfRoomContainer = styled(Box)`
  width: 80%;
  margin-left: 1em;
  margin-top: 1em;
  margin-bottom: 1em;
`;

export const LabelTextField = styled(Typography)`
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: rgba(57, 57, 57, 1);
`;

export const HostelNameField = styled(TextField)`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  color: #606060;
  width: 90%;
  margin-top: 0.5em;
  font-size: 0.9rem;
`;

export const TypeCheckBoxContainer = styled(Box)`
  margin-left: 1em;
  font-family: "Lato", sans-serif;
`;

export const TypeOfRoomText = styled(Typography)`
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: #393939;
  margin-top: 1em;
  margin-bottom: 0.5em;
  color: rgba(57, 57, 57, 1);
`;

export const PrivateBoxesContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SharedBoxContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PrivateText = styled(Typography)`
  color: rgba(255, 102, 0, 1);
  font-family: "Lato", sans-serif;
  font-weight: 700;
`;
export const ErrorMsgText = styled(Typography)`
  font-size: 12;
  color: red;
`;

export const SharedText = styled(Typography)`
  font-family: "Lato", sans-serif;
  color: rgba(255, 102, 0, 1);
  font-weight: 700;
`;

export const CheckboxContainer = styled(Box)`
  width: 90%;
`;

export const FacilityAvailableText = styled(Typography)`
  font-weight: 500;
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  color: rgba(57, 57, 57, 1);
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

export const FacilityAvailableContainer = styled(Box)`
  width: 90%;
  margin-left: 1em;
  padding: 1em 0;
`;

export const FreeContainer = styled(Box)`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(200, 200, 200, 1);
  padding-bottom: 0.5em;
  width: 100%;
  margin: 1em 0;
`;

export const GeneralContainer = styled(Box)`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(200, 200, 200, 1);
  padding-bottom: 0.5em;
  width: 100%;
  margin: 1em 0;
`;

export const GeneralAvailableBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  margin-left: 0.5em;
`;

export const ServiceContainer = styled(Box)`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(200, 200, 200, 1);
  padding-bottom: 0.5em;
  width: 100%;
  margin: 1em 0;
`;

export const ServiceAvailableBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  margin-left: 0.5em;
`;

export const FreeAvailableBox = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 20%;
  margin-left: 2em;
`;

export const AvailableItemBox = styled(Box)`
  display: flex;
  align-items: center;
  width: 90%;
  background-color: rgba(71, 71, 71, 1);
  color: whitesmoke;
  border-radius: 50px;
  margin: 0 auto;
  justify-content: space-around;
  text-align: center;
  color: rgba(250, 250, 250, 1);
  margin-left: 1em;
  max-height: 30px;
  padding: 0px 5px;
`;

export const AvailableItemBoxText = styled(Typography)`
  text-transform: capitalize;
  font-weight: 500;
  font-size: 0.9rem;
  font-family: "Lato", sans-serif;
  color: rgba(250, 250, 250, 1);
`;

export const FacilityLabelText = styled(Typography)`
  font-family: "Lato", sans-serif;
  color: rgba(255, 102, 0, 1);
  font-weight: 700;
`;

export const PropertyTypeText = styled(Box)`
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: rgba(57, 57, 57, 1);
  margin-top: 0.5em;
`;

export const PrivatePropertyContainer = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 0.5em;
`;

export const RadioContainer = styled(Box)`
  margin-left: 1em;
  font-size: 0.8rem;
  font-family: "Lato", sans-serif;
`;

export const InstitutionContainer = styled(Box)`
  margin-top: 0.5em;
  display: flex;
  align-items: center;
`;

export const PropertyContainer = styled(Box)`
  margin-left: 1em;
  padding: 1em 0;
`;

export const HostelRuleContainer = styled(Box)`
  width: 80%;
  margin-left: 1em;
  margin-top: 1em;
  margin-bottom: 1em;
  border-bottom: 1px solid rgba(200, 200, 200, 1);
  padding: 1em 0;
  margin-left: 1em;
`;

export const TextArea = styled(Textarea)`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
  margin-top: 0.5em;
`;

export const ButtonsContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
`;

export const CancelButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgba(183, 183, 183, 1);
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  font-family: "Inter", sans-serif;
  width: 20%;
  &:hover {
    background-color: rgba(183, 183, 183, 1);
    cursor: pointer;
  }
`;

export const SaveButton = styled(Button)`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgba(255, 102, 0, 1);
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  font-family: "Inter", sans-serif;
  &:hover {
    background-color: #ff6600;
    cursor: pointer;
  }
`;
