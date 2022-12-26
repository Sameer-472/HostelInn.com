import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { hostelFormDetails } from "./HostlerSchema/HostlerSchema";
import { useFormik } from "formik";
import { UserDetailsValidation } from "../components/Yup/UserDetailsValidation";
import { hostelOwnerValidation } from "../components/Yup/HostelOwnerValidation";

export const FormContext = createContext(null);
const userFormDetails = {
  firstName: "",
  lastName: "",
  guardianFullName: "",
  guardianCNIC: "",
  guardianPhoneNumber: "",
  email: "",
  cnic: "",
  nationality: "",
  university: "",
  programme: "",
  dateOfBirth: "",
  mobileNumber: "",
  whatsappNumber: "",
  permanentAddress: "",
  religion: "",
  gender: "",
  occupation: "",
  companyName: "",
  criminalRecord: Boolean,
  accommodationType: "",

  EmergencyContactName: "",
  EmergencyRelationship: "",
  EmergencyMobileNumber: "",
  EmergencyWhatsappNumber: "",
  EmergencyPermanentAddress: "",

  profilePicture: "",
  cnicFrontPicture: "",
  cnicBackPicture: "",
};

function DataProvider({ children }) {
  const [hostelForm, setHostelForm] = useState(hostelFormDetails);
  const [userForm, setUserForm] = useState(userFormDetails);
  const hostelFormik = useFormik({
    initialValues: hostelForm,
    validationSchema: hostelOwnerValidation,
    validateOnChange: true,
    onSubmit: async (values, action) => {
      // const { name, password, email } = values;
      // const result = await dispatch(
      // register(
      // TODO: enter valid endpoint
      // "hostelOwner",
      // Send data to backend
      // values
      //   {
      //     email: `${email}`,
      //     name: `${name}`,
      //     password: `${password}`,
      //   }
      // )
      // );
      // console.log(result);
      // ! Status Codes
      // 200 User added Successful
      //201 user already exist
      // result.user.status === 200 ? action.resetForm() : setError(true);
      // const statusCode=result.user.status;
      // if(statusCode===400){
      //   console.log('code 400')
      //   return;
      // }
      // else if( statusCode === 200){
      //   action.resetForm();
      //   setError(false)
      //   return;
      // }
      // else if(statusCode===201){
      //   setError(true);
      //   console.log('error has occured');
      //   return;
      // }
    },
  });
  const userFormik = useFormik({
    initialValues: userFormDetails,
    validationSchema: UserDetailsValidation,
    validateOnChange: true,
    onSubmit: async (values, action) => {
      console.log("hello");
      console.log(values);
      // const { name, password, email } = values;
      // const result = await dispatch(
      // register(
      // TODO: enter valid endpoint
      // "hostelOwner",
      // Send data to backend
      // values
      //   {
      //     email: `${email}`,
      //     name: `${name}`,
      //     password: `${password}`,
      //   }
      // )
      // );
      // console.log(result);
      // ! Status Codes
      // 200 User added Successful
      //201 user already exist
      // result.user.status === 200 ? action.resetForm() : setError(true);
      // const statusCode=result.user.status;
      // if(statusCode===400){
      //   console.log('code 400')
      //   return;
      // }
      // else if( statusCode === 200){
      //   action.resetForm();
      //   setError(false)
      //   return;
      // }
      // else if(statusCode===201){
      //   setError(true);
      //   console.log('error has occured');
      //   return;
      // }
    },
  });

  return (
    <FormContext.Provider
      value={{
        hostelForm,
        setHostelForm,
        userForm,
        setUserForm,
        hostelFormik,
        userFormik,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default DataProvider;
