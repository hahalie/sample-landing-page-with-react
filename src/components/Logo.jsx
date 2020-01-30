import React from "react";
import LogoImage from "../assets/images/logo-rosa.png";

const Logo = () => {
  return (
    <a href="index.html" className="logo">
      <img src={LogoImage} alt="logo" />
    </a>
  );
};

export default Logo;
