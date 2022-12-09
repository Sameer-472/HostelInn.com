import React from "react";
import Frame1 from "./assets/Frame1.png";
import Frame2 from "./assets/Frame2.png";
import Frame3 from "./assets/Frame3.png";
import Frame4 from "./assets/Frame4.png";
import Frame5 from "./assets/Frame5.png";
import Frame6 from "./assets/Frame6.png";

import {
  WrapperBox,
  FlashSaleBox,
  FlashSaleText,
  BookNowLink,
  SalePercentageBox,
  SalePercentageText,
  MainBodyContainer,
  MainHeadingText,
  FlexBoxWrapper,
  FlexContainer,
  LeftBox,
  RightBox,
  RighBoxttitleText,
  RightBoxParaText,
} from "./mainBodyMobileStyles";

function MainBodyMobile() {
  return (
    <WrapperBox>
      <FlashSaleBox>
        <FlashSaleText component="p" variant="p">
          flash sale
        </FlashSaleText>
        <BookNowLink>book now</BookNowLink>
      </FlashSaleBox>

      <SalePercentageBox>
        <SalePercentageText>
          AVAIL 50% OFF ON ALL BOOKING FOR 1 MONTH WITH HOSTELIN
        </SalePercentageText>
      </SalePercentageBox>

      <MainBodyContainer>
        <MainHeadingText component="h2" variant="h2">
          We provide you with
        </MainHeadingText>

        <FlexBoxWrapper>
          <FlexContainer>
            <LeftBox>
              <img width={"100px"} src={Frame5} alt="frame-5" />
            </LeftBox>
            <RightBox>
              <RighBoxttitleText component="h3" variant="h3">
                Budget friendly plans
              </RighBoxttitleText>
              <RightBoxParaText component="p" variant="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </RightBoxParaText>
            </RightBox>
          </FlexContainer>
        </FlexBoxWrapper>

        <FlexBoxWrapper>
          <FlexContainer>
            <LeftBox sx={{ order: 2 }}>
              <img width={"100px"} src={Frame3} alt="frame-3" />
            </LeftBox>
            <RightBox sx={{ order: 1 }}>
              <RighBoxttitleText component="h3" variant="h3">
                Perfect hostel location
              </RighBoxttitleText>
              <RightBoxParaText component="p" variant="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </RightBoxParaText>
            </RightBox>
          </FlexContainer>
        </FlexBoxWrapper>

        <FlexBoxWrapper>
          <FlexContainer>
            <LeftBox>
              <img width={"100px"} src={Frame2} alt="frame-2" />
            </LeftBox>
            <RightBox>
              <RighBoxttitleText component="h3" variant="h3">
                Accessible facilities
              </RighBoxttitleText>
              <RightBoxParaText component="p" variant="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </RightBoxParaText>
            </RightBox>
          </FlexContainer>
        </FlexBoxWrapper>

        <FlexBoxWrapper>
          <FlexContainer>
            <LeftBox sx={{ order: 2 }}>
              <img width={"100px"} src={Frame4} alt="frame-4" />
            </LeftBox>
            <RightBox sx={{ order: 1 }}>
              <RighBoxttitleText component="h3" variant="h3">
                Comfortable space
              </RighBoxttitleText>
              <RightBoxParaText component="p" variant="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </RightBoxParaText>
            </RightBox>
          </FlexContainer>
        </FlexBoxWrapper>

        <FlexBoxWrapper>
          <FlexContainer>
            <LeftBox>
              <img width={"100px"} src={Frame6} alt="frame-6" />
            </LeftBox>
            <RightBox>
              <RighBoxttitleText component="h3" variant="h3">
                Online and instant bookings
              </RighBoxttitleText>
              <RightBoxParaText component="p" variant="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </RightBoxParaText>
            </RightBox>
          </FlexContainer>
        </FlexBoxWrapper>

        <FlexBoxWrapper>
          <FlexContainer>
            <LeftBox sx={{ order: 2 }}>
              <img width={"100px"} src={Frame1} alt="frame-1" />
            </LeftBox>
            <RightBox sx={{ order: 1 }}>
              <RighBoxttitleText component="h3" variant="h3">
                Shared and single rooms
              </RighBoxttitleText>
              <RightBoxParaText component="p" variant="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </RightBoxParaText>
            </RightBox>
          </FlexContainer>
        </FlexBoxWrapper>
      </MainBodyContainer>
    </WrapperBox>
  );
}

export default MainBodyMobile;
