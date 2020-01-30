import React from 'react'
import DelightGroup1 from "../assets/images/delight-group-1.jpg";
import DelightGroup2 from "../assets/images/delight-group-2.jpg";
import Fade from "react-reveal/Fade";

const CulinaryImageGroup = () => {
    return (
        <div className="image-group">
            <Fade top>
              <img src={DelightGroup1} alt="Delight Group 1"/>
            </Fade>
            <Fade bottom>
              <img src={DelightGroup2} alt="Delight Group 1"/>
            </Fade>
          </div>
    )
}

export default CulinaryImageGroup
