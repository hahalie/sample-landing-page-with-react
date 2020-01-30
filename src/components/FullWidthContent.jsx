import React from 'react'
import Fade from "react-reveal/Fade";

const FullWidthContent = ({ info }) => {

    const {firstLetter, subHeadline, headline } = info

    return (
        <div className="container">
        <div className="global-headline">
          <Fade top>
            <div className="animate-top">
              <h2 className="sub-headline">
                <span className="first-letter">{firstLetter}</span>{subHeadline}
              </h2>
            </div>
          </Fade>
          <Fade bottom>
            <div className="animate-bottom">
    <h1 className="headline">{headline}</h1>
            </div>
          </Fade>
        </div>
      </div>
    )
}

export default FullWidthContent
