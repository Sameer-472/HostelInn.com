import React from "react";
import MailBox from "../Assets/MailBox.png";
import SendIcon from "../Assets/SendIcon.png";
import {
  BoxMain,
  BoxContent,
  TextBox,
  TitleText,
  DescText,
  SearchBox,
  SearchInputBase,
  StyledButton,
} from "./NewsLetterStyles";

const NewsLetter = () => {
  return (
    <BoxMain>
      <BoxContent>
        <img
          src={MailBox}
          alt='Mail Box'
          style={{ height: "5.5%", width: "5.5%" }}
        />
        <TextBox>
          <TitleText>Subscribe to our newsletter</TitleText>
          <DescText>
            Sign up to our newsletter for deals, inspo and other treats!
          </DescText>
        </TextBox>
        <SearchBox>
          <SearchInputBase
            placeholder='Your email address'
            inputProps={{ "aria-label": "search" }}
          />
          <StyledButton variant='contained'>
            <img src={SendIcon} alt='Send' />
          </StyledButton>
        </SearchBox>
      </BoxContent>
    </BoxMain>
  );
};

export default NewsLetter;
