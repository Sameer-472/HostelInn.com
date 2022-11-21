import React from "react";
import {
  Button,
  AppBar,
  Toolbar,
  Box,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import UserSignUp from "./../../SignUp/userRegistration/UserSignUp";
import UserSignIn from "./../../SignIn/UserSignIn";
import AccountMenu from "./account-menu";
import DrawerFile from "./DrawerFiles/DrawerFile";
import { useSelector } from "react-redux";

const Image = styled("img")({
  fontSize: 80,
  height: 80,
  width: "auto",
  cursor: "pointer",
  alignItems: "center",
});

const LinkWrapper = styled(Box)`
  display: flex;
  align-items: center;
  & > a {
    text-decoration: none;
    color: #4d148c;
    padding: 0px 20px;
  }
  & > a:hover {
    color: orange;
    font-weight: 600;
  }
  & > a.active {
    color: orange;
    border-bottom: 2px solid orange;
    padding: 0 0 4px;
    // border-bottom-width: 10px;
  }
`;
const RightWrapper = styled(Box)`
  margin-left: auto;
  display: flex;
  text-align: center;
  align-items: center;
`;

const Btn = styled(Button)`
  background-color: #4d148c;
  color: white;
  text-transform: none;
  font-size: 14px;
  height: 35px;
  width: 155px;
  margin-right: 10px;

  hover: {
    background-color: #4d148c;
  }
  active: {
    background-color: #ff6600;
  }
`;
function Navbar() {
  const result = useSelector((state)=> state);
  console.log("this is result from navbar", result.auth);
  const theme = useTheme();

  const isTrue = useMediaQuery("(max-width:770px)");
  // (theme.breakpoints.down(600));
  console.log(isTrue);

  const [signUpOpen, setSignUpOpen] = React.useState(false);
  const [signInOpen, setSignInOpen] = React.useState(false);
  const [renderSignIn, setRenderSignIn] = React.useState(false);
  const [renderSignUp, setRenderSignUp] = React.useState(false);

  return (
    <>
      {isTrue ? (
        <DrawerFile />
      ) : (
        <AppBar position='sticky'>
          <Toolbar
            style={{
              backgroundColor: "white",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Link to='/' style={{ maxHeight: 80 }}>
              <Image src={require("./assets/hostelin-logo.png")} alt='logo' />
            </Link>
            <LinkWrapper>
              <NavLink to='/'> Home </NavLink>
              <NavLink to='/explore'> Explore </NavLink>
              <NavLink to='/contact-us'> Contact us </NavLink>
              <NavLink to='/about-us'> About us </NavLink>
            </LinkWrapper>
            <RightWrapper>{
                result.auth.isLoggedIn && result.auth.user ? <AccountMenu />  : <Btn
                onClick={() => {
                  setSignUpOpen(true);
                  setRenderSignUp(true);
                }}
                variant='text'
              >
                Signup/Login
              </Btn>
              }              
            </RightWrapper>
          </Toolbar>
        </AppBar>
      )}
      {renderSignUp && (
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
    </>
  );
}

export default Navbar;
