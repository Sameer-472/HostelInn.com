import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styled } from "@mui/material";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Image = styled("img")(({ theme }) => ({
  maxHeight: 450,
  width: "100%",
  objectFit: "cover",
  //   [theme.breakpoints.down("md")]: {
  //     objectFit: "cover",
  //     height: 180,
  //   },
}));
function MultiCarousel() {
  return (
    <>
      <Carousel
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1500}
        transitionDuration={2000}
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px'
      >
        <Image src={require("./assets/frame1.png")} alt='Slides' />
        <Image src={require("./assets/frame2.png")} alt='Slides' />
        <Image src={require("./assets/frame3.png")} alt='Slides' />
      </Carousel>
    </>
  );
}

export default MultiCarousel;
