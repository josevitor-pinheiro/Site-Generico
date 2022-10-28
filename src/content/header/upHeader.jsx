import React from "react";

import "./upHeader.css";

import LogoPhone from "../../images/1257.png";
import LogoEmail from "../../images/email-icon.png";
import LogoLocal from "../../images/local.png";

export default function UpHeader() {
  return (
    <div id="up-header">
      <div className="logo">
        <img src={LogoPhone} alt="Icone-Tell" />
      </div>
      <span className="span-up-header">(51)9 8150-9005</span>
      <div className="logo">
        <img src={LogoEmail} alt="LogoEmail" />
      </div>
      <span className="span-up-header">agri.pinheiro@gmail.com</span>
      <div className="logo">
        <img src={LogoLocal} alt="LogoLocal" />
      </div>
      <span className="span-up-header">Três Cachoeiras - RS</span>
    </div>
  );
}
