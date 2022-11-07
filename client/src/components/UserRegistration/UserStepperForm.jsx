import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserPersonalInfo from "./UserPersonalInfo";
import EmergencyContact from "./EmergencyContact";
import UserDocuments from "./UserDocuments";
import { FormContext } from "../../ContextAPI/DataProvider";

function UserStepperForm() {
  // ! Getting Data from Context API
  const { userFormik } = useContext(FormContext);
  const {
    handleBlur,
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
  } = userFormik;
  const yupFunctions = {
    handleBlur,
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
  };

  // ! Component Logic
  const steps = ["Personal Information", "Emergency Contact", "Documents"];
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
        <Stepper activeStep={activeSteps} alternativeLabel>
          {steps.map((steps) => (
            <Step sx={{ color: 'red' }}>
              <StepLabel sx={{ color: 'red' }}>{steps}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      {activeSteps}
      <Box>
        {activeSteps === 0 && <UserPersonalInfo yupFunctions={yupFunctions} />}
        {activeSteps === 1 && <EmergencyContact yupFunctions={yupFunctions} />}
        {activeSteps === 2 && <UserDocuments yupFunctions={yupFunctions} />}
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
          {activeSteps >= 2 ? 'Submit Form' : 'Next'}
        </Button>
      </Box>
    </>
  );
}

export default UserStepperForm;
