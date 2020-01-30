import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";

const RestaurantDescription = ({info}) => {

  const { firstLetter, subHeadline, headline, description, ctaBtn } = info

  return (
    <div className="restaurant-description padding-right">
      <div className="global-headline">
        <h2 className="sub-headline">
<span className="first-letter">{firstLetter}</span>{subHeadline}
        </h2>
  <h1 className="headline headline-dark">{ headline }</h1>
        <div className="asterisk">
          <FontAwesomeIcon icon={faAsterisk} />
        </div>
      </div>
      <p>{description}</p>
      <a href="#" className="btn body-btn">{ctaBtn}</a>
    </div>
  );
};

export default RestaurantDescription;
