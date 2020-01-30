import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
const BackToTop = () => {
    return (
        <div className="container">
        <div className="back-to-top">
          <a href="#hero">
            <FontAwesomeIcon icon={faChevronUp} />
          </a>
        </div>
      </div>
    )
}

export default BackToTop
