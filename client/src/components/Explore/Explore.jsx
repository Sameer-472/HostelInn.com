import React, { useState } from "react";
import "./explore.css"
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {
  Box,
  styled,
  TextField,
  Button,
  Typography,
  MenuItem,
  InputAdornment
} from "@mui/material";
import "../../App.css"

import Filter from "./Filter/Filter";
import Quality from "./Quality/Quality";
import Rating from "./Rating/Rating";
import FeaturedHostels from "./FeatureHostels/FeaturedHostels";

const ExploreContainer = styled(Box)`
  background-color: #fed8bf;
  padding: 2em 1em;
`;

const ExploreWrapper = styled(Box)`
  max-width: 1352px;
  margin: 0 auto;
`;

const ExploreFlexContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

const SecondaryFlexContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 40%;
`;

const ThirdFlexContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 18%;
`;

const FourthFlexContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 18%;
`;

const FifthFlexContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 18%;
  margin-top: 1.3em;
`;

const Text = styled(Typography)`
  color: #4d148c;
  font-weight: bold;
  margin-left: 1em;
  margin-bottom:.2em;
  text-transform: uppercase;
`;

const InputField = styled(TextField)`
  border: none;
  box-shadow: 4px 4px 4px 0px #00000026 inset;
  background-color: whitesmoke;
  border-radius: 60px;
  display: flex;
  align-items: center;
  font-family: "Lato", sans-serif;
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 1em;
  height: 55px;
  box-sizing: border-box;
`;

const ButtonStyle = styled(Button)`
  font-family: inherit;
  background-color: #ff6600;
  color: whitesmoke;
  height: 55px;
  border-radius: 15px;
  &:hover {
    background-color: #cd622d;
  }
`;

function Explore() {
  const [value, setValue] = useState("");
  const [selectInputValue, setSelectInputValue] = useState("1");

  return (
    <Box>
      <ExploreContainer>
        <ExploreWrapper>
          <ExploreFlexContainer>
            <SecondaryFlexContainer>
              <Text variant="body2">Location</Text>
              <Box>
                <InputField
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                  type="text"
                  size="small"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Jamshoro,Pakistan"
                  variant="standard"
                  InputProps={{ disableUnderline: true,  }}
                  sx={{
                    fontWeight:"bold",
                    color: "#606060"
                  }}
                ></InputField>
              </Box>
            </SecondaryFlexContainer>

            <ThirdFlexContainer>
              <Text variant="body2">Check in</Text>
              <Box>
                <InputField
                  variant="standard"
                  fullWidth
                  type="date"
                  size="small"
                  InputProps={
                    { 
                      disableUnderline: true,
                      startAdornment: <InputAdornment position="start"> <CalendarMonthIcon htmlColor="#ff6600"
                      sx={{
                        marginRight:".5em",
                        marginBottom:".2em"
                      }}
                      /> </InputAdornment> 
                    }}
                ></InputField>
              </Box>
            </ThirdFlexContainer>

            <FourthFlexContainer>
              <Text variant="body2">Persons</Text>
              <Box>
                <InputField
                  fullWidth
                  select
                  size="small"
                  value={selectInputValue}
                  onChange={(e) => setSelectInputValue(e.target.value)}
                  variant="standard"
                  InputProps={
                    { 
                      disableUnderline: true,
                      startAdornment: <InputAdornment position="start"> <PersonIcon htmlColor="#ff6600"
                      sx={{
                        marginRight:"1.5em",
                        marginBottom:".2em"
                      }}
                      /> </InputAdornment>
                    }}
                >
                  <MenuItem   sx={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    
                  }} value="1">1</MenuItem>
                  <MenuItem   sx={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    
                  }} value="2">2</MenuItem>
                  <MenuItem   sx={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    
                  }} value="3">3</MenuItem>
                </InputField>
              </Box>
            </FourthFlexContainer>

            <FifthFlexContainer>
              <ButtonStyle fullWidth>Search</ButtonStyle>
            </FifthFlexContainer>
          </ExploreFlexContainer>
        </ExploreWrapper>
      </ExploreContainer>

      {/* Filter Component  */}
      <Box>
        <ExploreWrapper>
          <Filter />
        </ExploreWrapper>
      </Box>

      <Box mt={6}>
        <ExploreWrapper>
          <Quality />
        </ExploreWrapper>
      </Box>

      <Box
        sx={{
          backgroundColor: "#FAFAFA",
          padding: "1em",
          marginTop: "1em",
        }}
      >
        <Rating />
      </Box>

      <FeaturedHostels/>
    </Box>
  );
}

export default Explore;
