import { Box, styled, TextField, Button } from "@mui/material";

export const FilterContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
`;

export const FilterLeftBox = styled(Box)`
  display: flex;
  align-items: center;
  width: 45%;
`;

export const FilterRightBox = styled(Box)`
  width: 15%;
  margin-right: 1em;
`;

export const FilterButton = styled(Button)`
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
export const SortButton = styled(TextField)`
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

export const MapButton = styled(Button)`
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
