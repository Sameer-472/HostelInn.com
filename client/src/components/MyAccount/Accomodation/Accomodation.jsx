import React,{useState} from "react";
import ActiveImgPng from "./Assets/activePng.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CancelDialog from "./CancelDialog/CancelDialog"

import {
  AccomodatoionWrapper,
  AccomodationContainer,
  AccomodationText,
  NameText,
  StatusText,
  TableContainer,
  HostelName,
  StatusModeContainer,
  HostelAddress,
  AccomadationDetailsContainer,
  NameStatusContainer,
  NameStatusWrapper,
  AccomodationDetailsWrapper,
  Line,
  ActiveText,
  ActiveImgBox,
  AccordianBox,
  MoreDetailContainer,
  DateContainer,
  DateTitle,
  DateText,
  DateDay,
  RoomContainer,
  RoomTitle,
  RoomText,
  PaymentContainer,
  PaymentTitle,
  PaymentText,
  PaymentDay,
  PaymentButton,
  CancelAccomodationContainer,
  CancelAccomodationTitle,
  CancelAccomodationButton,
} from "./AccomodationStyle";

function Accomodation() {
  const [showMoreHostelDetails,setShowMoreHostelDetails] = useState(false)

  const handleShowHostel = () => {
    setShowMoreHostelDetails(prevState=> !prevState)
  }


  return (
    <AccomodatoionWrapper>
      <AccomodationContainer>
        <AccomodationText component={"p"}>Accomodations</AccomodationText>

        <TableContainer>
          <NameStatusWrapper>
            <NameStatusContainer>
              <NameText>Name</NameText>
              <StatusText>Status</StatusText>
            </NameStatusContainer>
          </NameStatusWrapper>

          <AccomodationDetailsWrapper>
            <AccomadationDetailsContainer>
              <HostelName component="p" variant="p">
                Sindh Hostel Jamshoro
              </HostelName>
              <HostelAddress>123 street, main road, jamshoro</HostelAddress>
            </AccomadationDetailsContainer>

            <StatusModeContainer>
              <ActiveText>Active</ActiveText>
              <ActiveImgBox>
                <img
                  style={{ width: "100%" }}
                  src={ActiveImgPng}
                  alt="active-image"
                />
              </ActiveImgBox>
            </StatusModeContainer>

            <AccordianBox onClick={handleShowHostel}>
             {showMoreHostelDetails ? <ExpandMoreIcon /> : <ExpandLessIcon/>}
            </AccordianBox>
          </AccomodationDetailsWrapper>
        </TableContainer>

       { showMoreHostelDetails && <MoreDetailContainer>
          <DateContainer>
            <DateTitle>Check in date</DateTitle>
            <DateText>
              20-Sep-2022,<DateDay component={"span"}>Friday</DateDay>
            </DateText>
          </DateContainer>

          <RoomContainer>
            <RoomTitle>Room no</RoomTitle>
            <RoomText>20B</RoomText>
          </RoomContainer>

          <PaymentContainer>
            <PaymentTitle> Next Payment due</PaymentTitle>
            <PaymentText>
              20-Oct-2022,<PaymentDay component={"span"}>Saturday</PaymentDay>
            </PaymentText>
            <PaymentButton variant="standard">Pay Now</PaymentButton>
          </PaymentContainer>
        </MoreDetailContainer>}

       {showMoreHostelDetails && <CancelAccomodationContainer>
          <CancelAccomodationTitle>Cancel accomodation</CancelAccomodationTitle>
          {/* <CancelAccomodationButton variant="standard">
            Cancel
          </CancelAccomodationButton> */}
          <CancelDialog/>
        </CancelAccomodationContainer>}
      </AccomodationContainer>
    </AccomodatoionWrapper>
  );
}

export default Accomodation;
