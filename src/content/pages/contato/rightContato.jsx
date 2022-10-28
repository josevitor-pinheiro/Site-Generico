import React, { useState } from "react";

import "./rightContato.css";

export default function RightContato() {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form
      action="https://api.staticforms.xyz/submit"
      method="POST"
      id="right-contato"
    >
      <input
        type="hidden"
        name="accessKey"
        value="8571af3d-5a4d-4e79-a6fc-585866aa76bf"
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="input"
        onChange={handleInputChange}
        value={formValues.name}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="input"
        onChange={handleInputChange}
        value={formValues.email}
      />
      <input
        type="number"
        name="phone"
        placeholder="Telefone"
        id="phone"
        className="input"
        onChange={handleInputChange}
        value={formValues.phone}
      />
      <textarea
        type="text"
        name="message"
        placeholder="Mensagem"
        className="input"
        id="mensagem"
        cols="21"
        rows="10"
        onChange={handleInputChange}
        value={formValues.message}
      />
      <input
        type="hidden"
        name="redirectTo"
        id="button-enviar"
        value="http://localhost:3000/contato"
      ></input>
      <button id="button-enviar">Enviar</button>
    </form>
  );
}
