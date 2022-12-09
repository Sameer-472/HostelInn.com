import { styled, Typography } from "@mui/material";
import FindHostel from "./../FindHostel/FindHostel";

export const RelativeFindHostel = styled(FindHostel)`
  position: relative;
`;

export const TitleMain = styled(Typography)`
  width: fit-content;
  font-family: 'League Spartan', sans-serif;
  font-weight: 800;
  font-size: 64px;
  text-align: center;
  line-height: 60px;
  @media (max-width:650px){
    width: 100%;
    text-align: center;
    font-size:22px;
  }
`;
