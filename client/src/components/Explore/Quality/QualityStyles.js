import { Box, styled, Typography } from "@mui/material";

export const QualitiesBoxContainer = styled(Box)`
  display: flex;
  align-items: center;
  margin: 0 1.5em;
`;

export const Item = styled(Box)`
  margin-left: 1em;
`;

export const TypeGraphyBox = styled(Typography)`
  font-family: "Lato", sans-serif;
  padding: 0 0.5em;
  margin-left: 1em;
  text-transform: uppercase;
  font-weight: bold;
  color: #606060;
  &:hover {
    border-bottom: 2px solid #ff6600;
    cursor: pointer;
  }
`;
