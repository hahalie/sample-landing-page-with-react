import React, {useContext} from "react";
import RestaurantDescription from '../components/RestaurantDescription'
import CulinaryImageGroup from '../components/CulinaryImageGroup'
import "../assets/scss/CulinaryDelight.scss";


import Fade from "react-reveal/Fade";

import { TextContext } from '../contexts/textContext'


const CulinaryDelight = () => {

  const { CulinaryDelightText } = useContext(TextContext)

  return (
    <section className="culinary-delight">
      <div className="container">
        <div className="restaurant-info">
          <Fade left>
            <RestaurantDescription info={CulinaryDelightText}/>
          </Fade>
          <CulinaryImageGroup/>
        </div>
      </div>
    </section>
  );
};

export default CulinaryDelight;
