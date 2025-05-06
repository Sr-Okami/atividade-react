import React from "react";
import Titulo from "../components/Titulo";
import "../styles/Sobre.css";
import Rodape from "../components/Rodape";

const Sobre = () => {
  return (
    <div>
      <div>
        <Titulo />
        <h2 id="titulo_Sobre">Sobre</h2>
      </div>
      <p id="texto_Sobre">Oi, esta página foi desenvolvida por <b>Matheus</b> para a atividade de React. Nela contém principalmente o uso de React e Routers. A atividade consiste em três páginas: Iniciar, Comentários e Sobre, sendo esta última onde se encontra este pequeno texto.</p>
      <Rodape />
    </div>
  );
};

export default Sobre;