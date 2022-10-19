import React from "react";
// import Container from '@mui/material/Container';
import { styled } from "@mui/material";
import { mon } from "@mui/material/colors";

const Container = styled("div")({
  backgroundColor: "#F8F2FF",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "30rem",
  fontWeight: "bold",
  fontSize: "77px",
  color: "purple",
  position: "relative",
});

const Circle = styled("div")({
  backgroundColor: "#FF6600",
  width: "44px",
  height: "44px",
  borderRadius: 100,
  borderColor: "transparent",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  position: "absolute",
  left: "1300px",
  top: "500px",
  display: "bl",
});

const Circle2 = styled("div")({
  position: "absolute",
  width: "42px",
  height: "42px",
  left: "278px",
  top: "11px",
  /* Surface */
  background: "#FFB686",
  borderRadius: 100,
});

const Circle3 = styled("div")({
  position: "absolute",
  width: "28px",
  height: "28px",
  left: "278px",
  top: "113px",
  /* Surface */
  background: "#FF6600",
  borderRadius: 100,
});

const Circle4 = styled("div")({
  boxSizing: "border-box",
  position: "absolute",
  width: "56px",
  height: "56px",
  left: "905px",
  top: "30px",
  borderRadius: 100,
  /* Purple color 2 */
  border: "2px solid #4D148C",
});

const Circle7 = styled("div")({
  boxSizing: "border-box",
  position: "absolute",
  width: "39px",
  height: "39px",
  left: "59px",
  top: "80px",
  borderRadius: 100,
  /* Purple color 2 */
  border: "2px solid #4D148C",
});
const Circle5 = styled("div")({
  boxSizing: "border-box",
  position: "absolute",
  width: "56px",
  height: "56px",
  left: "565px",
  top: "462px",
  borderRadius: 100,
  border: "2px solid #FFB686",
});

const Circle6 = styled("div")({
  boxSizing: "border-box",
  position: "absolute",
  width: "48px",
  height: "48px",
  left: "565px",
  top: "42px",
  borderRadius: 100,
  border: "2px solid #FFB686",
});

const Room = styled('div')({
  
})

export const MainBody = () => {
  return (
    <>
      <Container>
        Let's get started!
        <Circle />
        <Circle2 />
        <Circle3 />
        <Circle4 />
        <Circle5 />
        <Circle6 />
        <Circle7 />
      </Container>
    </>
  );
};
