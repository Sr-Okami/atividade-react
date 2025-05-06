import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";

const NotFound = () => {
  return (
    <div id="notfound">
     <div id="notfound-container">
        <h1 id="Erro">Erro: 404 :(</h1>
        <p id="Erro-texto">Endereço Invalido.</p>
        <Link to={"/Iniciar"}>Voltar para pagina Inicial</Link>
      </div>
    </div>
  );
};

export default NotFound;
