import React, { useContext } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Box,
  styled,
} from "@mui/material";
import * as Styles from "./styles.js";
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
  const BTN = styled(Button)`
    padding: 10px 25px;
    background-color: #ff6600;
    color: #fff;
    font-weight: 600;
    margin-right: 10px;
    font-size: 18px;
    text-align: center;
  `;
  const BTN2 = styled(Button)`
    padding: 10px 25px;
    background-color: #ff6600;
    color: #fff;
    text-align: center;

    margin-left: 10px;
    font-weight: 600;
    font-size: 18px;
  `;
  return (
    <>
      <Styles.Container>
        <Styles.Title style={{ textAlign: "center" }}>
          HOSTEL REGISTRATION FORM
        </Styles.Title>
        <Stepper activeStep={activeSteps} alternativeLabel>
          {steps.map((steps) => (
            <Step sx={{ color: "red" }}>
              <StepLabel sx={{ color: "red" }}>{steps}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Styles.Container>
      <Box>
        {activeSteps === 0 && (
          <PersonalInformation yupFunctions={yupFunctions} />
        )}
        {activeSteps === 1 && (
          <HostelRegistration yupFunctions={yupFunctions} />
        )}
        {activeSteps === 2 && <Facilities yupFunctions={yupFunctions} />}
      </Box>
      <Box
        component='span'
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BTN disabled={activeSteps === 0 && true} onClick={previousStep}>
          Previous Step
        </BTN>
        {activeSteps < 2 ? (
          <BTN2 onClick={nextStep}>Next</BTN2>
        ) : (
          <BTN2 onClick={handleSubmit}>Submit</BTN2>
        )}
      </Box>
      {/* <Box>
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
      </Box> */}
    </>
  );
}

export default HostelStepperForm;
