// import {styled} from '@mui/material'
import styled from "@emotion/styled"
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
`

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
`

const Animation3 = keyframes`
    from {
        left: 40rem;
        top: 10rem;
}
    to {
        left: 40rem;
        top: 15rem;
    }
`

const Flex = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    /* margin-top: 10px; */
`

const Card1 = styled.div`
    position: relative;
    display: inline;
    top: 20px;
    animation: ${Animation1} 1s ease-in-out infinite alternate;
`
const Card2 = styled.div`
    margin: 10px;
    position: relative;
    left: 1.7rem;
    top: 200px;
    width: fit-content;
    z-index: 2;
    border-radius: 12%;
    animation: ${Animation2} 3s infinite ;
`
const Card3 = styled.div`
    margin: 10px;
    position: relative;
    /* left: 650px;
    top: 250px; */
  animation: ${Animation3} 1s ease-in-out infinite alternate-reverse;

`

export {Flex , Card1 , Card2 , Card3};

