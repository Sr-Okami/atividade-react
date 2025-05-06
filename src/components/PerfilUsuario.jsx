import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/PerfilUsuario.css";
import Titulo from "./Titulo";
import Rodape from "./Rodape";

const PerfilUsuario = () => {
    const { id } = useParams();
    const [feedbackusuario, setFeedbackUsuario] = useState({ nome: '', comentario: '' });

    useEffect(() => {
        const feedback = localStorage.getItem('feedbackusuario');
        if (feedback) {
            setFeedbackUsuario(JSON.parse(feedback));
        }
    }, []);

    return (
        <div>
            <Titulo />
            <div className="perfil-usuario">
                <div className="user">
                    <h1>Usuário: {feedbackusuario.nome || 'Usuário'}</h1>
                </div>
                <div>
                    <p>Email: {feedbackusuario.email}</p>
                    <p>Comentário: {feedbackusuario.comentario}</p>
                </div>
            </div>
            <Rodape />
        </div>
    );
};

export default PerfilUsuario;