import React from "react";
import Footer from "../../Home/Footer/Footer";
import { HostelWrapper, UserText, TopBox, HostelContainer,AddNewHostelButton,TitleStatusBox,TitleText,StatusText,TitleStatusContainer,HostelBoxContainer,HostelText,ActiveStatusText,ButtonContainer,DeleteButton,EditButton,HostelBoxContainer2,HostelName2,ActiveStatusText2,RegisterButton } from "./style";
import {details} from "./details/details"

function OwnerHostels() {
  return (
    <>
      <HostelWrapper>
        <HostelContainer>
          <TopBox>
            <UserText>Kamal Kareem</UserText>
            <AddNewHostelButton>add new hostel</AddNewHostelButton>
          </TopBox>
      
          <TitleStatusBox>
            <TitleStatusContainer>
            <TitleText>
            All
            </TitleText>
            <StatusText>
            Status
            </StatusText>
            </TitleStatusContainer>
          </TitleStatusBox>

          <HostelBoxContainer>
           <HostelText>Kainat Girls Hostel</HostelText>
           <ActiveStatusText>inactive</ActiveStatusText>
           <ButtonContainer>
            <EditButton>Edit</EditButton>
            <DeleteButton>Delete</DeleteButton>
           </ButtonContainer>
          </HostelBoxContainer>

          <HostelBoxContainer>
            <HostelText>Sindh Boys Hostel</HostelText>
            <ActiveStatusText>inactive</ActiveStatusText>
            <ButtonContainer>
            <RegisterButton>Register</RegisterButton>
            </ButtonContainer>
          </HostelBoxContainer>
        </HostelContainer>
      </HostelWrapper>
      <Footer />
    </>
  );
}

export default OwnerHostels;
