import React from 'react';
import FindHostel from './../FindHostel/FindHostel';
import { styled, Typography } from '@mui/material';

const RelativeFindHostel = styled(FindHostel)`
  position: relative;
`;

const TitleMain = styled(Typography)`
  position: absolute;
  width: 620px;
  font-family: 'League Spartan', sans-serif;
  font-weight: 800;
  font-size: 64px;
  text-align: center;
  line-height: 60px;
  left: 50%;
  transform: translateX(-50%);
`;

const FindYourHome = () => {
  return (
    <>
      <TitleMain>find your home away from home</TitleMain>
      <RelativeFindHostel />
    </>
  );
};

export default FindYourHome;
