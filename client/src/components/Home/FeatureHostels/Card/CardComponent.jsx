import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from '@mui/material';
import {
  FavoriteBorder as FavoriteBorderIcon,
  Favorite as FavoriteIcon,
  Star as StarIcon,
} from '@mui/icons-material';

import { cardStyles } from './CardStyles';

const CardComponent = ({ name, distance, rating, startingFrom }) => {
  const [isFavourite, setIsFavourite] = React.useState(false);
  return (
    <Card sx={cardStyles.main}>
      <CardMedia
        component='img'
        image={require('../Assets/Hostel-Image.png')}
        sx={{ width: 200 }}
      />
      <Box sx={cardStyles.boxFlex}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
          {isFavourite ? (
            <FavoriteIcon
              sx={cardStyles.favouriteIcon}
              onClick={() => setIsFavourite(!isFavourite)}
            />
          ) : (
            <FavoriteBorderIcon
              sx={cardStyles.favouriteBorderIcon}
              onClick={() => setIsFavourite(!isFavourite)}
            />
          )}
          <Typography variant='h6' component='div' sx={cardStyles.hostelName}>
            {name}
          </Typography>
          <Typography variant='p' component='p' sx={cardStyles.distance}>
            {distance}
          </Typography>
          <Button
            variant='raised'
            startIcon={<StarIcon sx={{ color: '#FFD600' }} />}
            sx={cardStyles.ratingButton}
          >
            {rating}
          </Button>
        </CardContent>
        <CardContent sx={cardStyles.pricingLabel}>
          <Typography variant='p' component='span' sx={cardStyles.from}>
            From
          </Typography>
          <Typography variant='h5' component='span' sx={cardStyles.currency}>
            PKRs
            <Typography variant='h2' component='span' sx={cardStyles.price}>
              {startingFrom}
            </Typography>
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CardComponent;
