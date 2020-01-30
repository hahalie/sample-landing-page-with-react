import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const ToggleMenu = () => {
  return (
    <div
      className="menu-toggle"
      onClick={() => document.body.classList.toggle("open")}
    >
      <FontAwesomeIcon icon={faBars} />
      <FontAwesomeIcon icon={faTimes} />
    </div>
  );
};

export default ToggleMenu;
