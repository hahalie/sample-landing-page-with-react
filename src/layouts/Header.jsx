import React from "react";
import Menu from "../components/Menu";
import "../assets/scss/Header.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Menu />
      </div>
    </header>
  );
};

export default Header;
