// import {styled} from '@mui/material'
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const Animation1 = keyframes`
    from {
        left: 60px;
        top: 80px
}
    to {
        left: 60px;
        top: 160px
    }
`;

const Animation2 = keyframes`
   30% {
    background-color: purple;
    border: 15px solid purple;
   }
   0% {
    background-color: purple;
    border: 15px solid purple;
   }
   60% {
    background-color: white;
    border: 15px solid white;
   }
   70% {
    background-color: white;
    border: 15px solid white;
   }
   100%{
    background-color: darkorange;
    border: 15px solid darkorange;
   }
`;

const Animation3 = keyframes`
    from {
        left: -1rem;
        top: 10rem;
}
    to {
        left: -1rem;
        top: 15rem;
    }
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 750) {
    padding: 0px 10px;
  }
`;

export const SpanText = styled.span` 
  font-size: 3rem;
  font-weight: bolder;
 @media (max-width: 650px){
   font-size:22px;
 }
`

export const ChoiceText = styled.span`
 font-size: 40px;
 font-weight: bolder;
 color: darkorange;
 @media(max-width:650px){
  display: inline-block;
  margin-left:.3em;
   font-size: 22px;
   font-weight: bold;
 }
`

const Card1 = styled.div`
  position: relative;
  display: inline;
  top: 20px;
  height: fit-content;
  animation: ${Animation1} 1s ease-in-out infinite alternate;
`;
const Image1 = styled.img`
  width: 200px;
  height: 350px;
  @media screen and (max-width: 600px) {
    width: 160px;
    height: 300px;
    left: -36px;
    position: relative;
  }
`;
const Image2 = styled.img`
  width: 200px;
  height: 350px;
  @media screen and (max-width: 600px) {
    width: 160px;
    height: 300px;
  }
`;
const Image3 = styled.img`
  width: 200px;
  height: 350px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
const Card2 = styled.div`
  margin: 10px;
  position: relative;
  top: 100px;
  width: fit-content;
  z-index: 2;
  height: fit-content;
  border-radius: 12%;
  animation: ${Animation2} 3s infinite;
`;
const Card3 = styled.div`
  position: relative;
  animation: ${Animation3} 1s ease-in-out infinite alternate-reverse;
`;

export { Flex, Card1, Card2, Card3, Image1, Image2, Image3 };
