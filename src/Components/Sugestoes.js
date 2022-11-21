function Sugestao(props) {
  const { usuario, imagem, seguir } = props;

  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={imagem} alt=''/>
        <div className="texto">
          <div className="nome">{usuario}</div>
          <div className="razao">{seguir}</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  );
}
export default function Sugestoes() {
  const sugestoes = [
    {
      usuario: "bad.vibes.memes",
      imagem: "assets/img/bad.vibes.memes.svg",
      seguir: "Segue você",
    },
    {
      usuario: "chibirdart",
      imagem: "assets/img/chibirdart.svg",
      seguir: "Segue você",
    },
    {
      usuario: "razoesparaacreditar",
      imagem: "assets/img/razoesparaacreditar.svg",
      seguir: "Novo no Instagram",
    },
    {
      usuario: "adorable_animals",
      imagem: "assets/img/adorable_animals.svg",
      seguir: "Segue você",
    },
    {
      usuario: "smallcutecats",
      imagem: "assets/img/smallcutecats.svg",
      seguir: "Segue você",
    },
  ];
  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {sugestoes.map((sugestao) => (
        <Sugestao
          key={sugestao.usuario}
          usuario={sugestao.usuario}
          imagem={sugestao.imagem}
          sugestao={sugestao.seguir}
        />
      ))}
    </div>
  );
}
