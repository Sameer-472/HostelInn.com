import React from 'react';
import CardComponent from "./Card/CardComponent";
import { featuredHostelsData } from './featuredHostelData';
import { Box } from '@mui/material';

const FeaturedHostels = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mx: '5rem', my: '3rem' }}>
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
  );
}

export default FeaturedHostels