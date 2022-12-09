import {
  Typography,
  Drawer,
  IconButton,
  styled,
  Box,
  Button,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import UserSignIn from "../../../SignIn/UserSignIn";
import UserSignUp from "../../../SignUp/userRegistration/UserSignUp";

const Navlink = styled(NavLink)`
  color: #4d148c;
  text-decoration: none;
  margin-top: 15px;
`;
const LinkWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  & > a {
    text-decoration: none;
    color: #4d148c;
    line-height: 40px;
    font-size: 18px;
    font-weight: 600;
  }
  /* & > a:hover {
    color: orange;
    font-weight: 600;
  } */
  & > a.active {
    color: orange;
    border-bottom: 2px solid orange;
    padding: 0 0 4px;
    font-size: 20px;

    // border-bottom-width: 10px;
  }
`;
const Btn = styled(Button)`
  background-color: #ff6600;
  color: white;
  text-transform: none;
  font-size: 18px;
  /* height: 35px; */
  width: 100%;
  padding: 10px 20px;
  margin-top: auto;
  :hover {
    background-color: #ff6600;
  }
  active: {
    background-color: #ff6600;
  }
`;
function DrawerMain({ open, onClose }) {
  const [signUpOpen, setSignUpOpen] = React.useState(false);
  const [signInOpen, setSignInOpen] = React.useState(false);
  const [renderSignIn, setRenderSignIn] = React.useState(false);
  const [renderSignUp, setRenderSignUp] = React.useState(false);
  return (
    <Drawer
      PaperProps={{ sx: { backgroundColor: "white", width: "100%" } }}
      open={open}
      close={onClose}
      anchor='right'
    >
      <IconButton onClick={() => onClose()} style={{ marginLeft: "auto" }}>
        <CloseIcon fontSize='large' />
      </IconButton>
      <LinkWrapper>
        <Navlink onClick={() => onClose()} to='/'>
          Home
        </Navlink>

        <Navlink onClick={() => onClose()} to='/userRegistration'>
          Explore
        </Navlink>

        <Navlink to='/contact-us' onClick={() => onClose()}>
          Pricing
        </Navlink>

        <Navlink to='/about-us' onClick={() => onClose()}>
          Contact Us
        </Navlink>
      </LinkWrapper>
      <Btn
        onClick={() => {
          setSignUpOpen(true);
          setRenderSignUp(true);
        }}
        variant='text'
      >
        Signup/Login
      </Btn>
      {//! For SignIn and SignUp Dialog
      renderSignUp && (
        <UserSignUp
          signUpOpen={signUpOpen}
          setSignUpOpen={setSignUpOpen}
          setRenderSignIn={setRenderSignIn}
          setRenderSignUp={setRenderSignUp}
          setSignInOpen={setSignInOpen}
        />
      )}
      {renderSignIn && (
        <UserSignIn
          signInOpen={signInOpen}
          setSignInOpen={setSignInOpen}
          setSignUpOpen={setSignUpOpen}
          setRenderSignIn={setRenderSignIn}
          setRenderSignUp={setRenderSignUp}
        />
      )}
    </Drawer>
  );
}

export default DrawerMain;
