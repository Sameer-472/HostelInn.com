import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import RectangleIcon from "./assets/rectangle.png";

export const WrapperBox = styled(Box)`
  width: 100%;
  background-color: whitesmoke;
  display: none;
  @media (max-width:600px){
    display: block;
  }
`;

export const FlashSaleBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1em;
  padding-left: 1em;
  padding-right: 1em;
  margin-bottom: 1em;
`;

export const FlashSaleText = styled(Typography)`
  text-transform: uppercase;
  font-size: 1.2rem;
  color: #606060;
  font-weight: 500;
`;
export const BookNowLink = styled(NavLink)`
  color: #ff6600;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const SalePercentageBox = styled(Box)`
  width: 100%;
  background-color: #ff6600;
  padding: 1em 2em;
  color: whitesmoke;
  box-sizing: border-box;
`;

export const SalePercentageText = styled(Typography)`
  color: whitesmoke;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 700;
`;

export const MainBodyContainer = styled(Box)`
  /* background-color: #e5cdff; */
  background-image: url(${RectangleIcon});
  background-size: cover;
  background-position: center;
  padding: 0 1em;
`;

export const MainHeadingText = styled(Typography)`
  text-transform: uppercase;
  text-align: center;
  color: #4d148c;
  font-size: 1.5rem;
  font-weight: bold;
  padding-top: 0.5em;
`;

export const FlexBoxWrapper = styled(Box)`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: .5em 0.5em;
  background-color: whitesmoke;
  margin: 0.8em 0;
  border-radius: 15px;
`;

export const FlexContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftBox = styled(Box)`
  width: 30%;
  margin-right: 1em;
`;

export const RightBox = styled(Box)`
  width: 58%;
`;

export const RighBoxttitleText = styled(Typography)`
  color: #ff6600;
  font-family: "Lato", sans-serif;
  letter-spacing: 1px;
  font-size: 1rem;
  font-weight: bold;
`;

export const RightBoxParaText = styled(Typography)`
  color: #393939;
  margin-top: 0.7em;
  line-height: 16px;
  font-weight: 400;
`;
