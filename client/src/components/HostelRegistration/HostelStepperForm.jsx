import React, { useContext } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { useState } from "react";
import PersonalInformation from "./PersonalInformation";
import HostelRegistration from "./HostelRegistration";
import Facilities from "./Facility/Facilities";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../ContextAPI/DataProvider";

function HostelStepperForm() {
  // !Getting Data from Context API
  const { hostelFormik, userForm } = useContext(FormContext);
  // const jsonUser = JSON.stringify(userForm);

  // console.log(jsonUser);
  // console.log(hostelFormik);

  const {
    handleBlur,
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
  } = hostelFormik;

  const yupFunctions = {
    handleBlur,
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
  };

  // !Component Logic
  const steps = ["Personal Information", "Hostel Registration", "Facilities"];
  const navigate = useNavigate();
  const [activeSteps, setActiveStep] = useState(0);
  const previousStep = () => {
    if (activeSteps > 0) {
      setActiveStep((prevState) => prevState - 1);
    }
  };
  const nextStep = () => {
    if (activeSteps === 2) {
      navigate("/");
    } else if (activeSteps < 3) {
      setActiveStep((prevState) => prevState + 1);
    }
  };
  return (
    <>
      <Box>
        <Stepper activeStep={activeSteps}>
          {steps.map((steps) => (
            <Step key={steps}>
              <StepLabel>{steps}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      {activeSteps}
      <Box>
        {activeSteps === 0 && (
          <PersonalInformation yupFunctions={yupFunctions} />
        )}
        {activeSteps === 1 && (
          <HostelRegistration yupFunctions={yupFunctions} />
        )}
        {activeSteps === 2 && <Facilities yupFunctions={yupFunctions} />}
      </Box>
      <Box>
        <Button
          variant='outlined'
          color='primary'
          disabled={activeSteps === 0 && true}
          onClick={previousStep}
        >
          Previous Step
        </Button>
        <Button variant='outlined' color='primary' onClick={nextStep}>
          {activeSteps >= 2 ? "Submit Form" : "Next"}
        </Button>
      </Box>
    </>
  );
}

export default HostelStepperForm;
