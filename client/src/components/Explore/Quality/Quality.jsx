import React from "react";

import {
  Box,
  styled,
  Typography
} from "@mui/material";

const QualitiesBoxContainer = styled(Box)`
  display: flex;
  align-items: center;
  margin: 0 1.5em;
`;

const Item = styled(Box)`
  margin-left: 1em;
`;

const TypeGraphyBox = styled(Typography)`
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


function Quality() {
  return (
      <QualitiesBoxContainer>
        <Item>
          {" "}
          <TypeGraphyBox variant="body2">Price</TypeGraphyBox>{" "}
        </Item>
        <Item
          sx={{
            borderLeft: "1px solid #B2B2B2",
          }}
        >
          {" "}
          <TypeGraphyBox variant="body2">Room</TypeGraphyBox>{" "}
        </Item>
        <Item
          sx={{
            borderLeft: "1px solid #B2B2B2",
          }}
        >
          {" "}
          <TypeGraphyBox variant="body2">Rating</TypeGraphyBox>{" "}
        </Item>
        <Item
          sx={{
            borderLeft: "1px solid #B2B2B2",
          }}
        >
          {" "}
          <TypeGraphyBox variant="body2">Facilities</TypeGraphyBox>{" "}
        </Item>
        <Item
          sx={{
            borderLeft: "1px solid #B2B2B2",
          }}
        >
          {" "}
          <TypeGraphyBox variant="body2">University</TypeGraphyBox>{" "}
        </Item>
        <Item
          sx={{
            borderLeft: "1px solid #B2B2B2",
          }}
        >
          {" "}
          <TypeGraphyBox variant="body2">Property Type</TypeGraphyBox>{" "}
        </Item>
      </QualitiesBoxContainer>
  );
}

export default Quality;
