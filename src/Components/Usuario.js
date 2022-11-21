/* import pencil from '../img/pencil.png'; */
import { useState } from "react";

export default function Usuario({ imagem, login, nome }) {
  const [nomeUsuario, setNomeUsuario] = useState(nome);
  const [imagemUsuario, setImagemUsuario] = useState(imagem);

  function mudarNome() {
    const novoNome = prompt("Coloque o seu nome");
    if (!novoNome) {
      alert("Nome inválido");
    } else {
      setNomeUsuario(novoNome);
    }
  }

  function mudarImagem() {
    const novaImagem = prompt("Coloque o link da imagem");
    if (!novaImagem) {
      alert("Link inválido");
    } else {
      setImagemUsuario(novaImagem);
    }
  }

  return (
    <div className="usuario" data-test="user">
      <img
        onClick={mudarImagem}
        src={imagemUsuario}
        alt="Usuário"
        data-test="profile-image"
      />
      <div className="texto">
        <strong>{login}</strong>
        <span>
          <p data-test='name'>{nomeUsuario}</p>
          <ion-icon
            onClick={mudarNome}
            name="pencil"
            data-test="edit-name"
          ></ion-icon>
          {/* <img onClick={mudarNome} className='icone' src={pencil} alt="Pencil" /> */}
        </span>
      </div>
    </div>
  );
}
