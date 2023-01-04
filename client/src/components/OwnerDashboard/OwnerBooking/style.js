import styled from "@emotion/styled";
import {Box, Button,Typography} from '@mui/material'

import TableCell from '@mui/material/TableCell';


export const BookingText = styled(Typography)`
margin: 1em;
font-family: 'League Spartan',sans-serif;
font-weight: 700;
color: #393939;
  font-size: 2rem;
`

export const TableHeading = styled(TableCell)` 
font-family: "Lato",sans-serif;
 color: rgba(255, 102, 0, 1);
 text-transform: capitalize;
;
`

export const TableItems = styled(TableCell)`
font-family: "Lato",sans-serif;
text-transform: capitalize;
color:rgba(96, 96, 96, 1);
`

export const ButtonContainer = styled(Box)` 
 display: flex;
 justify-content: space-between;
 align-items: center;
`
export const AcceptButton = styled(Button)`
width: 47%;
display: flex;
justify-content: center;
align-items: center;
color: #FFFFFF;
background: rgba(77, 20, 140, 1);
&:hover{
    background-color:  rgba(77, 20, 140, 1);
    cursor: pointer;
}
font-family: "Lato",sans-serif;
font-weight: 600;
text-transform: capitalize;
`

export const RejectButton = styled(Button)` 
width: 47%;
display: flex;
justify-content: center;
align-items: center;
background: rgba(183, 183, 183, 1);
&:hover{
    background: rgba(183, 183, 183, 1);
    cursor: pointer;
}
color: #FFFFFF;
font-family: "Lato",sans-serif;
font-weight: 600;
text-transform: capitalize;
`