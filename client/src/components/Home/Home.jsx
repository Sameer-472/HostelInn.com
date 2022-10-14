import React from "react";
import BookNow from "./BookNow/BookNow";
import MultiCarousel from "./Carousel/MultiCarousel";
// import Footer from "./Footer/Footer";
import { ChooseAnimation } from "./ChooiceAnimation/ChooseAnimation";
import { MainBody } from "./MainBody/MainBody";
function Home() {
  return (
    <>
      <MultiCarousel />
      <MainBody/>
      <ChooseAnimation style={{backgroundColor: 'orange'}}/>
      <BookNow />
    </>
  );
}

export default Home;
