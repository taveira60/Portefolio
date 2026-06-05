import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";

import { NavBar } from "./componentes/NavBar";

function App() {
  return (
    <div className="App">
      {/* 4. Chamamos o componente aqui */}
      <NavBar />

      {/* O resto das secções do teu portefólio vão entrar aqui em baixo */}
      <div style={{ height: "150vh", padding: "100px 20px" }}>
        <h2>[ Espaço para o resto do site ]</h2>
        <p>Faz scroll para veres a NavBar a mudar de estilo!</p>
      </div>
    </div>
  );
}

export default App;
