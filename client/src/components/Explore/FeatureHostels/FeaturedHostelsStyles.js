import { Box, Typography, styled, Button } from "@mui/material";

export const MainBoxWrapper = styled(Box)`
  max-width: 1352px;
  margin: 0 auto; ;
`;

export const MainBox = styled(Box)`
  /* padding: 5rem 5rem 5rem 5rem; */
  position: relative;
  /* max-width: 1352px; */
`;

export const TitleText = styled(Typography)`
  font-size: 48px;
  font-weight: 700;
  color: #4d148c;
  font-family: "League Spartan", sans-serif;
`;

export const DescriptionText = styled(Typography)`
  font-size: 24px;
  font-weight: 400;
  font-family: "Lato", sans-serif;
`;

export const CardContainter = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 2em;
  /* margin: 3rem 0 3rem 0; */
`;

export const FeaturedTitleText = styled(Typography)`
  color: #ff6600;
  font-size: 24px;
  font-weight: bold;
  margin: 1em 0;
  margin-left: 3.5em;
`;

export const MainHostelContainer = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 2em;
  border-radius: 15px;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 2em;
`;

export const MainHostelImageBox = styled(Box)`
  width: 30%;
  height: 250px;
  object-fit: cover;
  position: relative;
`;

export const MainHostelContainerDetails = styled(Box)`
  width: 40%;
  margin-left: 2em;
`;

export const MainHostelContainerPrice = styled(Box)`
  width: 30%;
  margin-right: 2em;
  border-left: 2px solid #ff6600;
`;
export const MainHostelDetailsReviewContainer = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 2em;
`;

export const PriceCard = styled(Box)`
  display: flex;
  align-items: center;
`;

export const FromText = styled(Typography)`
  color: #606060;
`;

export const CurrencyText = styled(Typography)`
  font-size: 20px;
  font-weight: 700;
  font-family: "League Spartan", sans-serif;
  margin-left: 5px;
  text-transform: uppercase;
  color: #ff6b00;
`;

export const InnerCurrencyText = styled(Typography)`
  font-size: 1.6rem;
  font-weight: 700;
  font-family: "League Spartan", sans-serif;
  margin-left: 5px;
  text-transform: uppercase;
  color: #ff6b00;
`;

export const InnerPriceText = styled(Typography)`
  font-size: 2.5rem;
  font-weight: 700;
  font-family: "League Spartan", sans-serif;
  margin-left: 0.2em;
`;
export const PriceText = styled(Typography)`
  font-size: 25px;
  font-weight: 700;
  font-family: "League Spartan", sans-serif;
  margin-left: 5px;
`;

export const HostelTitleText = styled(Typography)`
  font-size: 2rem;
  color: #4d148c;
  font-weight: bold;
`;

export const DistanceText = styled(Typography)`
  color: #606060;
`;

export const FacilitiesBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
  width: 50%;
`;

export const WifiBox = styled(Box)`
  display: flex;
  align-items: center;
`;

export const WifiText = styled(Typography)`
  margin-left: 0.7em;
  color: #606060;
  font-weight: medium;
`;

export const WaterBox = styled(Box)`
  display: flex;
  align-items: center;
`;

export const WaterText = styled(Typography)`
  margin-left: 0.7em;
  color: #606060;
  font-weight: medium;
`;

export const ElectricCityText = styled(Typography)`
  margin-left: 0.7em;
  color: #606060;
  font-weight: medium;
`;

export const ElectricityBox = styled(Box)`
  display: flex;
  align-items: center;
`;

export const RatingButton = styled(Button)`
  width: 30%;
  background-color: #4d148c;
  color: whitesmoke;
  font-weight: bold;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #4d148c;
    cursor: pointer;
  }
`;

export const RatingText = styled(Typography)`
  margin-top: 1em;
  margin-left: 0.5em;
  font-weight: medium;
  color: #606060;
`;
export const MapButton = styled(Button)`
  background-color: #ff6600;
  color: whitesmoke;
  margin-left: auto;
  display: block;
  width: 50%;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.5em 1em;
  height: 35px;
  &:hover {
    background-color: #ff6600;
    cursor: pointer;
  }
`;
export const PriceMainBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 5em;
  width: 70%;
  margin-left: 6em;
`;

export const S_CurrencyText = styled(Typography)`
  text-transform: lowercase;
  font-weight: bold;
`;

export const ViewButton = styled(Button)`
  background-color: #4d148c;
  font-weight: bold;
  font-size: 1.2rem;
  color: whitesmoke;
  width: 82%;
  border-radius: 10px;
  &:hover {
    background-color: #4d148c;
    cursor: pointer;
  }
`;

export const SliderCountBox = styled(Box)`
  position: absolute;
  top:10%;
  right:0;
  margin-right: .5em;
  background-color: black;
  width: 8%;
  color: whitesmoke;
  padding:.3em .5em;
  border-radius: 10px;
  font-weight: 500;
  font-family: "Lato", sans-serif;
  text-align: center;
  font-size: 18px;
`

export const NextSliderIconBox = styled(Box)`
  position: absolute;
  top: 50%;
  right:0;
  &:hover {
    cursor: pointer;
  }
  margin-right: 8px;
`;

export const PrevSliderIconBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 0;
  &:hover {
    cursor: pointer;
  }
  margin-left: 8px;
`;
