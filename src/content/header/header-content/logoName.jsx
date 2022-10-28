import React from "react";

import ImageTerraMap from "../../../images/Logo-1.jpg";

import "./logoName.css";

export default function LogoName() {
  return (
    <div className="imageContainer">
      <img src={ImageTerraMap} alt="LogoTerraMap" id="logoTerraMap" />
    </div>
  );
}
