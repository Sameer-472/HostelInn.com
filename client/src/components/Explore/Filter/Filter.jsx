import React from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import {
  Box,
  styled,
  TextField,
  Button,
  MenuItem
} from "@mui/material";

const FilterContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
`;

const FilterLeftBox = styled(Box)`
  display: flex;
  align-items: center;
  width: 45%;
`;

const FilterRightBox = styled(Box)`
  width: 15%;
  margin-right: 1em;
`;

const FilterButton = styled(Button)`
  font-family: inherit;
  background-color: #fafafa;
  color: #606060;
  border: 2px solid lightgrey;
  border-radius: 10px;
  margin-right: 1em;
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 1em;
  width: 35%;
  &:hover {
    background-color: #e5dbdb;
  }
`;
const SortButton = styled(TextField)`
  font-family: inherit;
  background-color: #fafafa;
  color: #606060;
  border: 2px solid lightgrey;
  width: 35%;
  margin-right: 1em;
  font-weight: bold;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding-top: 0.5em;
  text-align: center;
  text-transform: uppercase;
  &:hover {
    background-color: #e5dbdb;
  }
`;

const MapButton = styled(Button)`
  font-family: inherit;
  border: 2px solid lightgrey;
  background-color: #fafafa;
  color: #606060;
  font-weight: bold;
  border-radius: 10px;
  text-transform: uppercase;
  &:hover {
    background-color: #e5dbdb;
  }
`;

function Filter() {
  return (
    <FilterContainer>
      <FilterLeftBox>
        <FilterButton
          variant="standard"
          InputProps={{ disableUnderline: true }}
          size="small"
          startIcon={<FilterAltIcon />}
        >
          FILTER
        </FilterButton>
        <SortButton
          value="Sort By"
          select
          size="small"
          variant="standard"
          InputProps={{ disableUnderline: true }}
        >
          <MenuItem value="Sort By">Sort By</MenuItem>
          <MenuItem value="Hoi">Hoi</MenuItem>
          <MenuItem value="Hola">Hola</MenuItem>
        </SortButton>
      </FilterLeftBox>

      <FilterRightBox>
        <MapButton
          variant="standard"
          InputProps={{ disableUnderline: true }}
          size="small"
          fullWidth
        >
          Map
        </MapButton>
      </FilterRightBox>
    </FilterContainer>
  );
}

export default Filter;
