import "./App.css";

import { Router, Route, Routes } from "react-router";

import Contato from "./content/pages/contato/contato";
import Home from "./content/pages/home/home";
import Serviços from "./content/pages/servicos/serviços";
import Sobre from "./content/pages/sobre/sobre";

import Header from "./content/header/header.jsx";
import Footer from "./content/footer/footer.jsx";
import UpHeader from "./content/header/upHeader";

function App() {
  return (
    <div className="App">
      <UpHeader />
      <Header />
      <Routes>
        <Route path="/TerraMap-Site/" element={<Home />} />
        <Route path="/TerraMap-Site/serviços" element={<Serviços />} />
        <Route path="/TerraMap-Site/sobre" element={<Sobre />} />
        <Route path="/TerraMap-Site/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
