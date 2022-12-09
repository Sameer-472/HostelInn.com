import { Box, Typography, styled } from '@mui/material';
import MainImage from './Assets/Rectangle130.png';

export const BoxMain = styled(Box)`
  background: url(${MainImage}) no-repeat;
  height: 450px;
  padding: 15rem 4rem 15rem 4rem;
  position: relative;
  max-width: 1352px;

  @media screen and (max-width: 520px) {
    padding: 15rem 1rem 15rem 1rem;
  }
`;

export const TitleText = styled(Typography)`
  font-size: 56px;
  font-weight: 700;
  color: #606060;
  font-family: 'League Spartan', sans-serif;
  @media screen and (max-width: 630px) {
    font-size: 22px;
  }
`;

export const OrangeText = styled(Typography)`
  font-size: 56px;
  font-weight: 700;
  color: #ff6600;
  font-family: 'League Spartan', sans-serif;
  @media screen and (max-width: 630px) {
    display: block;
    font-size: 22px;
  }
`;

export const CardContainer = styled(Box)`
  display: inline-flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 100%;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 600px) {
    margin: 3rem 0 3rem 0;
  }
`;
