import * as Yup from "yup";

export const profileSetupHostelOwnerValidation = Yup.object({
  fullName: Yup.string()
    .min(4, "Please enter minimum 4 letters")
    .max(20, "Please enter maximum 4 letters")
    .required("Please Enter First Name"),

  email: Yup.string()
    .email()
    .required("Please Enter Valid Email"),
  cnic: Yup.string()
    .min(13, "CNIC can contain only 13 digits")
    .max(13, "Enter CNIC without dashes")
    .required("Please Enter CNIC"),
  nationality: Yup.string()
    .min(4, "Please enter minimum 4 letters")
    .max(20, "Please enter maximum 20 letters")
    .required("Please Enter your nationality"),

  permanentAddress: Yup.string()
    .min(10, "Please enter at least 10 letters")
    .required("Please enter your permanent address"),
  dateOfBirth: Yup.string().required("Please enter your date of birth"),
  mobileNumber: Yup.string()
    .min(11, "Phone Number can contain only 11 digits")
    .max(11, "Phone Number can contain only 11 digits")
    .required("Please enter valid mobile number"),

  whatsappNumber: Yup.string()
    .min(11, "Phone Number can contain only 11 digits")
    .max(11, "Phone Number can contain only 11 digits")
    .required("Please enter valid mobile number"),
  religion: Yup.string()
    .min(3, "Please enter at least 3 letters")
    .required("Please select your religion"),
  gender: Yup.string().required("Please select gender"),

  profilePicture: Yup.string().required("Please upload your picture"),
  cnicFrontPicture: Yup.string().required(
    "Please upload your CNIC front picture"
  ),
  cnicBackPicture: Yup.string().required(
    "Please upload your CNIC back picture"
  ),
});
