import React from 'react'
import MenuGroup1 from "../assets/images/menu-group-1.jpg";
import MenuGroup2 from "../assets/images/menu-group-2.jpg";
import MenuGroup3 from "../assets/images/menu-group-3.jpg";
import MenuGroup4 from "../assets/images/menu-group-4.jpg";
import Fade from "react-reveal/Fade";

const MenuImageGroup = () => {
    return (
        <Fade left>
            <div className="image-group padding-right">
              <img src={MenuGroup1} alt="menu group 1" />
              <img src={MenuGroup2} alt="menu group 2" />
              <img src={MenuGroup3} alt="menu group 3" />
              <img src={MenuGroup4} alt="menu group 4" />
            </div>
          </Fade>
    )
}

export default MenuImageGroup
