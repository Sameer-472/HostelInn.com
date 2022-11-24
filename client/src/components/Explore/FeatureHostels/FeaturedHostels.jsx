import React from "react";
import CardComponent from "./Card/CardComponent";
import { featuredHostelsData } from "./featuredHostelData";
import { mainFeaturedHostelsData } from "./mainFeaturedHostels";
import MainHostelImage from "./Assets/main-hostel-img.png";
import NextIcon from "./Assets/next-icon.png"
import PrevIcon from "./Assets/prev-icon.png"
import WifiIcon from "@mui/icons-material/Wifi";
import BathtubIcon from "@mui/icons-material/Bathtub";
import BoltIcon from "@mui/icons-material/Bolt";
import StarIcon from "@mui/icons-material/Star";
import { Box } from "@mui/material";

import {
  MainBoxWrapper,
  MainBox,
  CardContainter,
  MainHostelContainer,
  MainHostelImageBox,
  MainHostelContainerDetails,
  MainHostelContainerPrice,
  MainHostelDetailsReviewContainer,
  FacilitiesBox,
  HostelTitleText,
  PriceCard,
  FromText,
  DistanceText,
  WifiBox,
  WifiText,
  WaterBox,
  ElectricityBox,
  WaterText,
  ElectricCityText,
  RatingText,
  MapButton,
  PriceMainBox,
  RatingButton,
  ViewButton,
  S_CurrencyText,
  FeaturedTitleText,
  InnerCurrencyText,
  InnerPriceText,
  NextSliderIconBox,
  PrevSliderIconBox,
  SliderCountBox
} from "./FeaturedHostelsStyles";

const FeaturedHostels = () => {
  return (
    <MainBoxWrapper>
      <MainBox>
        <FeaturedTitleText variant="h2" component="div">
          Featured Hostels
        </FeaturedTitleText>
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
        </CardContainter>
      </MainBox>

      <Box>
        {mainFeaturedHostelsData.map(hostel => (
      <MainHostelContainer
        sx={{ boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
        <MainHostelImageBox>
          <SliderCountBox>
              1/8
          </SliderCountBox>
         <NextSliderIconBox>
          <img src={NextIcon} alt="next-slider-icon" />
         </NextSliderIconBox>
         <PrevSliderIconBox>
          <img src={PrevIcon} alt="prev-slider-icon" />
         </PrevSliderIconBox>
          <img
            style={{ width: "100%", height: "100%" }}
            src={MainHostelImage}
            alt="hostel-png"
          />
        </MainHostelImageBox>

        <MainHostelContainerDetails>
          <HostelTitleText variant="h1">{hostel.hostelTitle}</HostelTitleText>
          <DistanceText variant="p" component="p">
             {hostel.distanceText}
          </DistanceText>
          <FacilitiesBox>
            <WifiBox>
              <WifiIcon fontSize="small" sx={{ color: "#FF6600" }} />
              <WifiText variant="p" component="p">
                {hostel.wifiText}
              </WifiText>
            </WifiBox>
            <WaterBox>
              <BathtubIcon fontSize="small" sx={{ color: "#FF6600" }} />
              <WaterText variant="p" component="p">
                {hostel.waterText}
              </WaterText>
            </WaterBox>
            <ElectricityBox>
              <BoltIcon fontSize="small" sx={{ color: "#FF6600" }} />
              <ElectricCityText variant="p" component="p">
                {hostel.electricityText}
              </ElectricCityText>
            </ElectricityBox>
          </FacilitiesBox>

          <MainHostelDetailsReviewContainer>
            <RatingButton variant="standard">
              {" "}
              <StarIcon
                fontSize="large"
                sx={{ color: "#FFD600", marginRight: ".2em" }}
              />{" "}
              {hostel.rating}
            </RatingButton>
            <RatingText variant="p" component="p">
              {hostel.reviewCount} total reviews
            </RatingText>
          </MainHostelDetailsReviewContainer>
        </MainHostelContainerDetails>

        <MainHostelContainerPrice>
          <MapButton variant="standard">MAP</MapButton>
          <PriceMainBox>
            <PriceCard>
              <FromText variant="p">From</FromText>
              <InnerCurrencyText>
                pkr
                <S_CurrencyText component="span">s</S_CurrencyText>
                <InnerPriceText variant="p" component="span">
                  {hostel.price}
                </InnerPriceText>
              </InnerCurrencyText>
            </PriceCard>
            <ViewButton
              variant="contained"
            >
              VIEW
            </ViewButton>
          </PriceMainBox>
        </MainHostelContainerPrice>
      </MainHostelContainer>

        ))}
      </Box>
    </MainBoxWrapper>
  );
};

export default FeaturedHostels;
