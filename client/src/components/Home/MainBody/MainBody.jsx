import React from 'react'
import Img from "./assets/img.png";
import Frame1 from "./assets/Frame1.png"
import Frame2 from "./assets/Frame2.png"
import Frame3 from "./assets/Frame3.png"
import Frame4 from "./assets/Frame4.png"
import Frame5 from "./assets/Frame5.png"
import Frame6 from "./assets/Frame6.png"
import { Image , Circle1 , Circle2 , Circle3 , Circle4 , Circle5 , Circle6} from './style';



const MainBody = () => {
  return (
    <div>
      <Image>
      <img src={Img} alt="" style={{maxWidth: '100%'}} height={500}/>
      {/* <Circle1>
        <img src={Frame1} alt="" width={200}/>
      </Circle1> */}
      {/* <Circle2>
        <img src={Frame2} alt="" />
      </Circle2>
      <Circle3>
        <img src={Frame3} alt="" />
      </Circle3>
      <Circle4>
        <img src={Frame4} alt="" />
      </Circle4>
      <Circle5>
        <img src={Frame5} alt="" />
      </Circle5>
      <Circle6>
        <img src={Frame6} alt="" />
      </Circle6> */}
      </Image>
    </div>
  )
}

export default MainBody

