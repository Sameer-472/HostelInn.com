import {
  Card,
  Avatar,
  Typography,
  Rating,
  Box,
  styled,
} from '@mui/material';

export const CardMain = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 385px;
  height: 250px;
  border-radius: 10px;
  padding: 27px;
  box-shadow: 0px 8px 10px 2px rgba(0, 0, 0, 0.25);
`;
export const BoxFlex = styled(Box)`
  display: flex;
`;

export const AvatarStyled = styled(Avatar)`
  width: 100px;
  height: 100px;
  border: 1px solid #4d148c;
  margin-top: 2px;
`;
export const NameText = styled(Typography)`
  font-size: 32px;
  font-weight: 500;
  color: #4d148c;
  font-family: 'League Spartan', sans-serif;
  margin-left: 15px;
  align-self: flex-end;
`;

export const ReviewText = styled(Typography)`
  font-size: 14px;
  font-weight: 500;
  color: #606060;
  font-family: 'Inter', sans-serif;
  margin-top: 10px;
`;
export const BoxRating = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

export const RatingText = styled(Typography)`
  font-size: 24px;
  font-weight: 700;
  color: #4d148c;
  font-family: 'League Spartan', sans-serif;
`;

export const RatingStars = styled(Rating)`
  color: #ffd600;
  gap: 10px;
`;
