import React from 'react'
import SocialMedia from './SocialMedia'
import Newsletter from './Newsletter'
import Fade from "react-reveal/Fade";

const FooterContentDivider = () => {
    return (
        <Fade bottom>
            <div className="footer-content-divider">
                <SocialMedia/>
                <Newsletter/>
            </div>
        </Fade>
        
    )
}

export default FooterContentDivider
