import styled from "@emotion/styled";
import image from "./assets/img.png";
import StripeImage from "./assets/rectangle.png"

export const Image = styled.div`
/* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: "F8F2FF";
  position: relative;
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  height: 700px;
  width: 100%;
  margin: 0 auto;
  padding: 1em;
  /* max-width: 1170px; */
  /* margin-top: 2em; */
  margin-bottom: 11em;
  display: none;
  &::before {
    content: "";
    background-image: url(${StripeImage});
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1000;
    width: 100%;
    height: 1000px;
  }
  @media (min-width:600px){
    display: block;
  }
`;


export const Circle1 = styled.div`
  position: absolute;
  top: 4%;
  left: 31%;
`;
export const Circle2 = styled.div`
  position: absolute;
  top: 50%;
  right: 5%;
`;
export const Circle3 = styled.div`
  position: absolute;
  top: 6%;
    left: 67%;
`;
export const Circle4 = styled.div`
  position: absolute;
  bottom: 10%;
  right: 39%;
`;
export const Circle5 = styled.div`
  position: absolute;
  left: 14%;
  bottom: -1%;
`;
export const Circle6 = styled.div`
  position: absolute;
  top: 26%;
  left: 3%;
`;

