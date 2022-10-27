import * as Yup from "yup";

export const UserDetailsValidation = Yup.object({
  firstName: Yup.string()
    .min(4, "Please enter minimum 4 letters")
    .max(20, "Please enter maximum 4 letters")
    .required("Please Enter First Name"),
  lastName: Yup.string()
    .min(4, "Please enter minimum 4 letters")
    .max(20, "Please enter maximum 4 letters")
    .required("Please Enter Last Name"),
  fatherName: Yup.string()
    .min(4, "Please enter minimum 4 letters")
    .max(20, "Please enter maximum 20 letters")
    .required("Please Enter Father`s name"),
  guardianPhoneNumber: Yup.string()
    .min(11, "Please Enter minimum 11 Numbers")
    .required("Please enter valid mobile number"),
  email: Yup.string()
    .email()
    .required("Please Enter Valid Email"),
  cnic: Yup.string()
    .min(13, "Please enter minimum 13 numbers")
    .max(13, "Please enter maximum 13 numbers")
    .required("Please enter cnic without dashes"),
  institute: Yup.string().required("Please enter institute name"),
  program: Yup.string().required("Please enter program name"),
  dateOfBirth: Yup.string().required("Please enter your date of birth"),

  mobileNumber: Yup.string()
    .min(11, "Please enter at least 11 numbers")
    .required("Please enter valid mobile number"),
  whatsappNumber: Yup.string()
    .min(11, "Please enter at least 11 numbers")
    .required("Please enter valid mobile number"),

  permanentAddress: Yup.string()
    .min(10, "Please enter at least 10 letters")
    .required("Please enter your permanent address"),
  religion: Yup.string()
    .min(3, "Please enter at least 3 letters")
    .required("Please enter your religion"),
  gender: Yup.string().required("Please select gender"),
  occupation: Yup.string()
    .min(4, "Please enter at least 4 letters ")
    .required("Please enter your occupation occupation"),

  companyName: Yup.string()
    .nullable()
    .optional(),

  // .when("companyName", (val, schema) => {
  //   if (val.length > 0) {
  //     //if address exist then apply min max else not
  //     return Yup.string()
  //       .min(4, "Please enter minimum 4 letters")
  //       .required("Required");
  //   } else {
  //     return Yup.string().notRequired();
  //   }
  // }),
  criminalRecord: Yup.boolean()
    .nullable()
    .optional(),

  //emergency contact

  personName: Yup.string()
    .min(4, "Please enter at least 4 letters")
    .required("Please enter emergency contact name"),
  relationship: Yup.string()
    .min(4, "Please enter at least 4 letters")
    .required("Please enter relation"),
  mobileNumber: Yup.string()
    .min(11, "Please enter at least 11 numbers")
    .required("Please enter valid mobile number"),
  whatsappNumber: Yup.string()
    .min(11, "Please enter at least 11 numbers")
    .required("Please enter valid mobile number"),
  permanentAddress: Yup.string()
    .min(10, "Please enter at least 10 letters")
    .required("Please enter your permanent address"),

  //For pics
  profilePicture: Yup.string().required("Please enter your picture"),
  cnicFrontPicture: Yup.string().required(
    "Please enter your CNIC front picture"
  ),
  cnicBackPicture: Yup.string().required("Please enter your CNIC back picture"),
});

// !Optional condition
// when("address", (val, schema) => {
//   if(val?.length > 0) {  //if address exist then apply min max else not
//      return Yup.string().min(11, "Please enter minimum 11 numbers").required("Required");
//   } else {
//      return Yup.string().notRequired();
//   }})
