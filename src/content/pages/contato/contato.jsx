import React from "react";

import "./contato.css";
import LeftContato from "./leftContato";
import RightContato from "./rightContato";

export default function Contato(props) {
  return (
    <div className="main-container-contato">
      <div className="container-contato-medium">
          <h1>Entre em contato</h1>
        <div id="left-right">
          <LeftContato />
          <RightContato />
        </div>
      </div>
    </div>
  );
}
