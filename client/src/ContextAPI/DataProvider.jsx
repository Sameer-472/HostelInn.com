import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { hostelFormDetails } from "./HostlerSchema.js/HostlerSchema";

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
  mobileNumber: "",
  whatsappNumber: "",
  address: "",

  profilePicture: "",
  frontPicture: "",
  backPicture: "",
};

function DataProvider({ children }) {
  const [hostelForm, setHostelForm] = useState(hostelFormDetails);
  const [userForm, setUserForm] = useState(userFormDetails);

  return (
    <FormContext.Provider
      value={{ hostelForm, setHostelForm, userForm, setUserForm }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default DataProvider;
