import styled from "@emotion/styled";
import image from "./assets/img.png";

export const Image = styled.div`
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
  margin: 1em auto;
  max-width: 1170px;
  margin-top: 2em;
  margin-bottom: 7em;
  display: none;
  @media (min-width:600px){
    display: block;
  }
 
`;

export const Circle1 = styled.div`
  position: absolute;
  top: -2%;
  left: 31%;
`;
export const Circle2 = styled.div`
  position: absolute;
  top: 50%;
  right: 5%;
`;
export const Circle3 = styled.div`
  position: absolute;
  top: 3%;
  left: 65%;
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

