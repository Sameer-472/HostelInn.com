import React from "react";
import CardComponent from "./Card/CardComponent";
import { featuredHostelsData } from "./featuredHostelData";
import StripImage from "./Assets/RectangleStrip130.png";
import {
  MainBox,
  TitleText,
  DescriptionText,
  CardContainter,
} from "./FeaturedHostelsStyles";

const FeaturedHostels = () => {
  return (
    <MainBox>
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
      {/* <img
        src={StripImage}
        alt=''
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
        }}
      /> */}
    </MainBox>
  );
};

export default FeaturedHostels;
