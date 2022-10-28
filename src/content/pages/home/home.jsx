import React from "react";

import { Link } from "react-router-dom";

import "./home.css";

export default function Home(props) {
  return (
    <div className="home-container">
      <div className="home-inside">
        <h1>TerraMap soluções em Agrimensura</h1>
        <Link>Saiba Mais</Link>
        <Link>Contato</Link>
      </div>
    </div>
  );
}
