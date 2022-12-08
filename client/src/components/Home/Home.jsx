import React from "react";
import BookNow from "./BookNow/BookNow";
import MultiCarousel from "./Carousel/MultiCarousel";
<<<<<<< HEAD
import Footer from "./Footer/Footer";
=======
 import Footer from "./Footer/Footer";
>>>>>>> main
import { ChooseAnimation } from "./ChooiceAnimation/ChooseAnimation";
import FindHostel from "./FindHostel/FindHostel";
import FindYourHome from "./FindYourHome/FindYourHome";
import { MainBody } from "./MainBody/MainBody";
import FeaturedHostels from "./FeatureHostels/FeaturedHostels";
import { Reviews } from "./Reviews/Reviews";
import Navbar from "./Navbar/Navbar";
import ActionAlerts from "../Alert/Alert";
import MainBodyMobile from "./MainBody/MainBodyMobile";

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <MultiCarousel />
      <MainBody />
      {/* <MainBodyMobile /> */}
      <FindHostel />
      <FeaturedHostels />
      <ChooseAnimation style={{ backgroundColor: "orange" }} />
      <Reviews />
      <FindYourHome />
      <BookNow />
      <Footer />
    </>
  );
}

export default Home;
