import { Box, Typography, styled } from '@mui/material';
import MainImage from './Assets/Rectangle130.png';

export const BoxMain = styled(Box)`
  background: url(${MainImage}) no-repeat;
  height: 450px;
  padding: 15rem 4rem 15rem 4rem;
  position: relative;
  max-width: 1352px;
`;

export const TitleText = styled(Typography)`
  font-size: 56px;
  font-weight: 700;
  color: #606060;
  font-family: 'League Spartan', sans-serif;
`;

export const OrangeText = styled(Typography)`
  font-size: 56px;
  font-weight: 700;
  color: #ff6600;
  font-family: 'League Spartan', sans-serif;
`;

export const CardContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0 3rem 0;
`;
