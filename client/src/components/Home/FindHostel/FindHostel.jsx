import React from "react";
import {
  BoxMain,
  Lablel2Text,
  SearchBox,
  SearchIconWrapper,
  SearchIcon,
  SearchInputBase,
  GoButton,
} from "./FindHostelStyles";

const FindHostel = () => {
  return (
    <BoxMain>
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
    </BoxMain>
  );
};

export default FindHostel;
