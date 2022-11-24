import React from "react";
import { profileSetupHostelOwnerValidation } from "../../Yup/ProfileSetupOfHostelOwner";
import { Box } from "@mui/material";
import { useFormik } from "formik";
import {
  StyledFormGroup,
  TitleBox,
  TitleContainer,
  ColoredDiv,
  Title,
  FormContainer,
  InputContainer,
  AddressInputContainer,
  FieldLabel,
  NameInput,
  ErrorMsgText,
} from "./styles";
const hostlerProfileSetupValues = {
  fullName: "",

  email: "",
  cnic: "",
  nationality: "",

  permanentAddress: "",
  dateOfBirth: "",
  mobileNumber: "",
  whatsappNumber: "",
  religion: "",
  gender: "",

  profilePicture: "",
  cnicFrontPicture: "",
  cnicBackPicture: "",
};
function ProfileSetup() {
  const {
    handleBlur,
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: hostlerProfileSetupValues,
    validationSchema: profileSetupHostelOwnerValidation,
    validateOnChange: true,
    onSubmit: async (values, action) => {
      const { name, email, password } = values;
      //   const result = await dispatch(
      //     register("user", {
      //       email: `${email}`,
      //       name: `${name}`,
      //       password: `${password}`,
      //     })
      //   );
    },
  });

  return (
    <Box style={{ backgroundColor: "#fed8bf" }}>
      <StyledFormGroup>
        <TitleBox>
          <ColoredDiv></ColoredDiv>

          <TitleContainer>
            <Title>Personal Information</Title>
          </TitleContainer>
        </TitleBox>
      </StyledFormGroup>
    </Box>
  );
}

export default ProfileSetup;
