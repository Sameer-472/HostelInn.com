import React, {useEffect} from "react";
import {
  Button,
  AppBar,
  Toolbar,
  Box,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import DrawerFile from "../../../components/Home/Navbar/DrawerFiles/DrawerFile";
// import AccountMenu from "../../../components/Home/Navbar/account-menu";
import OwnerRegistration from "../../../components/SignUp/OwnerRegistration/ownerRegistration";
import OwnerSignIn from "../../../components/SignIn/ownerSignIn/OwnerSignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountMenu from "../Account-menu";



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
:hover {
    background-color: #8a17d6;
  }
:active {
    background-color: #ff6600;
  }
`;
const Btn2 = styled(Button)`
  background-color: #edaa0e;
  color: white;
  text-transform: none;
  font-size: 14px;
  height: 35px;
  width: 155px;
  margin-right: 10px;
:hover {
    background-color: #ee9222;
  }
:active {
    background-color: #ff6600;
  }
`;
function OwnerNavbar(props) {
  const {setRole} = props
  const result = useSelector((state) => state);
  console.log("this is result from navbar", result.auth);
  const theme = useTheme();

  const isTrue = useMediaQuery("(max-width:770px)");
  // (theme.breakpoints.down(600));
  console.log(isTrue);
  let location = useLocation()
  useEffect(() => {
    // console.log("location changed" , location.pathname);
    if(location.pathname === '/'){
      setRole('user')
    }
  }, [location.pathname]);

  const [signUpOpen, setSignUpOpen] = React.useState(false);
  const [signInOpen, setSignInOpen] = React.useState(false);
  const [renderSignIn, setRenderSignIn] = React.useState(false);
  const [renderSignUp, setRenderSignUp] = React.useState(false);

  return (
    <>
      {isTrue ? (
        <DrawerFile />
      ) : (
        <AppBar position="sticky">
          <Toolbar
            style={{
              backgroundColor: "white",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Link to="/" style={{ maxHeight: 80 }}>
              <Image src={require("./assets/hostelin-logo.png")} alt="logo" />
            </Link>
            <LinkWrapper>
              <NavLink to="/"> Dashboard </NavLink>
              {/* <NavLink to="/explore"> Explore </NavLink> */}
              {/* <NavLink to="/contact-us"> Contact us </NavLink> */}
              <NavLink to="/about-us"> About us </NavLink>
            </LinkWrapper>
            <RightWrapper>
              {result.auth.isLoggedIn && result.auth.user ? (
                <AccountMenu />
              ) : (
                <>
                {/* <Link to='/ownerSignUp'>
                <Btn2 sx={{backgroundColor: 'orange' , color: 'black'}} >
                  Register Your Hostel
                </Btn2>
                </Link> */}
                  {/* <Btn
                    onClick={() => {
                      setSignUpOpen(true);
                      setRenderSignUp(true);
                    }}
                    variant="text"
                  >
                    Signup/Login
                  </Btn> */}
                </>
              )}
            </RightWrapper>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
}

export default OwnerNavbar;
