import React from "react";
import ToggleMenu from "./ToggleMenu";
import Logo from "./Logo";
import MenuList from "./MenuList";

const Menu = () => {
  return (
    <nav className="menu">
      <ToggleMenu />
      <Logo />
      <MenuList />
    </nav>
  );
};

export default Menu;
