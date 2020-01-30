import React from "react";
import MenuItem from "./MenuItem";

const MenuList = () => {
  const items = [
    {
      text: "Home",
      destination: "index.html",
      active: true
    },
    {
      text: "Menu",
      destination: "#",
      active: false
    },
    {
      text: "Reservations",
      destination: "#",
      active: false
    },
    {
      text: "News",
      destination: "#",
      active: false
    },
    {
      text: "Shop",
      destination: "#",
      active: false
    },
    {
      text: "Contact",
      destination: "#",
      active: false
    }
  ];

  return (
    <ul className="menu-list">
      {items.map((link, index) => (
        <MenuItem link={link} key={index} />
      ))}
    </ul>
  );
};

export default MenuList;
