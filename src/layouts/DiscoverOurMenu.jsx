import React, {useContext} from "react";
import RestaurantDescription from '../components/RestaurantDescription'
import MenuImageGroup from "../components/MenuImageGroup";
import "../assets/scss/DiscoverOurMenu.scss";
import Fade from "react-reveal/Fade";

import { TextContext } from '../contexts/textContext'


const DiscoverOurMenu = () => {

  const { DiscoverOurMenuText } = useContext(TextContext)

  return (
    <section className="discover-our-menu">
      <div className="container">
        <div className="restaurant-info">
          <MenuImageGroup/>
          <Fade right>
            <RestaurantDescription info={DiscoverOurMenuText}/>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default DiscoverOurMenu;
