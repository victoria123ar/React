import { useState } from "react";

function Post(props) {
  const {
    usuario,
    imagem,
    post,
    imagemCurtida,
    curtida,
    like,
    salvo,
    qntLike,
  } = props;

  const [Salvo, setSalvo] = useState(salvo);
  const [Like, setLike] = useState(like);
  const [contador, setContador] = useState(qntLike);
  
  function salvarPost() {
    setSalvo(!Salvo);
  }

  function likePost() {
    setLike(!Like);
    if (!Like) {
      setContador(contador + 1);
    } else {
      setContador(contador - 1);
    
    }
  }

  function likeImagem() {
    if (!Like) {
        setLike(true)
        setContador(contador + 1)
    }
}

  return (
    <div className="post" data-test="post">
      <div className="topo">
        <div className="usuario">
          <img src={imagem} alt="Usuário" />
          {usuario}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src={post} alt="Post" data-test="post-image" onClick={likeImagem}/>
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            {Like ? (
              <ion-icon
                onClick={likePost}
                class="like"
                name="heart"
                data-test="like-post"
              ></ion-icon>
            ) : (
              <ion-icon
                onClick={likePost}
                name="heart-outline"
                data-test="like-post"
              ></ion-icon>
            )}
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            {Salvo ? (
              <ion-icon onClick={salvarPost} name="bookmark" data-test='save-post'></ion-icon>
            ) : (
              <ion-icon onClick={salvarPost} name="bookmark-outline" data-test='save-post'></ion-icon>
            )}
          </div>
        </div>

        <div className="curtidas">
          <img src={imagemCurtida} alt="Curtida" />
          <div className="texto">
            Curtido por <strong>{curtida}</strong> e{" "}
            <strong>outras <span data-test='likes-number'>{contador.toLocaleString('pt-BR')}</span> pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Posts() {
  const posts = [
    {
      usuario: "meowed",
      imagem: "assets/img/meowed.svg",
      post: "assets/img/gato-telefone.svg",
      imagemCurtida: "assets/img/respondeai.svg",
      curtida: "respondeai",
      salvo: false,
      like: false,
      qntLike: 101523
    },
    {
      usuario: "barked",
      imagem: "assets/img/barked.svg",
      post: "assets/img/dog.svg",
      imagemCurtida: "assets/img/adorable_animals.svg",
      curtida: "adorable_animals",
      salvo: false,
      like: false,
      qntLike: 200541
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post
          key={post.usuario}
          usuario={post.usuario}
          imagem={post.imagem}
          post={post.post}
          imagemCurtida={post.imagemCurtida}
          curtida={post.curtida}
          like={post.like}
          salvo={post.salvo}
          qntLike={post.qntLike}
        />
      ))}
    </div>
  );
}
