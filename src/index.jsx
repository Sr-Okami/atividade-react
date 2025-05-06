import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Iniciar from "./pages/Iniciar";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";
import "./styles/index.css";
import NotFound from "./pages/NotFound";
import PerfilUsuario from "./components/PerfilUsuario";

const iniciar = lazy(() => import("./pages/Iniciar"));
const contato = lazy(() => import("./pages/Contato"));
const sobre = lazy(() => import("./pages/Sobre"));

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Suspense fallback={<div>Carregando Pagina...,</div>}>
      <Routes>
        <Route path="/Iniciar" element={<Iniciar />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/user/:id" element={<PerfilUsuario />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
