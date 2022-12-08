import { Box, Typography, styled } from "@mui/material";
import BackgroundImage from "./Assets/Rectangle130.png";

export const MainBox = styled(Box)`
  background: url(${BackgroundImage}) no-repeat;
  height: 450px;
  padding: 15rem 1rem 15rem 1rem;
  position: relative;
  max-width: 1500px;
  /* overflow-x: scroll; */
  /* background-color: red; */
`;

export const RectangleImageBox = styled(Box)`
  display: block;
  position: absolute;
  top: 1%;
  right: 13%;
  height: 180px;
  width: 100%;
  @media (max-width: 650px) {
    top: 9%;
    height: 120px;
  }
`;

export const BottomRectangleImageBox = styled(Box)`
  display: block;
  position: absolute;
  bottom: 1%;
  left: 13%;
  height: 174px;
  width: 100%;
  @media (max-width: 650px) {
    height: 107px;
    bottom: 0;
  }
`;

export const TitleText = styled(Typography)`
  font-size: 48px;
  font-weight: 700;
  color: #4d148c;
  font-family: "League Spartan", sans-serif;
  @media (max-width: 650px) {
    font-size: 22px;
    text-align: center;
  }
`;

export const DescriptionText = styled(Typography)`
  font-size: 24px;
  font-weight: 400;
  font-family: "Lato", sans-serif;
  @media (max-width: 650px) {
    font-size: 16px;
    text-align: center;
  }
`;

export const CardContainter = styled(Box)`
  display: inline-flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  -ms-overflow-style: none;
  margin: 3rem 0 3rem 0;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;
