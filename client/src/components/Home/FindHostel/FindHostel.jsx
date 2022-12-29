import React from "react";
import {
  BoxMain,
  Lablel2Text,
  SearchBox,
  SearchIconWrapper,
  SearchIcon,
  SearchInputBase,
  GoButton,
  MarginBox
} from "./FindHostelStyles";

const FindHostel = () => {
  return (
    <BoxMain>
      {/* <MarginBox> */}
      <Lablel2Text>Search hostels of your choice!</Lablel2Text>
      <SearchBox>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <SearchInputBase
          placeholder="Enter Location"
          inputProps={{ "aria-label": "search" }}
        />
      </SearchBox>
      <GoButton variant="contained">Let's go</GoButton>
      {/* </MarginBox> */}
    </BoxMain>
  );
};

export default FindHostel;
