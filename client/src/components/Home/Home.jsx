import React from "react";
import BookNow from "./BookNow/BookNow";
import MultiCarousel from "./Carousel/MultiCarousel";
import Footer from "./Footer/Footer";
import FeaturedHostels from './FeatureHostels/FeaturedHostels';
import FindYourHome from './FindYourHome/FindYourHome';
import { MainBody } from './MainBody/MainBody';
import FindHostel from './FindHostel/FindHostel';
import { ChooseAnimation } from './ChooiceAnimation/ChooseAnimation';
import Reviews from './Reviews/Reviews';
function Home() {
  return (
    <>
      <MultiCarousel />
      {/* <MainBody /> */}
      <FindHostel />
      <FeaturedHostels />
      {/* <ChooseAnimation /> */}
      <Reviews />
      <FindYourHome />
      <BookNow />
    </>
  );
}

export default Home;