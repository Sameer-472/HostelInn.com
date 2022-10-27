import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { hostelFormDetails } from "./HostlerSchema.js/HostlerSchema";
import { useFormik } from "formik";
import { UserDetailsValidation } from "../components/Yup/UserDetailsValidation";
import { hostelOwnerValidation } from "../components/Yup/HostelOwnerValidation";

export const FormContext = createContext(null);
const userFormDetails = {
  fistName: "",
  lastName: "",
  fatherName: "",
  guardianPhoneNumber: "",
  email: "",
  cnic: "",
  institute: "",
  program: "",
  dateOfBirth: "",
  mobileNumber: "",
  whatsappNumber: "",
  permanentAddress: "",
  religion: "",
  gender: "",
  occupation: "",
  companyName: "",
  criminalRecord: "",

  personName: "",
  relationship: "",
  address: "",

  profilePicture: "",
  frontPicture: "",
  backPicture: "",
};

function DataProvider({ children }) {
  const [hostelForm, setHostelForm] = useState(hostelFormDetails);
  const [userForm, setUserForm] = useState(userFormDetails);
  // export const {
  //   handleBlur,
  //   values,
  //   touched,
  //   errors,
  //   handleChange,
  //   handleSubmit,
  // }
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
  const { userFormik } = useFormik({
    initialValues: userForm,
    validationSchema: UserDetailsValidation,
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
