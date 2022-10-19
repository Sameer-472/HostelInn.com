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
import PersonalInformation from "./PersonalInformation";
import HostelRegistration from "./HostelRegistration";
import Facilities from "./Facilities";
import { useNavigate } from "react-router-dom";

function StepperForm() {
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
            <Step>
              <StepLabel>{steps}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      {activeSteps}
      <Box>
        {activeSteps === 0 && <PersonalInformation />}
        {activeSteps === 1 && <HostelRegistration />}
        {activeSteps === 2 && <Facilities />}
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

export default StepperForm;
