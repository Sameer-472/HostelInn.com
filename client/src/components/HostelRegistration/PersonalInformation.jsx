import React from "react";
import { useContext } from "react";
import { FormContext } from "../../ContextAPI/DataProvider";

function PersonalInformation() {
  const { hostelForm, setHostelForm } = useContext(FormContext);
  const json = JSON.stringify(hostelForm);
  console.log(json);
  return <div>{json}</div>;
}

export default PersonalInformation;
