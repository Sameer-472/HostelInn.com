import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  styled,
} from '@mui/material';
import {
  FavoriteBorder as FavoriteBorderIcon,
  Favorite as FavoriteIcon,
} from '@mui/icons-material';

export const CardMain = styled(Card)`
  display: flex;
  max-width: 412px;
  margin: 0 15px 0 15px;
  height: 249px;
  border-radius: 12px;
`;

export const CardImage = styled(CardMedia)`
  /* width: 140px;
   */
   width: 35%;
`;

export const BoxFlex = styled(Box)`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 60%;
`;

export const FlexCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  /* width: 200px; */
  width: 110%;
  box-sizing: border-box;
`;

export const AlignedFavoriteBorderIcon = styled(FavoriteBorderIcon)`
  align-self: flex-end;
  cursor: pointer;
`;

export const AlignedFavoriteIcon = styled(FavoriteIcon)`
  align-self: flex-end;
  cursor: pointer;
  color: #ff6600;
`;

export const HostelNameText = styled(Typography)`
  font-size: 18px;
  font-weight: 700;
  color: #4d148c;
  font-family: 'League Spartan', sans-serif;
`;

export const DistanceText = styled(Typography)`
  font-size: 12px;
  color: #606060;
  font-weight: 400;
  font-family: 'Lato', sans-serif;
`;

export const RatingButton = styled(Button)`
  background-color: #4d148c;
  margin-top: 14px;
  color: #fff;
  width: 70px;
  border-radius: 3px;
  &:hover {
    background-color: #4d148c;
    cursor: default;
  }
`;

export const PriceCard = styled(CardContent)`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const FromText = styled(Typography)`
  font-size: 12px;
  font-weight: 400;
  font-family: 'League Spartan', sans-serif;
  margin-bottom: 1px;
`;

export const CurrencyText = styled(Typography)`
  font-size: 16px;
  font-weight: 700;
  font-family: 'League Spartan', sans-serif;
  margin-left: 5px;
  color: #ff6b00;
`;

export const PriceText = styled(Typography)`
  font-size: 20px;
  font-weight: 700;
  font-family: 'League Spartan', sans-serif;
  margin-left: 5px;
`;
