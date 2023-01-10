import { styled, Typography,Box } from "@mui/material";
import FindHostel from "./../FindHostel/FindHostel";

export const RelativeFindHostel = styled(FindHostel)`
  position: relative;
`;

export const TitleMain = styled(Typography)`
  width: fit-content;
  font-family: 'League Spartan', sans-serif;
  font-weight: 800;
  font-size: 32px;
  line-height: 60px;
  display: block;
  width: 100%;
  line-height: 0;
  margin-bottom: .5em;
  text-align: center;
  @media (max-width:650px){
    width: 100%;
    text-align: center;
    font-size:22px;
    margin-bottom: 1.7em;
  }
`;

export const TitleSpan = styled(Box)`
display: block;
margin-top: 1em;
@media(max-width:650px){
  display: none;
}
`