function Story(props) {
  const { usuario, imagem } = props;
  return (
    <>
      <div className="story">
        <div className="imagem">
          <img src={imagem} alt="Usuário" />
        </div>
        <div className="usuario">{usuario}</div>
      </div>

      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </>
  );
}

export default function Stories() {
  const stories = [
    { usuario: "9gag", imagem: "assets/img/9gag.svg" },
    { usuario: "meowed", imagem: "assets/img/meowed.svg" },
    { usuario: "barked", imagem: "assets/img/barked.svg" },
    {
      usuario: "nathanwpylestrangeplanet",
      imagem: "assets/img/nathanwpylestrangeplanet.svg",
    },
    { usuario: "wawawicomics", imagem: "assets/img/wawawicomics.svg" },
    { usuario: "respondeai", imagem: "assets/img/respondeai.svg" },
    { usuario: "filomoderna", imagem: "assets/img/filomoderna.svg" },
    { usuario: "memeriagourmet", imagem: "assets/img/memeriagourmet.svg" },
  ];
  return (
    <div class="stories">
      {stories.map((story) => (
        <Story key={story.usuario} usuario={story.usuario} imagem={story.imagem} />
      ))}
    </div>
  );
}
