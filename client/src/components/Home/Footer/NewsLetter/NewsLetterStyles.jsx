import { Box, styled, Typography, InputBase, Button } from '@mui/material';
import Rectangle from '../assets/Rectangle.png';

export const BoxMain = styled(Box)`
  background: url(${Rectangle}) no-repeat;
  height: 245px;
  padding: 0 5rem 0 5rem;
`;

export const BoxContent = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding-top: 2.5rem;
`;

export const TextBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const TitleText = styled(Typography)`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 2rem;
`;

export const DescText = styled(Typography)`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 1rem;
`;

export const SearchBox = styled(Box)`
  width: 40rem;
  height: 55px;
  display: flex;
  align-items: center;
  border-radius: 100px;
  background-color: white;
`;

export const SearchInputBase = styled(InputBase)`
  margin: 0 24px 0 24px;
  width: 100%;
  font-family: 'Lato', sans-serif;
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
