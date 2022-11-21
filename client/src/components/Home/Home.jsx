import React from "react";
import BookNow from "./BookNow/BookNow";
import MultiCarousel from "./Carousel/MultiCarousel";
// import Footer from "./Footer/Footer";
import { ChooseAnimation } from "./ChooiceAnimation/ChooseAnimation";
import FindHostel from "./FindHostel/FindHostel";
import FindYourHome from "./FindYourHome/FindYourHome";
import { MainBody } from "./MainBody/MainBody";
import FeaturedHostels from "./FeatureHostels/FeaturedHostels";
import { Reviews } from "@mui/icons-material";
import ActionAlerts from "../Alert/Alert";
// import ActionAlerts from "../Alert/Alert";
function Home() {
  return (
    <>
      <MultiCarousel />
      <MainBody />
      <FindHostel />
      <FeaturedHostels />
      <ChooseAnimation style={{ backgroundColor: "orange" }} />
      <Reviews />
      <FindYourHome />
      <BookNow />
    </>
  );
}

export default Home;
