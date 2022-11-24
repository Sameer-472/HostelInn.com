import React, { useState } from "react";

import { Box, styled, Button } from "@mui/material";
import { marks } from "../marks/marks";
import Slider from "@mui/material/Slider";

const SliderWrapper = styled(Box)`
  max-width: 1000px;
  margin: 2em auto;
`;

const SliderBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 5em;
`;

const LeftRangeButton = styled(Button)`
  width: 15%;
  color: #606060;
  background-color: #ffffff;
  border: 1px solid #606060;
  border-radius: 12px;
  margin-right: 1em;
`;

const RightRangeButton = styled(Button)`
  width: 15%;
  color: #606060;
  background-color: #ffffff;
  border: 1px solid #606060;
  border-radius: 12px;
  margin-left: 1em;
`;

function getText(value) {
  return value;
}

function Rating() {
  const [rangeValue, setRangeValue] = useState([0, 50000]);

  const handleChange = (e, newValue) => {
    setRangeValue(newValue);
  };


 

  return (
    <SliderWrapper>
      <SliderBox>
        <LeftRangeButton
          variant="standard"
          InputProps={{ disableUnderline: true }}
          size="small"
          fullWidth
        >
          {getText(rangeValue[0])}
        </LeftRangeButton>
        <Slider
         size="large"
          getAriaLabel={() => "range"}
          value={rangeValue}
          onChange={handleChange}
          valueLabelDisplay="on"
          getAriaValueText={getText}
          steps={100}
          min={0}
          max={50000}
          marks = {marks}
          sx={{
            color: "#FF6600",
          }}
        />

        <RightRangeButton
          variant="standard"
          InputProps={{ disableUnderline: true }}
          size="small"
          fullWidth
        >
          {getText(rangeValue[1])}
        </RightRangeButton>
      </SliderBox>
    </SliderWrapper>
  );
}

export default Rating;
