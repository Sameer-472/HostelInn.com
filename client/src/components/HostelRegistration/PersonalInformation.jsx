import React from "react";
import { useContext } from "react";
import { FormContext } from "../../ContextAPI/DataProvider";

function PersonalInformation({ yupFunctions }) {
  const { hostelForm, setHostelForm, userForm } = useContext(FormContext);
  const json = JSON.stringify(hostelForm);
  const jsonUser = JSON.stringify(userForm);

  console.log(json);
  return (
    <>
      {json}
      <div>{jsonUser}</div>
    </>
  );
}

export default PersonalInformation;
