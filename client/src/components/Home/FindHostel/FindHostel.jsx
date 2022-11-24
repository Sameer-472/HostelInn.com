import React from "react";
import {
  BoxMain,
  LabelText,
  SearchBox,
  SearchIconWrapper,
  SearchIcon,
  SearchInputBase,
  GoButton,
} from "./FindHostelStyles";

const FindHostel = () => {
  return (
    <BoxMain>
      <LabelText>Search hostels of your choice!</LabelText>
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
    </BoxMain>
  );
};

export default FindHostel;
