import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { NavBar } from "./componentes/NavBar";
import { Hero } from "./componentes/Hero";
import { About } from "./componentes/About";

function App() {
  return (
    <div className="App">
      {/* 4. Chamamos o componente aqui */}
      <NavBar />

      <Hero />

      <About />
    </div>
  );
}

export default App;
