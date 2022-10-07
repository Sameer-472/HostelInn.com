import React from 'react';
import { CardContent } from '@mui/material';

import {
  CardMain,
  BoxFlex,
  AvatarStyled,
  NameText,
  ReviewText,
  BoxRating,
  RatingStars,
  RatingText,
} from './CardStyles';

const CardComponent = ({ profilePhoto, name, review, rating }) => {
  return (
    <CardMain>
      <BoxFlex>
        <AvatarStyled alt='Remy Sharp' src={profilePhoto} />
        <NameText variant='h2' component='div'>
          {name}
        </NameText>
      </BoxFlex>
      <CardContent>
        <ReviewText variant='p' component='div'>
          {review}
        </ReviewText>
        <BoxRating>
          <RatingStars
            name='text-feedback'
            value={rating}
            precision={0.5}
            readOnly
          />
          <RatingText>{rating.toFixed(1)}</RatingText>
        </BoxRating>
      </CardContent>
    </CardMain>
  );
};

export default CardComponent;
