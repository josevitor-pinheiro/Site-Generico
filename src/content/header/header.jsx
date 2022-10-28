import React from "react";

import LogoName from "./header-content/logoName.jsx";
import Buttons from "./header-content/buttons.jsx";

import "./header.css";

export default function Header() {
  return (
    <div className="header-container">
      <LogoName />
      <hr id="hr" />
      <Buttons />
    </div>
  );
}
