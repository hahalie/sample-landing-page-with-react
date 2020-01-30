import React from "react";
import BackToTop from '../components/BackToTop'
import FooterContent from '../components/FooterContent'

import "../assets/scss/Footer.scss";


const Footer = () => {
  return (
    <footer>
      <BackToTop/>
      <FooterContent/>
    </footer>
  );
};

export default Footer;
