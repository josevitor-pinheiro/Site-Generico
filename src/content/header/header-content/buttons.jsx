import React from "react";

import { Link } from "react-router-dom";

import "./buttons.css";

export default function Buttons() {
  return (
    <div className="buttons-container">
      <Link to="/TerraMap-Site/" className="Link">
        Home
      </Link>
      <Link to="/TerraMap-Site/serviços" className="Link">
        Serviços
      </Link>
      <Link to="/TerraMap-Site/sobre" className="Link">
        Sobre
      </Link>
      <Link to="/TerraMap-Site/contato" className="Link">
        Contato
      </Link>
    </div>
  );
}
