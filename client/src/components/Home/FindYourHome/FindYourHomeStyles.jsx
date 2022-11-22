import { styled, Typography } from "@mui/material";
import FindHostel from "./../FindHostel/FindHostel";

export const RelativeFindHostel = styled(FindHostel)`
  position: relative;
`;

export const TitleMain = styled(Typography)`
  /* position: absolute; */
  width: fit-content;
  font-family: "League Spartan", sans-serif;
  font-weight: 800;
  font-size: 64px;
  text-align: center;
  /* line-height: 60px; */
  /* left: 50%; */
  /* transform: translateX(-50%); */
  @media (max-width: 600px) {
    text-align: center;
    font-weight: 600;
    font-size: 25px;
    /* margin-bottom: 70px; */
    font-family: "League Spartan", sans-serif;
  }
`;
