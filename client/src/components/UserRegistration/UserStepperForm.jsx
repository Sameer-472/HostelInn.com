import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserPersonalInfo from "./UserPersonalInfo";
import EmergencyContact from "./EmergencyContact";
import UserDocuments from "./UserDocuments";

function UserStepperForm() {
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
        <Stepper activeStep={activeSteps}>
          {steps.map((steps) => (
            <Step>
              <StepLabel>{steps}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      {activeSteps}
      <Box>
        {activeSteps === 0 && <UserPersonalInfo />}
        {activeSteps === 1 && <EmergencyContact />}
        {activeSteps === 2 && <UserDocuments />}
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

export default UserStepperForm;
