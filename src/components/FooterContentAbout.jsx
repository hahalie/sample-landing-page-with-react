import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk} from "@fortawesome/free-solid-svg-icons";

import Fade from "react-reveal/Fade";

const FooterContentAbout = () => {
    return (
        <Fade top>
            <div className="footer-content-about">
            <h4>About Rosa</h4>
            <div className="asterisk">
              <FontAwesomeIcon icon={faAsterisk} />
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
              officia quidem cumque facilis expedita hic. Nostrum ipsum
              voluptate earum laborum vero, sapiente repudiandae omnis dolorum,
              ipsam sed quisquam repellendus commodi.
            </p>
          </div>
        </Fade>
        
    )
}

export default FooterContentAbout
