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
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
  margin: 0 5px 0 5px;
  height: 249px;
  border-radius: 12px;
  @media screen and (max-width: 600px) {
    /* max-width: 10px; */
  height: 200px;
  }
  /* transform: rotate(90deg); */
  /* transform-origin: right top; */
`;

export const CardImage = styled(CardMedia)`
  width: 200px;
  @media screen and (max-width: 600px) {
    width: 100px;
  }
`;

export const BoxFlex = styled(Box)`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const FlexCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  width: 200px;
  @media screen and (max-width: 600px) {
    /* max-width: 10px; */
  width: 180px;
  }
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
  @media screen and (max-width: 600px) {
   font-size: 15px;
  font-weight: 700;
  }
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
  @media screen and (max-width: 600px) {
   width: 40px;
   font-size: 12px;
  }
`;

export const PriceCard = styled(CardContent)`
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
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'League Spartan', sans-serif;
  margin-left: 5px;
`;
