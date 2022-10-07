import React from 'react';
import CardComponent from './Card/CardComponent';
import { featuredHostelsData } from './featuredHostelData';
import { Box, Typography } from '@mui/material';
import { featuredHostelsStyles } from './FeaturedHostelsStyles';

const FeaturedHostels = () => {
  return (
    <Box sx={featuredHostelsStyles.main}>
      <img
        src={require('./Assets/RectangleStrip130.png')}
        alt=''
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      <Typography
        variant='h2'
        component='div'
        sx={featuredHostelsStyles.title}
      >
        Featured Hostels
      </Typography>
      <Typography
        variant='p'
        component='div'
        sx={featuredHostelsStyles.description}
      >
        Select a top rated featured hostel
      </Typography>
      <Box
        sx={featuredHostelsStyles.cardContainer}
      >
        {featuredHostelsData.map((hostel) => (
          <CardComponent
            name={hostel.name}
            distance={hostel.distance}
            rating={hostel.rating}
            startingFrom={hostel.startingFrom}
            key={hostel.name}
          />
        ))}
      </Box>
      <img
        src={require('./Assets/RectangleStrip130.png')}
        alt=''
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
        }}
      />
    </Box>
  );
};

export default FeaturedHostels;
