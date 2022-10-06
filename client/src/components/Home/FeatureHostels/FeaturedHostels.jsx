import React from 'react';
import CardComponent from './Card/CardComponent';
import { featuredHostelsData } from './featuredHostelData';
import { Box, Typography } from '@mui/material';

const FeaturedHostels = () => {
  return (
    <Box
      sx={{
        background: `url(${require('./Assets/Rectangle130.png')}) no-repeat`,
        height: '900px',
        px: '5rem',
        py: '15rem',
      }}
    >
      <Typography
        variant='h2'
        component='div'
        sx={{
          fontSize: 48,
          fontWeight: 700,
          color: '#4D148C',
          fontFamily: '"League Spartan", sans-serif',
        }}
      >
        Featured Hostels
      </Typography>
      <Typography
        variant='p'
        component='div'
        sx={{
          fontSize: 24,
          fontWeight: 400,
          fontFamily: "'Lato', sans-serif",
        }}
      >
        Select a top rated featured hostel
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          my: '3rem',
        }}
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
    </Box>
  );
};

export default FeaturedHostels;
