import React, { useState } from "react";
import ProfilePng from "./Assets/profileImg.png";

import { MenuItem } from "@mui/material";

import {
  ProfileBoxWrapper,
  ProfileContainer,
  ProfileSectionBox,
  ProfileImgBox,
  ProfileButton,
  imgStyles,
  UpdateFormContainer,
  FirstBoxContainer,
  FirstInputBox,
  SecondInputBox,
  FirstNameInputField,
  LastNameInputField,
  LabelTextField,
  InputFieldsBox,
  EmailInputBox,
  EmailFieldBox,
  CountrySelectField,
  GenderSelectBox,
  UniversityBox,
  UniversityFieldInput,
  ButtonsContainer,
  CancelButton,
  UpdateButton,
  ButtonWrapper,
} from "./ProfileStyle";

const Profile = () => {
  const [country, setCountry] = useState("Pakistan");
  const [gender, setGender] = useState("Female");

  return (
    <ProfileBoxWrapper>
      <ProfileContainer>
        <ProfileSectionBox>
          <ProfileImgBox>
            <img style={imgStyles} src={ProfilePng} alt="profile-png" />
          </ProfileImgBox>
          <ProfileButton variant="contained">
            Change Profile Photo
          </ProfileButton>
        </ProfileSectionBox>
      </ProfileContainer>

      <UpdateFormContainer>
        <FirstBoxContainer>
          <InputFieldsBox>
            <FirstInputBox>
              <LabelTextField variant="span" component="span">
                First Name
              </LabelTextField>
              <FirstNameInputField
                type="text"
                variant="standard"
                placeholder="Maya"
              ></FirstNameInputField>
            </FirstInputBox>

            <SecondInputBox>
              <LabelTextField variant="span" component="span">
                Last Name
              </LabelTextField>
              <LastNameInputField
                type="text"
                variant="standard"
                placeholder="Khan"
              ></LastNameInputField>
            </SecondInputBox>
          </InputFieldsBox>
        </FirstBoxContainer>

        <EmailFieldBox>
          <LabelTextField variant="span" component="span">
            Email
          </LabelTextField>
          <EmailInputBox
            type="email"
            variant="standard"
            placeholder="mayakhan@gmail.com"
          ></EmailInputBox>
        </EmailFieldBox>

        <InputFieldsBox>
          <FirstInputBox>
            <LabelTextField variant="span" component="span">
              Nationality
            </LabelTextField>
            <CountrySelectField
              select
              variant="standard"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <MenuItem value={"Pakistan"}>Pakistan</MenuItem>
              <MenuItem value={"India"}>India</MenuItem>
              <MenuItem value={"Russia"}>Russia</MenuItem>
            </CountrySelectField>
          </FirstInputBox>

          <SecondInputBox>
            <LabelTextField variant="span" component="span">
              Gender
            </LabelTextField>
            <GenderSelectBox
              select
              variant="standard"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </GenderSelectBox>
          </SecondInputBox>
        </InputFieldsBox>

        <UniversityBox>
          <LabelTextField variant="span" component="span">
            University
          </LabelTextField>
          <UniversityFieldInput
            type="text"
            variant="standard"
            placeholder="University Of Sindh"
          ></UniversityFieldInput>
        </UniversityBox>

        <InputFieldsBox>
          <FirstInputBox>
            <LabelTextField variant="span" component="span">
              Occupation
            </LabelTextField>
            <FirstNameInputField
              type="text"
              variant="standard"
              value={"Student"}
            ></FirstNameInputField>
          </FirstInputBox>

          <SecondInputBox>
            <LabelTextField variant="span" component="span">
              Company Name
            </LabelTextField>
            <LastNameInputField
              type="text"
              variant="standard"
            ></LastNameInputField>
          </SecondInputBox>
        </InputFieldsBox>

        <ButtonWrapper>
          <ButtonsContainer>
            <CancelButton variant="standard">Cancel</CancelButton>
            <UpdateButton variant="standard">Update</UpdateButton>
          </ButtonsContainer>
        </ButtonWrapper>
      </UpdateFormContainer>
    </ProfileBoxWrapper>
  );
};

export default Profile;
