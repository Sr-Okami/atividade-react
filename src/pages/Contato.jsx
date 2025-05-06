import React from "react";
import "../styles/Contato.css";
import Titulo from "../components/Titulo";
import Rodape from "../components/Rodape";

const Contato = () => {
  return (
    <div>
      <Titulo />
      <div>
        <div id="informacoes-contato">
          <h2 id="titulo_contato">Contato</h2>
          <p><strong>Email:</strong> contato@exemplo.com</p>
          <p><strong>Telefone:</strong> (11) 1234-5678</p>
          <p><strong>Endereço:</strong> Rua Exemplo, 123 - Paraipaba, CE</p>
        </div>
      </div>
      <Rodape />
    </div>
  );
};

export default Contato;