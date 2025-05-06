import React from "react";
import "../styles/Titulo.css";
import { Link } from "react-router-dom";

function Titulo() {
  return (
    <header>
      <div id="cabecalho">
        <h1>Atividade REACT</h1>
        <nav id="navegacao">
          <ul>
            <li>
              <Link to="/Iniciar">Início</Link>
            </li>
            <li>
              <Link to="/Contato">Contato</Link>
            </li>
            <li>
              <Link to="/Sobre">Sobre</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Titulo;
