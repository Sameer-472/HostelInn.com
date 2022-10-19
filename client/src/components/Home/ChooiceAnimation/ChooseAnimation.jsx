import React from "react";
import Img1 from "./Assets/Card1.png";
import Img2 from "./Assets/Card2.png";
import Img3 from "./Assets/Card3.png";
import { Card1, Card2, Card3, Flex } from "./style";
import { Stepper } from "./Stepper";

export const ChooseAnimation = () => {
  return (
    <>
      <div>
      <Flex>
        <div style= {{marginTop: 20}}>
          <span style={{ fontSize: "3rem", fontWeight: "bolder" }}>
            {" "}
            All by your{" "}
          </span>
          <span
            style={{ fontSize: 40, fontWeight: "bolder", color: "darkorange" }}
          >
            CHOICE !
          </span>{" "}
          <br />
          <span>
            Get Budget friendly hostels with best location near <br /> your
            insitute!
          </span>
        </div>
      </Flex>
      <Flex style={{marginTop: -55 , height: '43rem'}}>
          <Card1>
            <img src={Img1} alt="Card1" width={247} height={438} />
          </Card1>
          <Card2>
            <img src={Img2} alt="Card2" width={247} height={438} />
          </Card2>
          <Card3 left="650px" top="200px">
            <img src={Img3} alt="Card3" width={247} height={438} />
          </Card3> 
          </Flex>
      </div>
    </>
  );
};
