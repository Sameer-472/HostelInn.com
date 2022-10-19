import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography, styled, Button } from "@mui/material";

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
  maxHeight: 400,
  objectFit: "cover",
  width: "100%",
  minHeight: 400,

  //   [theme.breakpoints.down("md")]: {
  //     objectFit: "cover",
  //     height: 180,
  //   },
}));

const Container = styled(Box)`
  width: 70%;
  margin-left: auto;
  position: relative;
  min-height: 400px;
  max-height: 400px;
`;
const H2 = styled(Typography)`
  color: #4d148c;
  font-size: 50px;
  font-weight: 600;
`;
const Hard = styled(Typography)`
  color: #ff6600;
  font-size: 3rem;
  font-weight: 600;
`;
const Btn = styled(Button)`
  text-transform: none;
  background-color: #4d148c;
  text-decoration: none;
  color: white;
  :hover {
    background-color: #4d148c;
  }
`;
const Absolute = styled(Box)(({ theme }) => ({
  position: "absolute",
  marginTop: "-28%",
  marginLeft: "7%",
  [theme.breakpoints.down(1000)]: {
    marginTop: "-42.5%",
    // backgroundColor: "red",
  },
}));

const Text1 = styled(Typography)`
  font-size: 2.5rem;
  font-weight: 600;
`;
const Text2 = styled(Typography)`
  font-size: 2rem;
  font-weight: 600;
`;
function BookNow() {
  return (
    <>
      <Container>
        <Carousel
          style={{ marginLeft: "auto" }}
          // paperProps={{
          //   sx: { width: "90%", marginLeft: "auto", backgroundColor: "orange" },
          // }}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          transitionDuration={2000}
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass='custom-dot-list-style'
          itemClass='carousel-item-padding-40-px'
        >
          <Image src={require("./assets/service1.png")} alt='Slides' />
          <Image src={require("./assets/service2.png")} alt='Slides' />
          <Image src={require("./assets/service3.png")} alt='Slides' />
          <Image src={require("./assets/service4.png")} alt='Slides' />
          <Image src={require("./assets/service5.png")} alt='Slides' />
          <Image src={require("./assets/service6.png")} alt='Slides' />
        </Carousel>
      </Container>

      <Absolute>
        <Text1 gutterBottom>Provide with all</Text1>
        <H2>Basic facilities</H2>
        <Text2 gutterBottom>which you need to survive in your</Text2>
        <Hard>hard days!</Hard>
        <Btn variant='text'> Book Now </Btn>
      </Absolute>
    </>
  );
}

export default BookNow;
