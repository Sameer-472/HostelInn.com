import React from "react";
import BookNow from "./BookNow/BookNow";
import MultiCarousel from "./Carousel/MultiCarousel";
import Footer from "./Footer/Footer";
function Home() {
  return (
    <>
      <MultiCarousel />
      <BookNow />
    </>
  );
}

export default Home;
