let sugObj = [{img: "assets/img/bad.vibes.memes.svg", username: 'bad.vibes.memes', link:"Segue você"},
                {img: "assets/img/chibirdart.svg", username: 'chibirdart', link:"Segue você"},
                {img: "assets/img/razoesparaacreditar.svg", username: 'razoesparaacreditar', link:"Novo no Instagram"},
                {img: "assets/img/adorable_animals.svg", username: 'adorable_animals', link:"Segue você"},
                {img: "assets/img/smallcutecats.svg", username: 'smallcutecats', link:"Segue você"},]

let sugestoes = sugObj.map(sug => (
<div class="sugestao">
<div class="usuario">
  <img src={sug.img} />
  <div class="texto">
    <div class="nome">{sug.username}</div>
    <div class="razao">{sug.link}</div>
  </div>
</div>

<div class="seguir">Seguir</div>
</div>))

export default function Sugestoes() {
    return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {sugestoes}
      
      </div>
    )
}