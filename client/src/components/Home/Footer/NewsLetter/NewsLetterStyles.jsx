import { Box, Typography, InputBase, Button } from "@mui/material";
import { width } from "@mui/system";
import Rectangle from "../Assets/Rectangle.png";
import styled from "@emotion/styled";

export const BoxMain = styled(Box)`
  background: url(${Rectangle}) no-repeat;

  height: 245px;
  padding: 0 5rem 0 5rem;
  @media screen and (max-width: 800px) {
    padding: 0 10px 0 10px;
    height: 350px;
    background-size: cover;
  }
`;

export const Image = styled.img`
  height: 5.5%;
  width: 5.5%;
  @media screen and (max-width: 800px) {
    height: 12.5%;
    width: 12.5%;
  }
`;

export const BoxContent = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding-top: 2.5rem;
  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const TextBox = styled(Box)`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const TitleText = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-weight: 700;
<<<<<<< HEAD
  font-size: 1.5rem;
  @media screen and (max-width: 600px) {
=======
  font-size: 2rem;
  @media screen and (max-width: 800px) {
>>>>>>> main
    font-family: "Inter", sans-serif;
    font-size: 22px;
    margin: 1em 0;
    font-weight: 600;
    text-align: center;
  }
`;

export const DescText = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-weight: 400;
<<<<<<< HEAD
  font-size: 12px;
  @media screen and (max-width: 600) {
=======
  font-size: 1rem;
  @media screen and (max-width: 800) {
>>>>>>> main
    font-family: "Inter", sans-serif;
    font-size: 18px;
  }
`;

export const SearchBox = styled(Box)`
  width: 40rem;
  height: 55px;
  display: flex;
  align-items: center;
  border-radius: 100px;
  background-color: white;
  @media screen and (max-width: 800px) {
    margin-top: 10px;
    width: 90%;
    text-align: center;
  }
`;

export const SearchInputBase = styled(InputBase)`
  margin: 0 24px 0 24px;
  width: 100%;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 16px;
`;

export const StyledButton = styled(Button)`
  background-color: #fed8bf;
  border-radius: 50px;
  height: 100%;
  width: 15%;
  box-shadow: none;
  &:hover {
    background-color: #fed2bf;
    box-shadow: none;
  }
  &:active {
    background-color: #4d148c;
  }
`;
