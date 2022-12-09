import React from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { MenuItem } from "@mui/material";

import {
  FilterContainer,
  FilterLeftBox,
  FilterButton,
  SortButton,
  FilterRightBox,
  MapButton,
} from "./FilterStyles";

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
