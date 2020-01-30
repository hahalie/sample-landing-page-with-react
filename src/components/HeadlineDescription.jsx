import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";

const HeadlineDescription = ({text, btn}) => {
    return (
        <div className="headline-description">
          <div className="separator">
            <div className="line line-left"></div>
            <div className="asterisk">
              <FontAwesomeIcon icon={faAsterisk} />
            </div>
            <div className="line line-right"></div>
          </div>
          <div className="single-animation">
            <h5>{text}</h5>
            <a href="#hero" className="btn cta-btn">
              {btn}
            </a>
          </div>
        </div>
    )
}

export default HeadlineDescription
