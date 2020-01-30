import React from "react";

const MenuItem = ({ link }) => {
  const { text, destination, active } = link;
  return (
    <li className="menu-item">
      <a
        href={destination}
        className={active ? "menu-link active" : "menu-link"}
      >
        {text}
      </a>
    </li>
  );
};

export default MenuItem;
