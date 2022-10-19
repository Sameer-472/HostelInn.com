import { Box, Typography, styled } from '@mui/material';
import BackgroundImage from './Assets/Rectangle130.png';

export const MainBox = styled(Box)`
  background: url(${BackgroundImage}) no-repeat;
  height: 450px;
  padding: 15rem 5rem 15rem 5rem;
  position: relative;
  max-width: 1352px;
`;

export const TitleText = styled(Typography)`
  font-size: 48px;
  font-weight: 700;
  color: #4d148c;
  font-family: 'League Spartan', sans-serif;
`;

export const DescriptionText = styled(Typography)`
  font-size: 24px;
  font-weight: 400;
  font-family: 'Lato', sans-serif;
`;

export const CardContainter = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0 3rem 0;
`;
