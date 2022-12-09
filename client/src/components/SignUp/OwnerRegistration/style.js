import {
  Dialog,
  DialogContent,
  DialogBox,
  DialogTitle,
  DialogActions,
  DialogContentText,
  Button,
  TextField,
  Box,
  InputBase,
  Typography,
  Alert,
  styled,
} from '@mui/material';

import {
  Search as SearchIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Lock as LockIcon,
  Google as GoogleIcon,
} from '@mui/icons-material';


export const DialogTitleStyled = styled(DialogTitle)`
text-align: center;
color: #4d148c;
font-family: 'League Spartan', sans-serif;
font-size: 3rem;
font-weight: 600;
`;

export const DialogContentStyled = styled(DialogContent)`
margin: 0 2rem 0 2rem;
overflow: hidden;
`;

export const TextBox = styled(Box)`
width: 470px;
height: 55px;
display: flex;
align-items: center;
border: 1px solid #ffb686;
border-radius: 100px;
box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.15);
margin-top: 23px;
`;

export const IconWrapper = styled(Box)`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-left: 35px;
`;

export const TextFieldStyled = styled(TextField)`
margin: 0 14px 0 14px;
width: 100%;
font-family: 'Lato', sans-serif;
font-weight: 400;
font-size: 2rem;
border: none;
`;

export const PersonIconStyled = styled(PersonIcon)`
height: 2rem;
width: 2rem;
color: #ff6600;
`;

export const EmailIconStyled = styled(EmailIcon)`
height: 2rem;
width: 2rem;
color: #ff6600;
`;

export const LockIconStyled = styled(LockIcon)`
height: 2rem;
width: 2rem;
color: #ff6600;
`;

export const StyledBox = styled(Box)`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 1rem;
`;

export const CreateAccountButton = styled(Button)`
background-color: #4d148c;
height: 2.5rem;
width: 13.5rem;
font-family: 'Inter', sans-serif;
font-weight: 600;
text-transform: uppercase;
color: white;
font-size: 1rem;
border-radius: 10px;
&:hover {
  background-color: #4f148e;
}
&:active {
  background-color: #ff6600;
}
`;

export const SignUpWithGoogleButton = styled(Button)`
margin-top: 0.5rem;
display: flex;
justify-content: space-around;
padding: 0 2rem 0 2rem;
background-color: #ff6600;
height: 2.7rem;
width: 17.5rem;
font-family: 'Inter', sans-serif;
font-weight: 600;
text-transform: uppercase;
color: white;
font-size: 1rem;
border-radius: 10px;
&:hover {
  background-color: #ff5600;
}
&:active {
  background-color: #4d148c;
}
`;

export const OrText = styled(Typography)`
gfont-family: 'Lato', sans-serif;
font-weight: 400;
font-size: 1rem;
margin-top: 0.5rem;
`;

export const SignInInsteadText = styled(Typography)`
font-family: 'Lato', sans-serif;
font-weight: 400;
font-size: 1rem;
color: #606060;
display: flex;
margin-top: 2rem;
`;

export const SignInText = styled(Typography)`
font-weight: 700;
font-family: 'Lato', sans-serif;
font-size: 1rem;
color: #ff6600;
margin-left: 0.2rem;
cursor: pointer;
&:hover {
  text-decoration: underline;
  color: #4d148c;
}
`;