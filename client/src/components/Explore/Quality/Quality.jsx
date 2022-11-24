import React from "react";

import { QualitiesBoxContainer, Item, TypeGraphyBox } from "./QualityStyles";

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
