import React from 'react'
import OurStory from "../assets/images/our-story-1.jpg";
import Fade from "react-reveal/Fade";

const RestaurantStoryImage = () => {
    return (
        <Fade right>
            <div className="restaurant-info-img">
              <img src={OurStory} alt="Our Story" />
            </div>
        </Fade>
        
    )
}

export default RestaurantStoryImage
