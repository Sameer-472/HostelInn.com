import React from "react";
import Rights from "./Rights/Rights";
import NewsLetter from "./NewsLetter/NewsLetter";
import Links from "./Links/Links";
import { Box } from "@mui/material";

function Footer() {
  return (
    <>
      <NewsLetter />
      <Links style={{ marginTop: 30 }} />
      <Rights />
    </>
  );
}

export default Footer;
