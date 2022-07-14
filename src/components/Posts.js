function Post(props) {
    return(<div class="post">
    <div class="topo">
      <div class="usuario">
        <img src={props.userimg} />
        {props.username}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>

    <div class="conteudo">
      <img src={props.postimg} />
    </div>

    <div class="fundo">
      <div class="acoes">
        <div>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div class="curtidas">
        <img src={props.userlikeimg} />
        <div class="texto">
          Curtido por <strong>{props.userlike}</strong> e <strong>outras {props.numberlike} pessoas</strong>
        </div>
      </div>
    </div>
  </div>)
}









export default function Posts () {
    return (
    <div class="posts">
        <Post userimg="assets/img/meowed.svg" username="meowed" postimg="assets/img/gato-telefone.svg" userlikeimg="assets/img/respondeai.svg" userlike="respondeai" numberlike="101.523"/>
        <Post userimg="assets/img/barked.svg" username="barked" postimg="assets/img/dog.svg" userlikeimg="assets/img/adorable_animals.svg" userlike="adorable_animals" numberlike="99.159"/>
    </div>)
}