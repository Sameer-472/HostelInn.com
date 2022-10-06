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

const CardComponent = ({ name, distance, rating, startingFrom }) => {
  const [isFavourite, setIsFavourite] = React.useState(false);
  return (
    <Card sx={{ display: 'flex', width: 412, height: 249, borderRadius: 3 }}>
      <CardMedia
        component='img'
        image={require('../Assets/Hostel-Image.png')}
        sx={{ width: 200 }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
          {isFavourite ? (
            <FavoriteIcon
              sx={{
                alignSelf: 'flex-end',
                color: '#FF6600',
                cursor: 'pointer',
              }}
              onClick={() => setIsFavourite(!isFavourite)}
            />
          ) : (
            <FavoriteBorderIcon
              sx={{ alignSelf: 'flex-end', cursor: 'pointer' }}
              onClick={() => setIsFavourite(!isFavourite)}
            />
          )}
          <Typography
            variant='h6'
            component='div'
            sx={{
              fontSize: 18,
              fontWeight: 700,
              color: '#4D148C',
              fontFamily: '"League Spartan", sans-serif',
            }}
          >
            {name}
          </Typography>
          <Typography
            variant='p'
            component='p'
            sx={{
              fontSize: 12,
              color: '#606060',
              fontWeight: 400,
              fontFamily: "'Lato', sans-serif",
            }}
          >
            {distance}
          </Typography>
          <Button
            variant='raised'
            startIcon={<StarIcon sx={{ color: '#FFD600' }} />}
            sx={{
              backgroundColor: '#4D148C',
              marginTop: '14px',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#4D148C',
                cursor: 'default',
              },
              width: '70px',
              borderRadius: '3px',
            }}
          >
            {rating}
          </Button>
        </CardContent>
        <CardContent
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            display: 'flex',
          }}
        >
          <Typography
            variant='p'
            component='span'
            sx={{
              fontSize: '12px',
              fontWeight: 400,
              fontFamily: '"League Spartan", sans-serif',
              marginBottom: '1px',
            }}
          >
            From
          </Typography>
          <Typography
            variant='h5'
            component='span'
            sx={{
              fontSize: '16px',
              fontWeight: 700,
              fontFamily: '"League Spartan", sans-serif',
              marginLeft: '5px',
              color: '#FF6B00',
            }}
          >
            PKRs
            <Typography
              variant='h2'
              component='span'
              sx={{
                fontSize: '20px',
                fontWeight: 700,
                fontFamily: '"League Spartan", sans-serif',
                marginLeft: '5px',
              }}
            >
              {startingFrom}
            </Typography>
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CardComponent;
