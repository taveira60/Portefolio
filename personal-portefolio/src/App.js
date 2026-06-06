import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NavBar } from "./componentes/NavBar";
import { Hero } from "./componentes/Hero";
import { About } from "./componentes/About";
import { Skills } from "./componentes/Skills";

function App() {
  return (
    <Router>
      <div className="App">
        {/* 4. Chamamos o componente aqui */}
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />

                <About />
              </>
            }
          />

          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
