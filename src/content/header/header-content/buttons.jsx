import React from "react";

import { Link } from "react-router-dom";

import "./buttons.css";

export default function Buttons() {
  return (
    <div className="buttons-container">
      <Link to="/" className="Link">
        Home
      </Link>
      <Link to="/serviços" className="Link">
        Serviços
      </Link>
      <Link to="/sobre" className="Link">
        Sobre
      </Link>
      <Link to="/contato" className="Link">
        Contato
      </Link>
    </div>
  );
}