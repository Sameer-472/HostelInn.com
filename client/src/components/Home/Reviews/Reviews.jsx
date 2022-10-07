import React from 'react';
import CardComponent from './Card/CardComponent';
import { reviewsData } from './reviewsData';
import { Box, Typography } from '@mui/material';
import { reviewsStyles } from './ReviewsStyles';

const Reviews = () => {
  return (
    <Box
      sx={
        reviewsStyles.main
      }
    >
      <img
        src={require('./Assets/RectangleStrip130.png')}
        alt=''
        style={{
          position: 'absolute',
          top: -25,
          left: 0,
        }}
      />
      <Typography
        variant='h1'
        component='div'
        sx={reviewsStyles.title}
      >
        Find verified hostels with{' '}
        <Typography
          variant='h1'
          component='span'
          sx={reviewsStyles.orangeTitle}
        >
          honest reviews.
        </Typography>
      </Typography>
      <Box
        sx={reviewsStyles.cardContainer}
      >
        {reviewsData.map((reviewer) => (
          <CardComponent
            name={reviewer.name}
            profilePhoto={reviewer.profilePhoto}
            review={reviewer.review}
            rating={reviewer.rating}
            key={reviewer.name}
          />
        ))}
      </Box>
      <img
        src={require('./Assets/RectangleStrip130.png')}
        alt=''
        style={{
          position: 'absolute',
          bottom: -25,
          right: 0,
        }}
      />
    </Box>
  );
};

export default Reviews;
