import React from 'react';
import CardComponent from './Card/CardComponent';
import { featuredHostelsData } from './featuredHostelData';
import StripImage from './Assets/RectangleStrip130.png';

import {
  MainBox,
  TitleText,
  DescriptionText,
  CardContainter,
  RectangleImageBox,
  BottomRectangleImageBox
} from './FeaturedHostelsStyles';

const FeaturedHostels = () => {
  return (
    <MainBox>
      <RectangleImageBox>
        <img style={{height:"100%"}} src={StripImage} alt="stripe-image" />
      </RectangleImageBox>

      <BottomRectangleImageBox>
        <img style={{height:"100%"}} src={StripImage} alt="stripe-image" />
      </BottomRectangleImageBox>

      <TitleText variant='h2' component='div'>
        Featured Hostels
      </TitleText>
      <DescriptionText variant='p' component='div'>
        Select a top rated featured hostel
      </DescriptionText>
      <CardContainter>
        {featuredHostelsData.map((hostel) => (
          <CardComponent
            name={hostel.name}
            distance={hostel.distance}
            rating={hostel.rating}
            startingFrom={hostel.startingFrom}
            key={hostel.name}
          />
        ))}
        {featuredHostelsData.map((hostel) => (
          <CardComponent
            name={hostel.name}
            distance={hostel.distance}
            rating={hostel.rating}
            startingFrom={hostel.startingFrom}
            key={hostel.name}
          />
        ))}
      </CardContainter>
    </MainBox>
  );
};

export default FeaturedHostels;
