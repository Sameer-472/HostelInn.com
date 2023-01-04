import { Box, Typography, styled, Button } from "@mui/material";

export const HostelWrapper = styled(Box)`
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 2em;
`;

export const HostelContainer = styled(Box)`
  padding-top: 2em;
`;

export const TopBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserText = styled(Box)`
  color: #393939;
  font-size: 2rem;
  font-weight: bold;
`;

export const AddNewHostelButton = styled(Button)`
  background: #ff6600;
  border-radius: 10px;
  font-family: inherit;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  padding: 0.5em;
  width: 30%;
  &:hover {
    background-color: #ff6600;
  }
`;

export const TitleStatusContainer = styled(Box)`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleStatusBox = styled(Box)`
  width: 100%;
  border-bottom: 1px solid #C8C8C8;
  margin-top: 2em;
`;

export const TitleText = styled(Box)`
  color: #ff6600;
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  margin-left: .2em;
`;

export const StatusText = styled(Box)`
  color: #ff6600;
  font-family: "Lato", sans-serif;
  font-size: 1rem;
`;

export const HostelBoxContainer = styled(Box)` 
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin: .6em;
 margin-left: 0;
 padding: 2em 0;
 border-bottom: 1px solid #C8C8C8 ;
`

export const HostelText = styled(Box)` 
  color: #474747;
  font-family: "Lato",sans-serif;
  text-transform: capitalize;
  font-weight: bold;
`

export const ActiveStatusText = styled(Box)` 
color: #474747;
font-family: "Lato",sans-serif;
margin-left: 16em;
`

export const ButtonContainer = styled(Box)` 
  display: flex;
  width: 40%;
  align-items: center;
  margin-left: auto;
`

export const EditButton = styled(Box)` 
text-transform: uppercase;
font-family: "Inter", sans-serif;
background: #B7B7B7;
border-radius: 10px;
font-weight: 600;
padding:.5em .7em;
width: 45%;
text-align: center;
color: #FFFFFF;
margin-left: auto;
&:hover{
    background-color: #B7B7B7;
    cursor: pointer;
}
`

export const DeleteButton = styled(Box)` 
text-transform: uppercase;
font-family: "Inter", sans-serif;
background: #FF0000;;
border-radius: 10px;
font-weight: 600;
padding: .5em .7em;
width: 45%;
text-align: center;
color: #FFFFFF;
margin-left:auto;
&:hover{
    background: #FF0000;
    cursor: pointer;
}
`

export const RegisterButton = styled(Button)`
border-radius: 10px;
font-weight: 600;
padding: .5em .7em;
width: 45%;
text-align: center;
color: #FFFFFF;
font-family: "Inter", sans-serif;
margin-left: auto;
background: #4D148C;
&:hover{
    background-color: #4D148C;
}
`