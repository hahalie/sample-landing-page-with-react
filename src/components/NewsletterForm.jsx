import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, } from "@fortawesome/free-solid-svg-icons";

const NewsletterForm = () => {
    return (
        <form action="" className="newsletter-form">
            <input
              type="text"
              className="newsletter-input"
              placeholder="Your email address..."
            />
            <button className="newsletter-btn" type="submit">
                <FontAwesomeIcon icon={faEnvelope} />
            </button>
        </form>
    )
}

export default NewsletterForm
