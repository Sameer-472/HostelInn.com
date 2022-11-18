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
        left: -1rem;
        top: 10rem;
}
    to {
        left: -1rem;
        top: 15rem;
    }
`

const Flex = styled.div`
    display: flex;
    justify-content: center;
`

const Card1 = styled.div`
    position: relative;
    display: inline;
    top: 20px;
    animation: ${Animation1} 1s ease-in-out infinite alternate;
    /* width: 100px; */
`
const Image1 = styled.img`
        width: 200px;
        height: 350px;
        @media screen and (max-width: 600px) {
            width: 200px;
            height: 300px;    
        } 
`
const Image2 = styled.img`
       width: 200px;
        height: 350px;
         @media screen and (max-width: 600px) {
            width: 200px;
            height: 300px;    
        }
`
const Image3 = styled.img`
       width: 200px;
        height: 350px;
         @media screen and (max-width: 600px) { 
            display: none;
        } 
`
const Card2 = styled.div`
    margin: 10px;
    position: relative;
    left: 1.7rem;
    top: 100px;
    width: fit-content;
    z-index: 2;
    height: fit-content;
    border-radius: 12%;
    animation: ${Animation2} 3s infinite ;
`
const Card3 = styled.div`
    position: relative;
  animation: ${Animation3} 1s ease-in-out infinite alternate-reverse;
`
// const Card1 = styled.div`
//     position: relative;
//     display: inline;
//     top: 20px;
//     animation: ${Animation1} 1s ease-in-out infinite alternate;
// `
// const Card2 = styled.div`
//     margin: 10px;
//     position: relative;
//     left: 1.7rem;
//     top: 100px;
//     width: fit-content;
//     z-index: 2;
//     height: fit-content;
//     border-radius: 12%;
//     animation: ${Animation2} 3s infinite ;
// `
// const Card3 = styled.div`
//     position: relative;
//   animation: ${Animation3} 1s ease-in-out infinite alternate-reverse;

// `



export {Flex , Card1 , Card2 , Card3 , Image1 , Image2 , Image3};




// const ColumnText = styled("img")(({theme})=>({
//     fontSize: '14px',
//     verticalAlign: 'baseline',
    
//    ' & > td' : {
//         fontSize: '14px',
//         marginTop: '10px',
//         border:'none',
//     },
//     [theme.breakpoints.down('md')]:{
//     display:'flex',
//     flexDirection:'column',
//     },
//     [theme.breakpoints.down('xs')]:{
//         ' & > td ':{
//             width:'250px',
//         } 
// },
// }))