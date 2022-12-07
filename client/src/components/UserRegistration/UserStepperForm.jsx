import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Box,
  styled,
} from "@mui/material";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserPersonalInfo from "./UserPersonalInfo";
import EmergencyContact from "./EmergencyContact";
import UserDocuments from "./UserDocuments";
import { FormContext } from "../../ContextAPI/DataProvider";
import * as Styles from "./styles.js";
import Footer from "../Home/Footer/Footer";

function UserStepperForm() {
  // ! Getting Data from Context API
  const { userFormik } = useContext(FormContext);
  const { handleBlur, values, touched, errors, handleChange, handleSubmit } =
    userFormik;
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
  const BTN = styled(Button)`
    padding: 5px 20px;
    background-color: #ff6600;
    color: #fff;

    margin-right: 10px;
    font-size: 18px;
    text-align: center;
  `;
  const BTN2 = styled(Button)`
    padding: 5px 20px;
    background-color: #ff6600;
    color: #fff;
    text-align: center;
    margin-left: 10px;
    font-size: 18px;
  `;

  return (
     <Box sx={{ backgroundColor: "#FED8BF" }}>
        <Styles.Container>
          <Styles.TitleHeader style={{ textAlign: "center" }}>
            HOSTEL ACCOMMODATION APPLICATION FORM
          </Styles.TitleHeader>
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
            <UserPersonalInfo yupFunctions={yupFunctions} />
          )}
          {activeSteps === 1 && (
            <EmergencyContact yupFunctions={yupFunctions} />
          )}
          {activeSteps === 2 && <UserDocuments yupFunctions={yupFunctions} />}
        </Box>

        {/* buttons previous next and submit   */}
        <Box
          component="span"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 20,
            paddingTop: 10,
          }}
        >
          <BTN disabled={activeSteps === 0 && true} onClick={previousStep}>
            Previous
          </BTN>
          <BTN2 onClick={nextStep}>
            {activeSteps >= 2 ? "Submit Form" : "Next"}
          </BTN2>
        </Box>
      </Box>
)}

export default UserStepperForm;
