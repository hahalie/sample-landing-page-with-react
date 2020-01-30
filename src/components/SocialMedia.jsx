import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faFacebookSquare,
    faPinterest,
    faLinkedinIn,
    faTripadvisor
  } from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => {
    return (
        <div className="social-media">
              <h4>Follow along</h4>
              <ul className="social-icons">
                <li>
                  <a href="https://twitter.com/" target="__blank">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/" target="__blank">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/" target="__blank">
                    <FontAwesomeIcon icon={faPinterest} />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/feed/" target="__blank">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </li>
                <li>
                  <a href="https://www.tripadvisor.com/" target="__blank">
                    <FontAwesomeIcon icon={faTripadvisor} />
                  </a>
                </li>
              </ul>
            </div>
    )
}

export default SocialMedia
