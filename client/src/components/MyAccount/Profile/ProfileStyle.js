import { Box, Button } from "@mui/material";
import styled from "@emotion/styled";
import ShapesPng from "./Assets/shapes.png";

export const ProfileBoxWrapper = styled(Box)`
  max-width: 1000px;
  margin: 0 auto;
`;

export const ProfileContainer = styled(Box)`
  position: relative;
  height: 200px;
  width: 100%;
  object-fit: cover;
  background-color: #b7937a;
  margin-bottom: 10em;
  &::before {
    content: "";
    background-image: url(${ShapesPng});
    background-size: cover;
    background-position: cover;
    opacity: 0.7;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 200px;
    filter: grayscale(1);
  }
`;

export const ProfileSectionBox = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  top: 30%;
  z-index: 1000;
`;

export const ProfileImgBox = styled(Box)`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  border: 4px solid #ffb686;
`;

export const ProfileButton = styled(Button)`
  width: 171px;
  height: 32px;
  font-size: 10px;
  text-align: center;
  line-height: 12.1px;
  color: #ffffff;
  background-color: #ff6600;
  border-radius: 5px;
  text-transform: uppercase;
  margin-bottom: 0.5em;
`;

export const imgStyles = {
  maxWidth: "100%",
  borderRadius: "50%",
  height: "auto",
  objectFit: "cover",
};
