import React, { useState } from "react";
import "../styles/FeedbackForm.css"

const FeedbackForm = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [comentario, setComentario] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('feedbackusuario', JSON.stringify({
             nome: nome,
             email: email,
             comentario: comentario
        }));
        alert(`Feedback enviado! \nNome: ${nome}\nEmail: ${email}\nComentário: ${comentario}`);
        setNome('');
        setEmail('');
        setComentario('');
    }

    return(
        <main>
            <div id="caixaform">
                    <form onSubmit={handleSubmit} id="formulario">
                        <div  id="titulo">
                        <h1>Formulário</h1>
                        </div>
                        <div>
                            
                            {/*Area para Nome */}
                            <label htmlFor="nome">Nome:</label>
                            <input className="inputpessoal" onChange={(e) => setNome(e.target.value)} type="text" name="" id="nome"value={nome} placeholder="Digite seu nome..." required/>
                        </div>

                        <div>
                        {/*Area para Email */}
                        <label htmlFor="email">Email:</label>
                        <input className="inputpessoal" onChange={(e) => setEmail(e.target.value)} type="email" id="email" value={email} placeholder="Digite seu email..." required/>
                        </div>

                        <div>
                            {/*Area para Comentario */}
                            <label htmlFor="texto" id="comentario">Comentário:</label>
                            <textarea onChange={(e) => setComentario(e.target.value)} name="" id="texto" value={comentario} placeholder="Deixe um comentario..." rows={5} required></textarea>
                            <button id="enviar" type="submit">ENVIAR</button>
                        </div>
                    </form>
            </div>
    </main>
    );
};

export default FeedbackForm;