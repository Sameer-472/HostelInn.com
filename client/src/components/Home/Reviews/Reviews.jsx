import React from "react";
import CardComponent from "./Card/CardComponent";
import { reviewsData } from "./reviewsData";
import { BoxMain, TitleText, OrangeText, CardContainer } from "./ReviewsStyles";

const Reviews = () => {
  return (
    <BoxMain>
      <img
        src={require("./Assets/RectangleStrip130.png")}
        alt=''
        style={{
          position: "absolute",
          top: -25,
          left: 0,
        }}
      />
      <TitleText variant='h1' component='div'>
        Find verified hostels with
        <OrangeText variant='h1' component='span'>
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
      <img
        src={require("./Assets/RectangleStrip130.png")}
        alt=''
        style={{
          position: "absolute",
          bottom: -25,
          right: 0,
        }}
      />
    </BoxMain>
  );
};

export default Reviews;
