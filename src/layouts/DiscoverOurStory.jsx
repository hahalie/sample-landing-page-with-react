import React, {useContext} from "react";
import RestaurantDescription from '../components/RestaurantDescription'
import RestaurantStoryImage from '../components/RestaurantStoryImage'
import "../assets/scss/DiscoverOurStory.scss";

import Fade from "react-reveal/Fade";

import { TextContext } from '../contexts/textContext'

const DiscoverOurStory = () => {
  const { DiscoverOurStoryText } = useContext(TextContext)
  
  return (
    <section className="discover-our-story">
      <div className="container">
        <div className="restaurant-info">
          <Fade left>
            <RestaurantDescription info={DiscoverOurStoryText}/>
          </Fade>          
            <RestaurantStoryImage />
        </div>
      </div>
    </section>
  );
};

export default DiscoverOurStory;
