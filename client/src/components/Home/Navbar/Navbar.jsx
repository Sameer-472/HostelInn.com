import React from 'react';

import { Button, AppBar, Toolbar, Box, styled, Avatar } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import UserSignUp from './../../SignUp/UserSignUp';

const Image = styled('img')({
  fontSize: 80,
  height: 80,
  width: 'auto',
  cursor: 'pointer',
  alignItems: 'center',
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
  &: hover {
    background-color: #4d148c;
  }
  &: active {
    background-color: #ff6600;
  }
`;
function Navbar() {
  const [open, setOpen] = React.useState(false);
  
  return (
    <>
      <AppBar position='sticky'>
        <Toolbar
          style={{
            backgroundColor: 'white',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Link to='/' style={{ maxHeight: 80 }}>
            <Image src={require('./assets/hostelin-logo.png')} alt='logo' />
          </Link>
          <LinkWrapper>
            <NavLink to='/'> Home </NavLink>
            <NavLink to='/explore'> Explore </NavLink>
            <NavLink to='/contact-us'> Contact us </NavLink>
            <NavLink to='/about-us'> About us </NavLink>
          </LinkWrapper>
          <RightWrapper>
            <Btn onClick={() => setOpen(true)} variant='text'>Signup/Login</Btn>
            <Avatar
              //   sx={{ bgcolor: deepOrange[500] }}
              //   alt='Remy Sharp'
              src='./assets/user.png'
            />
          </RightWrapper>
        </Toolbar>
      </AppBar>
      <UserSignUp open={open} setOpen = {setOpen} />
    </>
  );
}

export default Navbar;
