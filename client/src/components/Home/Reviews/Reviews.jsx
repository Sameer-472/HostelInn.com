import React from 'react';
import CardComponent from './Card/CardComponent';
import { reviewsData } from './reviewsData';
import { BoxMain, TitleText, OrangeText, CardContainer } from './ReviewsStyles';

export const Reviews = () => {
  return (
    <BoxMain>
      <TitleText variant='h1' component='div'>
        Find verified hostels with
        <OrangeText variant='h1' component='span'>
          {' '}
          honest reviews.
        </OrangeText>
      </TitleText>
      <CardContainer>
        {reviewsData.map((reviewer) => (
          <CardComponent
            name={reviewer.name}
            profilePhoto={reviewer.profilePhoto}
            review={reviewer.review}
            rating={reviewer.rating}
            key={reviewer.name}
          />
        ))}
      </CardContainer>
    </BoxMain>
  );
};
