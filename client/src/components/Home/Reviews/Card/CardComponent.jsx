import React from 'react';
import {
  Card,
  Avatar,
  CardContent,
  Typography,
  Rating,
  Box,
} from '@mui/material';

import { cardStyles } from './CardStyles';

const CardComponent = ({ profilePhoto, name, review, rating }) => {
  return (
    <Card sx={cardStyles.main}>
      <Box sx={cardStyles.boxFlex}>
        <Avatar
          alt='Remy Sharp'
          src={profilePhoto}
          sx={cardStyles.avatar}
        />
        <Typography
          variant='h2'
          component='div'
          sx={cardStyles.name}
        >
          {name}
        </Typography>
      </Box>
      <CardContent>
        <Typography
          variant='p'
          component='div'
          sx={cardStyles.review}
        >
          {review}
        </Typography>
        <Box sx={cardStyles.flexRating}>
          <Rating
            sx={{ color: '#FFD600', gap: 1 }}
            name='text-feedback'
            value={rating}
            precision={0.5}
            readOnly
          />
          <Typography
            sx={cardStyles.rating}
          >
            {rating.toFixed(1)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
