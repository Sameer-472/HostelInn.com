import React from "react";
import CardComponent from "./Card/CardComponent";
import { reviewsData } from "./reviewsData";
import {
  BoxMain,
  TitleText,
  OrangeText,
  CardContainer,
  StripeImageBox,
  BottomStripeImageBox,
} from "./ReviewsStyles";
import StripeImage from "./Assets/RectangleStrip130.png";

export const Reviews = () => {
  return (
    <BoxMain>
      <StripeImageBox>
        <img style={{ height: "100%" }} src={StripeImage} alt="stripe-image" />
      </StripeImageBox>
      <BottomStripeImageBox>
        <img style={{ height: "100%" }} src={StripeImage} alt="stripe-image" />
      </BottomStripeImageBox>
      <TitleText variant="h1" component="div">
        Find verified hostels with
        <OrangeText variant="h1" component="span">
          {" "}
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
