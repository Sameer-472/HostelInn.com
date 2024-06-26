import { Box, styled, Typography, InputBase, Button } from "@mui/material";
import { Search } from "@mui/icons-material";

export const BoxMain = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 188px;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 600px) {
    height: 120px;
    margin-bottom: 4em;
  }
`;

export const MarginBox = styled(Box)` 
display: block;
margin-top: 4em;
width: 100%;
@media(max-width:650px){
  display: none;
}
`

export const LabelText = styled(Typography)`
  font-size: 32px;
  font-weight: 700;
  font-family: 'League Spartan', sans-serif;
  line-height: 0;
  color: #ff6600;
  @media (max-width: 600px) {
    text-align: center;
    font-size: 22px;
    margin-top: -1em;
  }
`;

export const Lablel2Text = styled(Typography)` 
  font-size: 32px;
  font-weight: 700;
  line-height: 0;
  font-family: 'League Spartan', sans-serif;
  margin-bottom: .6em;
  color: #ff6600;
  @media (max-width: 600px) {
    text-align: center;
    font-size: 22px;
    margin-top: -1em;
  }
`

export const SearchBox = styled(Box)`
  width: 70%;
  height: 45px;
  display: flex;
  align-items: center;
  border: 1px solid #ffb686;
  border-radius: 100px;
  box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.15);
  margin: 10px auto 30px auto;
  @media (max-width: 600px) {
    width: 90%;
    height: 36px;
    margin-top: 10px;
    margin-bottom: 16px;
  }
`;

export const SearchIconWrapper = styled(Box)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 35px;
`;

export const SearchIcon = styled(Search)`
  width: 25px;
  height: 25px;
  color: #ffb686;
`;

export const SearchInputBase = styled(InputBase)`
  margin: 0 24px 0 24px;
  width: 100%;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 16px;
`;

export const GoButton = styled(Button)`
  background-color: #ff6600;
  height: 2.5rem;
  width: 13.5rem;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  text-transform: none;
  border-radius: 10px;
  &:hover {
    background-color: #ff5600;
  }
  &:active {
    background-color: #4d148c;
  }
`;
