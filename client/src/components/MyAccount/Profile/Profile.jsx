import React from "react";
import ProfilePng from "./Assets/profileImg.png";
import {
  ProfileBoxWrapper,
  ProfileContainer,
  ProfileSectionBox,
  ProfileImgBox,
  ProfileButton,
  imgStyles,
} from "./ProfileStyle";

const Profile = () => {
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
    </ProfileBoxWrapper>
  );
};

export default Profile;
